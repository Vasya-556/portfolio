import { config } from "../utils/index.js";

const origin = config.setEnv("FRONTEND_URL");
const isProd = config.setEnv("IS_PRODUCTION") === "true";

export {
    origin,
    isProd,
}