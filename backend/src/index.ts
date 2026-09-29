import express from "express";
import type { Request, Response} from "express";
import cors from "cors";
import { appConfig } from "./config/index.js";
import { projectsRoutes } from "./routes/index.js";

const app = express();

const corsOptions = {
	origin: [appConfig.origin],
	credentials: false,
}

app.use(cors(corsOptions))
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
	res.send("<h1>Hello world!</h1>")
})

app.use("/projects", projectsRoutes.router)

const port = 8000;

app.listen(port, () => {
    console.log(`Server is running on port: ${port}\nhttp://localhost:${port}`)
})