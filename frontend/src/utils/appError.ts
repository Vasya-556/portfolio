class AppError extends Error {
    constructor (message: string, public readonly statusCode?: number) {
        super(message);
        this.name = "App error";
    }
}

export {
    AppError
}