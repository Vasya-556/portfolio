import { app } from "./app.js";
import { appConfig } from "./config/index.js";

app.listen(appConfig.port, () => {
    console.log(`Server is running on port: ${appConfig.port}\n`)
})