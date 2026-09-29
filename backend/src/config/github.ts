import { config } from "../utils/index.js";

const username = config.setEnv("GITHUB_USERNAME");
const token = config.setEnv("GITHUB_TOKEN");

export {
    username,
    token,
}