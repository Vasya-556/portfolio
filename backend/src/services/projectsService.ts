import { githubConfig } from "../config/index.js";

type Repository = {
    topics: string[] | null,
    language: string | null,
    languages_url: string | null,
    html_url: string | null,
    description: string | null,
    homepage: string | null,
    name: string,
}

const githubHeaders = new Headers();
githubHeaders.append("Accept", "application/vnd.github+json");
githubHeaders.append("Authorization", `Bearer ${githubConfig.token}`);
githubHeaders.append("X-GitHub-Api-Version", "2026-03-10");

const params = new URLSearchParams();
params.append("per_page", "100");

const getProjects = async () => {
    const url = `https://api.github.com/users/${githubConfig.username}/repos?${params}`;
    try {
        const response = await fetch(
            url, {
                method: "GET",
                headers: githubHeaders,
            });
        if (!response.ok) {
            throw new Error("Can't fetch GitHub API");
        }

        const githubResponse = await response.json();
        if (isGithubResponse(githubResponse)){
            const result = await parseGithubResponse(githubResponse);
            return result;
        }
        else {
            throw new Error("Unexpected result");
        }
    }
    catch (error) {
        if (error instanceof Error){
            throw error
        }
        else {
            throw "Something went wrong"
        }
    }
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
            "language" in repo &&
            (repo.language === null || typeof repo.language === "string") &&
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

const parseGithubResponse = async (githubResponse: Repository[]) => {
    // Trim the response to only relevant part
    const projects: Repository[] = [];
    for (let i of githubResponse){
        const repo: Repository = {
            topics: i.topics,
            language: i.language,
            languages_url: i.languages_url,
            html_url: i.html_url,
            description: i.description,
            homepage: i.homepage,
            name: i.name,
        }
        projects.push(repo);
    }
    
    // Filter projects by topics
    const result = [];
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

export {
    getProjects,
};