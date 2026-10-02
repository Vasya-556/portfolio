type Project = {
    html_url: string | null,
    description: string | null,
    homepage: string | null,
    name: string,
    languages: Languages | null
}

type Languages = {
    [key: string]: number
}

export type {
    Project,
    Languages
}