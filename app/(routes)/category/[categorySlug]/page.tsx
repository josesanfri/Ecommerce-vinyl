"use client";
import { useGetCategoryProduct } from "@/api/useGetCategoryProduct";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { useParams } from "next/navigation";
import FiltersControlsCategory from "./components/filters-controls-category";
import SkeletonSchema from "@/components/skeleton-schema";
import VinylCard from "./components/vinyl-card";
import { VinylType } from "@/types/vinyl";
import { useState } from "react";

export default function Page() {
    const params = useParams();
    const { result, loading } = useGetCategoryProduct(params.categorySlug);

    const [filterFormat, setFilterFormat] = useState<string>("");

    const filteredVinyls = !loading && result ? (
        filterFormat === '' ? result : result.filter((vinyl: VinylType) => vinyl.attributes.format === filterFormat)
    ) : [];

    return (
        <main className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24">
            {result !== null && !loading && (
                <h1 className="text-3xl font-medium">Productos de {result[0]?.attributes?.category?.data.attributes?.categoryName}</h1>
            )}
            <Separator />
            <section className="sm:flex sm:justify-between">
                <FiltersControlsCategory setFilterFormat={setFilterFormat} />
                <article className="grid gap-5 mt-8 sm:grid-cols-2 md:grid-cols-3 md:gap-10">
                    {loading && (
                        <SkeletonSchema grid={3} />
                    )}
                    {!loading && filteredVinyls.length > 0 && (
                        filteredVinyls.map((vinyl: VinylType) => (
                            <VinylCard key={vinyl.id} vinyl={vinyl} />
                        ))
                    )}
                    {!loading && filteredVinyls.length === 0 && (
                        <p>No se encontraron resultados</p>
                    )}
                </article>
            </section>
        </main>
    );
} 