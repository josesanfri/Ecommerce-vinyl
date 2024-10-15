"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useCartStore } from "@/hooks/use-cart";
import { formatPrice } from "@/lib/formatPrice";
import CartItem from "./components/cart-item";
import {loadStripe} from '@stripe/stripe-js';
import { makePaymentRequest } from "@/api/payment";

export default function PageCart() {
    const { items, removeAll } = useCartStore();
    const prices = items.map((item) => item.price);
    const totalPrice = prices.reduce((total, price) => total + price, 0);
    const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || "");

    const buyStripe = async () => {
        try {
            const stripe = await stripePromise;
            const res = await makePaymentRequest.post("/api/orders", {
                vinyls: items
            })
            await stripe?.redirectToCheckout({ 
                sessionId: res.data.stripeSession.id 
            });
            removeAll();
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <main className="max-w-6xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
            <h1 className="mb-5 text-3xl font-bold">Carrito</h1>
            <section className="grid sm:grid-cols-2 gap-4">
                <article>
                    {items.length === 0 ? (
                        <p>Tu carrito está vacío</p>
                    ) : (
                        <ul>
                            {items.map((item) => (
                                <CartItem key={item.id} vinyl={item} />
                            ))}
                        </ul>
                    )}
                </article>
                <article className="max-w-xl">
                    <div className="p-6 rounded-lg bg-slate-100 dark:bg-zinc-900">
                        <p className="mb-3 text-lg font-semibold">Resumen del pedido</p>
                        <Separator />
                        <div className="flex justify-between gap-4 my-4">
                            <p>Total</p>
                            <p>{formatPrice(totalPrice)}</p>
                        </div>
                        <div className="flex items-center mt-3 justify-center">
                            <Button className="w-full" onClick={buyStripe}>Comprar</Button>
                        </div>
                    </div>
                </article>
            </section>
        </main>
    );
}