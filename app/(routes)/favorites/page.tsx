"use client";

import { useFavouriteVinyls } from "@/hooks/use-favorites";
import FavoriteItem from "./components/favorite-item";

export default function Page() {
    const { favItems } = useFavouriteVinyls();

    return(
        <main className="max-w-6xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
            <h1 className="mb-5 text-3xl font-bold">Favoritos</h1>
            <article>
                    {favItems.length === 0 ? (
                        <p>No hay favoritos</p>
                    ) : (
                        <ul>
                            {favItems.map((item) => (
                                <FavoriteItem key={item.id} vinyl={item} />
                            ))}
                        </ul>
                    )}


                </article>
        </main>
    )
}