/* eslint-disable @next/next/no-img-element */
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

interface CarouselVinylProps {
    images: {
        data: {
            id: number,
            attributes: {
                url: string;
            };
        }[];
    };
}

const CarouselVinyl = (props: CarouselVinylProps) => {
    const { images } = props;
    return (
        <div className="sm:px-16">
            <Carousel>
                <CarouselContent>
                    {images.data.map((image, index) => (
                        <CarouselItem key={image.id}>
                            <img src={`${image.attributes.url}`} alt={`Vinyl ${index}`} className="w-full md:rounded-lg" />
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