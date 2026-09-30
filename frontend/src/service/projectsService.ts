import { fetchAPI } from "../api/api";

const baseUrl = "/projects"

const getProjects = () => {
    return fetchAPI({
		url: `${baseUrl}`,
		method: "get",
	})
}

export {
    getProjects
}