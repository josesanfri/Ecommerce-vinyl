/* eslint-disable @next/next/no-img-element */
"use client";

import { useGetFeaturedProducts } from "@/api/useGetFeaturedProducts";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import SkeletonSchema from "./skeleton-schema";
import { VinylType } from "@/types/vinyl";
import { Card, CardContent } from "./ui/card";
import { Expand, ShoppingCart } from "lucide-react";
import IconButton from "./icon-button";
import { useRouter } from "next/navigation";
import { useCartStore } from "@/hooks/use-cart";

const FeaturedProducts = () => {
    const { result, loading} = useGetFeaturedProducts();
    const router = useRouter();
    const { addItem } = useCartStore();

    const products = result ?? [];

    return (
        <section className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24">
            <h3 className="px-6 text-3xl sm:pb-8">Productos destacados</h3>
            <Carousel>
                <CarouselContent className="-ml-2 md:-ml-4">
                    {loading && (
                        <SkeletonSchema grid={3} />
                    )}
                    {products !== null && (
                        products.map((vinyl: VinylType) => {
                            const { id, images, title, slug, artist, genre } = vinyl;

                            return (
                                <CarouselItem key={id} className="md:basis-1/2 lg:basis-1/3 group">
                                    <div className="p-1">
                                        <Card className="py-4 border border-gray-200 shadow-none">
                                            <CardContent className="relative flex items-center justify-center px-6 py-2">
                                                <img 
                                                    src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${images[0].url}`} 
                                                    alt={title}
                                                    className="h-full w-full object-cover rounded-xl" 
                                                />
                                                <div className="absolute w-full px-6 transition duration-200 opacity-0 group-hover:opacity-100">
                                                    <div className="flex justify-center gap-x-6">
                                                        <IconButton 
                                                            onClick={() => router.push(`/vinyls/${slug}`)} 
                                                            icon={<Expand size={20}  className="text-gray-600"/>}  
                                                        />

                                                        <IconButton 
                                                            onClick={() => addItem(vinyl)} 
                                                            icon={<ShoppingCart size={20}  className="text-gray-600"/>}  
                                                        />
                                                    </div>
                                                </div>
                                            </CardContent>
                                            <div className="flex flex-col justify-between gap-4 px-8">
                                                <h3 className="text-xl font-bold">{title}</h3>
                                                <div className="flex items-center gap-3 justify-between">
                                                    <p className="px-2 py-1 text-white bg-black rounded-full dark:bg-white dark:text-black w-fit">{artist}</p>
                                                    <p className="px-2 py-1 text-white bg-black rounded-full dark:bg-white dark:text-black w-fit">{genre}</p>
                                                </div>
                                            </div>
                                        </Card>
                                    </div>
                                </CarouselItem>
                            )
                        })
                    )}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext className="hidden sm:flex" />
            </Carousel>
        </section>
    );
};

export default FeaturedProducts;