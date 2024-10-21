"use client";

import { Button } from "@/components/ui/button";
import { useCartStore } from "@/hooks/use-cart";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

/* eslint-disable @next/next/no-img-element */
export default function PageSuccess() {
    const { removeAll } = useCartStore();

    useEffect(() => {
        removeAll();
    }, [removeAll]);
    const router = useRouter();
    return (
        <main className="max-w-5xl p-4 mx-auto sm:px-24 lg:py-16">
            <section className="flex flex-col-reverse sm:flex-row gap-4">
                <div>
                    <img src="/images/success.webp" alt="success" width={250} height={500} className="rounded-lg" />
                </div>
                <div>
                    <h1 className="text-3xl font-bold">¡Gracias por tu compra!</h1>
                    <p className="my-3">
                        Tu pedido ha sido procesado con éxito. En breve nuestro equipo se pondra manos a la obra para que disfrutes de tu nuevo vinilo.
                    </p>
                    <p className="my-3">
                        Gracias por confiar en nosotros para satisfacer tu amor por la música.
                    </p>
                    <p className="my-3">Disfruta del vinilo y te esperamos pronto en nuestra tienda.</p>

                    <Button onClick={() => router.push("/")}>Volver a la tienda</Button>
                </div>
            </section>
        </main>
    );
}
