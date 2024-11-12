"use client"

/* eslint-disable @next/next/no-img-element */
import IconButton from "@/components/icon-button";
import { Card, CardContent } from '@/components/ui/card';
import { formatPrice } from "@/lib/formatPrice";
import { VinylType } from "@/types/vinyl";
import { Expand, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCartStore } from "@/hooks/use-cart";


type VinylCardProps = {
    vinyl: VinylType;
};

const VinylCard = (props: VinylCardProps) => {
    const { vinyl } = props;
    const router = useRouter();
    const { addItem } = useCartStore();

    return (
        <Link href={`/vinyls/${vinyl.attributes.slug}`} className="relative p-2 transition-all duration-100 rounded-lg hover:shadow-md">
            <Card className="py-4 border border-gray-200 shadow-none">
                <CardContent className="relative flex items-center justify-center px-6 py-2">
                    <img 
                        src={`${vinyl.attributes.images.data[0].attributes.url}`}
                        alt={vinyl.attributes.title}
                        className="h-full w-full lg:h-52 lg:w-52 object-cover rounded-xl " 
                    />
                    <div className="absolute w-full px-6 transition duration-200 opacity-0 group-hover:opacity-100">
                        <div className="flex justify-center gap-x-6">
                            <IconButton 
                                onClick={() => router.push(`/vinyls/${vinyl.attributes.slug}`)} 
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
                    <h3 className="text-xl font-bold">{vinyl.attributes.title} - {formatPrice(vinyl.attributes.price)}</h3>
                    <div className="flex md:flex-col lg:flex-row items-center gap-3 justify-between">
                        <p className="rounded-full text-sm px-4 py-2 text-center mb-2 text-white bg-black dark:bg-white dark:text-black">{vinyl.attributes.artist}</p>
                        <p className="rounded-full text-sm px-4 py-2 text-center mb-2 text-white bg-black dark:bg-white dark:text-black">{vinyl.attributes.genre}</p>
                    </div>
                </div>
            </Card>
        </Link>
    );
};  

export default VinylCard;