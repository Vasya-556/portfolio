import { appConfig } from "../config";

type args = {
    url: string,
    method: "post" | "get" | "put" | "delete";
}

const fetchAPI = (
    args: args
) => {
    return fetch(`${appConfig.backendURL}${args.url}`, {
            method: args.method
        }
    ).then(async res => {
        const message = await res.json()
        if (res.ok){
            return message
        }
        else {
            if (appConfig.isProd){
                throw new Error("Oops something went wrong on our side")
            }
            else {
                console.log(message.error, res.status)
            }
        }
    })
}

export {
    fetchAPI
}