import { createServer, isRunnableDevEnvironment } from "vite";

const server = await createServer({
    server: {
        middlewareMode: true,
    },
});

try {
    const environment = server.environments.ssr;

    if (!isRunnableDevEnvironment(environment)) {
        throw new Error("Vite SSR environment is not runnable");
    }

    await environment.runner.import("/scripts/projectsJSONGenerator.mts");
} finally {
    await server.close();
}