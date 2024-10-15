"use client";
import { useRouter } from "next/navigation";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import { Card, CardContent } from "./ui/card";
import Autoplay from 'embla-carousel-autoplay'

export const bannerData = [
    {
        id: 1,
        title: "Envio en 48h",
        description: "Como cliente premium, tu envio estará disponible en 24h",
        link: "#!", 
    },
    {
        id: 2,
        title: "Devoluciones y envios gratuitos",
        description: "Como cliente puedes disfrutar de tus envios gratuitos",
        link: "#!", 
    },
    {
        id: 3,
        title: "Descuento del 25% en tu pedido superior a 50€",
        description: "-20% en tu pedido superior a 30€ cpon el codigo Vibes",
        link: "#!", 
    },
]

const CarouselBanner = () => {
    const router = useRouter();

    return (
        <section className="bg-gray-200 dark:bg-primary">
            <Carousel className="w-full max-w-screen-4xl mx-auto" 
                plugins={[
                    Autoplay({
                        delay: 3000,
                    })
                ]}
            >
                <CarouselContent>
                    {bannerData.map((item) => (
                        <CarouselItem key={item.id} onClick={() => router.push(item.link)} className="cursor-pointer">
                            <article>
                                <Card className="shadow-none bg-transparent border-none">
                                    <CardContent className="flex flex-col justify-center items-center p-4 text-center">
                                        <p className="sm:text-xl text-wrap dark:text-secondary">{item.title}</p>
                                        <p className="text-xs sm:text-sm text-wrap dark:text-secondary">{item.description}</p>
                                    </CardContent>  
                                </Card>
                            </article>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </section>
    );
};

export default CarouselBanner;