import { VinylType } from "@/types/vinyl";
import { useEffect, useState } from "react";

export function useGetVinylBySlug(slug: string | string[]) {
    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/vinyls?filters[slug][$eq]=${slug}&populate=*`;
    const [result, setResult] = useState<VinylType[] | null>(null);
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