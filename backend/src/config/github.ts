import { config } from "../utils/index.js";

const username = config.setEnv("GH_USERNAME");
const token = config.setEnv("GH_TOKEN");

export {
    username,
    token,
}