/* eslint-disable @next/next/no-img-element */
import { useCartStore } from "@/hooks/use-cart";
import { formatPrice } from "@/lib/formatPrice";
import { cn } from "@/lib/utils";
import { VinylType } from "@/types/vinyl";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";
import VinylFormatGenre from "@/components/shared/vinyl-format-genre";

interface VinylCartItem {
    vinyl: VinylType;
}

const CartItem = (props: VinylCartItem) => {
    const { vinyl } = props;
    console.log('vinyl', vinyl);
    const router = useRouter();
    const { removeItem } = useCartStore();
    return (
        <li className="flex py-6 border-b">
            <div onClick={() => router.push(`/vinyls/${vinyl.slug}`)} className="cursor-pointer">
                <img 
                    src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${vinyl.images[0].url}`} 
                    alt={vinyl.title} 
                    className="w-24 h-24 overflow-hidden rounded-md sm:w-auto sm:h-32" />
            </div>
            <div className="flex justify-between flex-1 px-6">
                <div>
                    <h2 className="text-lg font-bold">{vinyl.title} - {vinyl.artist}</h2>
                    <p className="mt-2">{formatPrice(vinyl.price)}</p>
                    <VinylFormatGenre vinyl={vinyl} />
                </div>
                <div>
                    <button 
                        className={cn("rounded-full flex items-center justify-center bg-white text-black dark:bg-black dark:text-white border shadow-sm p-1 hover:scale-110 transition")}
                    >
                        <X size={20} onClick={() => removeItem(vinyl.id)} />
                    </button>
                </div>
            </div>
        </li>
    );
};

export default CartItem;