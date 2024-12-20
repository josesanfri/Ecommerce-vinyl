import { CategoryType } from "@/types/category";
import { useEffect, useState } from "react";

export function useGetCategories(){
    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/categories?populate=*`;
    const [result, setResult] = useState<CategoryType[] | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>("");

    useEffect(() => {
        (async () => {
            try {
                const res = await fetch(url);
                const json = await res.json();
                setResult(json.data);
                setLoading(false);
            } catch (error) {
                if (error instanceof Error) {
                    setError(error.message);
                } else {
                    setError("Unexpected error");
                }
                setLoading(false);
            }
        })()
    }, [url]);

    return { result, loading, error };
}