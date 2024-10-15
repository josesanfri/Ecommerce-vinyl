import Link from "next/link";
import { buttonVariants } from "./ui/button";

const BannerVinyl = () => {
    return (
        <section className="mt-4 text-center">
            <p>Sumérgete en tu musica con Vinyl Vibes</p>
            <h4 className="mt-2 text-5xl font-extrabold uppercase">Música que te hará sentir</h4>
            <p className="my-2 text-lg">Despierta tu mente con cada canción que escuchas</p>
            <Link href="#" className={buttonVariants()}>Comprar</Link>
        </section>
    );
};

export default BannerVinyl;