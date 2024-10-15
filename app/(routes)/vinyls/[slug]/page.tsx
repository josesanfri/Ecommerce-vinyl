"use client";

import { useGetVinylBySlug } from "@/api/getVinylBySlug";
import { useParams } from "next/navigation";
import SkeletonVinyl from "./components/skeleton-vinyl";
import CarouselVinyl from "./components/carousel-vinyl";
import InfoVinyl from "./components/info-vinyl";

export default function Page() {
    const params = useParams();
    const { slug } = params;

    const { result } = useGetVinylBySlug(slug);
    console.log(result);

    if(result === null){
        return <SkeletonVinyl />
    }
    return (
        <main className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24">
            <div className="grid sm:grid-cols-2">
                <div>
                    <CarouselVinyl images={result[0].images} />
                </div>
                <div className="sm:px-12">
                    <InfoVinyl vinyl={result[0]} />
                </div>
            </div>
        </main>
    );
}   