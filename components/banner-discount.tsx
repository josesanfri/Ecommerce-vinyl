import Link from "next/link";
import { buttonVariants } from "./ui/button";

const BannerDiscount = () => {
    return (
        <section className="max-w-6xl py-4 mx-auto sm:px-24 text-center">
            <hgroup>
                <h2 className="uppercase font-black text-primary text-2xl">Descuento de 10% en las compras</h2>
                <h3 className="mt-3 font-semibold">Con esta oferta, obtendrás un descuento de 10% en las compras de productos de Vinyl Vibes.</h3>
            </hgroup>
            <article className="max-w-md mx-auto flex justify-center gap-8 mt-5">
                <Link href="/vinyls" className={buttonVariants()}>Comprar</Link>
                <Link href="/vinyls" className={buttonVariants({ variant: "outline" })}>Más información</Link>
            </article>
        </section>
    );
};

export default BannerDiscount;