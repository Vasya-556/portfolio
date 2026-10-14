import { beforeAll, afterAll } from "vitest";
import { server } from "../src/server.js";
import { appConfig } from "../src/config/index.js";

let baseURL: string;

beforeAll(async () => {
    if (!server.listening){
        await new Promise<void>((resolve, reject) => {
            server.once("error", reject);
            server.listen(0, resolve)
        })
    }

    const address = server.address();

    if (!address || typeof address === "string"){
        throw new Error("Cant connect to server");
    }

    const host = address.family === "IPv6"
        ? `[${address.address}]`
        : address.address

    baseURL = new URL(`${appConfig.protocol}://${host}:${address.port}`).origin;
})

afterAll(() => {
    server.close();
})

const testsSetup = () => {
    if (!baseURL) {
        throw new Error("Test server has not been initialized");
    }

    return baseURL;
}

export {
    testsSetup
}