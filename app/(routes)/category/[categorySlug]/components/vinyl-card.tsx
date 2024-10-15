"use client"

/* eslint-disable @next/next/no-img-element */
import IconButton from "@/components/icon-button";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { formatPrice } from "@/lib/formatPrice";
import { VinylType } from "@/types/vinyl";
import { Expand, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

type VinylCardProps = {
    vinyl: VinylType;
};

const VinylCard = (props: VinylCardProps) => {
    const { vinyl } = props;
    const router = useRouter();
    return (
        <Link href={`/vinyls/${vinyl.slug}`} className="relative p-2 transition-all duration-100 rounded-lg hover:shadow-md">
            <article className="absolute flex items-center justify-between gap-3 px-2 z-[1] top-4">
                <p className="px-2 py-1 text-xs text-white bg-black rounded-full dark:bg-white dark:text-black w-fit">
                    {vinyl.artist}
                </p>
                <p className="px-2 py-1 text-xs text-white bg-yellow-900 rounded-full dark:bg-white dark:text-black w-fit">
                    {vinyl.genre}
                </p>
            </article>
            <Carousel
                opts={{
                    align: "start",
                }}
                className="w-full w-max-sm"
            >
                <CarouselContent>
                    {vinyl.images.map((image) => (
                        <CarouselItem key={image.id} className="group"> 
                            <img
                                key={image.id}
                                src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${image.url}`}
                                alt={`'imagen${image.id}'`}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute w-full px-6 transition duration-200 opacity-0 group-hover:opacity-100 bottom-5">
                                <div className="flex justify-center gap-x-6">
                                    <IconButton 
                                        onClick={() => router.push(`/vinyls/${vinyl.slug}`)}
                                        icon={<Expand size={20} />} 
                                        className="bg-gray-600"
                                    />
                                    <IconButton 
                                        onClick={() => console.log("vinyl")} 
                                        icon={<ShoppingCart size={20} />}
                                        className="bg-gray-600"
                                    />
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
            <p className="text-2xl text-center">{vinyl.title}</p>
            <p className="font-bold text-center">{formatPrice(vinyl.price)}</p>
        </Link>
    );
};  

export default VinylCard;