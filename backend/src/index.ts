import express from "express";
import type { Request, Response} from "express";

const app = express();

app.use(express.json());


app.get("/", (req: Request, res: Response) => {
	res.send("<h1>Hello world!</h1>")
})

const port = 8000;

app.listen(port, () => {
    console.log(`Server is running on port: ${port}\nhttp://localhost:${port}`)
})