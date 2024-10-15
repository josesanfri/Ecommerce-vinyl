/* eslint-disable @next/next/no-img-element */
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

interface CarouselVinylProps {
    images: {
        id: number;
        url: string;
    }[];
}

const CarouselVinyl = (props: CarouselVinylProps) => {
    const { images } = props;
    console.log("imagenes",images);
    return (
        <div className="sm:px-16">
            <Carousel>
                <CarouselContent>
                    {images.map((image, index) => (
                        <CarouselItem key={image.id}>
                            <img src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${image.url}`} alt={`Vinyl ${index}`} className="w-full md:rounded-lg" />
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext className="hidden md:flex"/>
            </Carousel>
        </div>
    );
};

export default CarouselVinyl;