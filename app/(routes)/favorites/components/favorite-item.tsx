/* eslint-disable @next/next/no-img-element */
import VinylFormatGenre from "@/components/shared/vinyl-format-genre";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/hooks/use-cart";
import { useFavouriteVinyls } from "@/hooks/use-favorites";
import { formatPrice } from "@/lib/formatPrice";
import { cn } from "@/lib/utils";
import { VinylType } from "@/types/vinyl";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";

interface FavoriteItemProps {
    vinyl: VinylType;
}

const FavoriteItem = (props: FavoriteItemProps) => {
    const { vinyl } = props;
    const router = useRouter();
    const { removeFavItem } = useFavouriteVinyls();
    const { addItem } = useCartStore();

    const addToCheckout = () => {
        addItem(vinyl);
        removeFavItem(vinyl.id);
    }

    return (
        <li className="flex py-6 border-b">
            <div onClick={() => router.push(`/vinyls/${vinyl.attributes.slug}`)} className="cursor-pointer">
                <img 
                    src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${vinyl.attributes.images.data[0].attributes.url}`} 
                    alt={vinyl.attributes.title} 
                    className="w-24 h-24 overflow-hidden rounded-md sm:w-auto sm:h-32" />
            </div>
            <div className="flex justify-between flex-1 px-6">
                <div>
                    <h2 className="text-lg font-bold">{vinyl.attributes.title} - {vinyl.attributes.artist}</h2>
                    <p className="mt-2">{formatPrice(vinyl.attributes.price)}</p>
                    <VinylFormatGenre vinyl={vinyl} />
                    <Button
                        className="rounded-full mt-5" 
                        onClick={addToCheckout}
                    >
                        Añadir al carrito
                    </Button>
                </div>
                <div>
                    <button 
                        className={cn("rounded-full flex items-center justify-center bg-white text-black dark:bg-black dark:text-white border shadow-sm p-1 hover:scale-110 transition")}
                    >
                        <X size={20} onClick={() => removeFavItem(vinyl.id)} />
                    </button>
                </div>
            </div>
        </li>
    );
};

export default FavoriteItem;