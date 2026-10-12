import { appConfig, githubConfig } from "../config/index.js";
import { AppError } from "../utils/index.js";

type BaseProject = {
    html_url: string | null,
    description: string | null,
    homepage: string | null,
    name: string,
}

type Repository = BaseProject & {
    topics: string[] | null,
    languages_url: string | null,
}

type Project = BaseProject & {
    languages: Languages | null
}

type Languages = {
    [key: string]: number
}

const githubHeaders = new Headers({
    Accept: "application/vnd.github+json",
    Authorization: `Bearer ${githubConfig.token}`,
    "X-GitHub-Api-Version": "2026-03-10",
})

const getProjects = async (): Promise<Project[]> => {
    const repositories: Repository[] = [];
    let page = 1;

    while (true) {
        const params = new URLSearchParams({
            per_page: "100",
            page: String(page),
        })

        const url = `https://api.github.com/users/${githubConfig.username}/repos?${params}`;

        const response = await fetch(
            url, {
                method: "GET",
                headers: githubHeaders
            }
        )

        if (!response.ok) {
            let message;
            if (appConfig.isProd) {
                message = "Cant fetch Github data";
            } 
            else {
                message = `Can't fetch GitHub API\nStatus = ${response.status}\n${response.statusText}`;
            }
            throw new AppError.AppError(502, message)
        }

        const result: unknown = await response.json();

        if (!isGithubResponse(result)){
            throw new AppError.AppError(502, "Unexpected result from github API")
        }

        repositories.push(...result)

        if (result.length < 100){
            break;
        }
        page++;
    }

    const filteredProjects = filterGithubResponse(repositories);
    const result = await enrichProjects(filteredProjects);
    return result
};

const isGithubResponse = (obj: unknown): obj is Repository[] => {
    if (!Array.isArray(obj)) {
        return false;
    }

    return obj.every(
        repo =>
            typeof repo === "object" &&
            repo !== null &&
            "topics" in repo &&
            (
                repo.topics === null ||
                (
                    Array.isArray(repo.topics) &&
                    repo.topics.every((topic: unknown) => typeof topic === "string")
                )
            ) &&
            "languages_url" in repo &&
            (repo.languages_url === null || typeof repo.languages_url === "string") &&
            "html_url" in repo &&
            (repo.html_url === null || typeof repo.html_url === "string") &&
            "description" in repo &&
            (repo.description === null || typeof repo.description === "string") &&
            "homepage" in repo &&
            (repo.homepage === null || typeof repo.homepage === "string") &&
            "name" in repo &&
            typeof repo.name === "string"
    );
};

const isGithubLanguagesResponse = (obj: unknown): obj is Languages => {
    if (typeof obj !== "object" || obj === null || Array.isArray(obj)) {
        return false;
    }

    const values = Object.values(obj);

    return values.every(
        val => 
            typeof val === "number" &&
            Number.isFinite(val) &&
            val >= 0 
    )
};

const getLanguages = async (url: string): Promise<Languages> => {
    const response = await fetch(
        url, {
            method: "GET",
            headers: githubHeaders,
        });
    if (!response.ok) {
        let message;
        if (appConfig.isProd) {
            message = "Failed to fetch project languages";
        }
        else {
            message = `Couldn't fetch language\nStatus = ${response.status}\n${response.statusText}`;
        }
        throw new AppError.AppError(502, message);
    }
    const result = await response.json();
    if (isGithubLanguagesResponse(result)){
        return result
    }
    else {
        throw new AppError.AppError(502, "Unexpected result from language url")
    }
};

const convertLanguagesIntoPercentage = (languages: Languages): Languages => {
    let sum = 0;
    
    Object.values(languages).forEach(val => {
        sum += val
    })
    
    if (sum === 0) {
        return {};
    }

    let result: Languages = {};

    Object.entries(languages).forEach(([key, val]) => {
        result[key] = Math.round((val/sum * 100) * 10) / 10;
    })

    return result
};

const filterGithubResponse = (projects: Repository[]): Repository[] => {
    const result: Repository[] = [];
    for (let i of projects){
        const topics = i.topics;
        if (topics === null){
            continue;
        }
        if (topics.includes("portfolio")){
            result.push(i);
        }
    }

    return result;
};

const enrichProjects = async (projects: Repository[]): Promise<Project[]> => {
    return Promise.all(
        projects.map(async (project) => {
            let languages: Languages | null = null;

            if (project.languages_url) {
                const rawLanguages = await getLanguages(project.languages_url);
                languages = convertLanguagesIntoPercentage(rawLanguages);
            }
            return {
                html_url: project.html_url,
                description: project.description,
                homepage: project.homepage,
                name: project.name,
                languages: languages
            };
        })
    )
}

export {
    getProjects,
};