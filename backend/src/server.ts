import { app } from "./app.js";
import { appConfig } from "./config/index.js";

const server = app.listen(appConfig.port, () => {
    console.log(`Server is running on port: ${appConfig.port}\n`)
})

export {
    server
}