import { Separator } from "@/components/ui/separator";
import { formatPrice } from "@/lib/formatPrice";
import { VinylType, TrackType } from "@/types/vinyl";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import { useCartStore } from "@/hooks/use-cart";
import { useFavouriteVinyls } from "@/hooks/use-favorites";
import VinylFormatGenre from "@/components/shared/vinyl-format-genre";


export type InfoVinylProps = {
    vinyl: VinylType;
}

const InfoVinyl = (props: InfoVinylProps) => {
    const { vinyl } = props;
    const { addItem } = useCartStore();
    const { favItems, addFavItem, removeFavItem } = useFavouriteVinyls();

    const isFavorite = favItems.some(item => item.id === vinyl.id);

    return (
        <section className="p-4">
            <h2 className="text-2xl">{vinyl.attributes.artist} - {vinyl.attributes.title}</h2>
            <Separator className="w-full bg-gray-200 h-px my-2" />

            <article className="grid grid-cols-2 items-center gap-x-4 gap-y-2">
                <p className="text-lg">
                    {formatPrice(vinyl.attributes.price)}
                </p>
                <VinylFormatGenre vinyl={vinyl} />
            </article>

            <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                    <AccordionTrigger>Infomarción</AccordionTrigger>
                    <AccordionContent>
                        <p><span className="font-bold">Género:</span> {vinyl.attributes.genre}</p>
                        <p className="mt-1"><span className="font-bold">Discográfica:</span> {vinyl.attributes.label}</p>
                        <p className="w-fit text-wrap mt-1">{vinyl.attributes.description}</p>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger>Tracklist</AccordionTrigger>
                    <AccordionContent>
                        {Object.entries(vinyl.attributes.tracks.tracklist).map(([discName, tracks], discIndex) => (
                            <div key={`disc-${discIndex}`} className="mt-2">
                                <p className="font-bold">{discName}</p>
                                <ul>
                                    {tracks.map((trackData: TrackType, trackIndex: number) => (
                                        <li key={`track-${trackIndex}`}>
                                            - {trackData.title}
                                            {trackData.feat && (
                                                <span> (feat. {trackData.feat})</span>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
            
            <article className="flex items-center gap-4 mt-4">
                <Button 
                    className="w-full" 
                    onClick={() => addItem(vinyl)}
                >
                    Comprar
                </Button>
                <Heart 
                    width={30} strokeWidth={1} 
                    className={`cursor-pointer transition duration-300
                        ${isFavorite ? 'fill-black dark:fill-white' 
                        : 'text-black dark:text-white'}`}
                    onClick={() => isFavorite ? removeFavItem(vinyl.id) : addFavItem(vinyl)}
                />
            </article>
        </section>
    );
};

export default InfoVinyl;