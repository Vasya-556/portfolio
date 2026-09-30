import { useState, useEffect } from "react";
import { appConfig } from "../config";

type Props<T> = {
    func(): Promise<T>,
}

const useFetch = <T>({func}: Props<T>) => {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<unknown>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                setError(null);

                const result = await func();

                setData(result);
            }
            catch (error){
                setError(error);

                if (!appConfig.isProd){
                    console.log(error)
                }
            }
            finally {
                setLoading(false)
            }
        }
        fetchData();
    }, [func])

    return {
        data,
        loading,
        error,
    }
}

export {
    useFetch,
}