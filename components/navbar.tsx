"use client";
import { BaggageClaim, Heart, ShoppingCart, User } from "lucide-react";
import { useRouter } from "next/navigation";
import MenuList from "./menu-list";
import ItemsMenuMobile from "./items-menu-mobile";
import ToggleTheme from "./toogle-theme";
import { useCartStore } from "@/hooks/use-cart";
import { useFavouriteVinyls } from "@/hooks/use-favorites";

const Navbar = () => {
    const router = useRouter();
    const cart = useCartStore();
    const { favItems } = useFavouriteVinyls();

	return (
		<nav className="flex items-center justify-between p-4 mx-auto cursor-pointer sm:max-w-4xl md:max-w-6xl">
			<h1 className="text-2xl" onClick={() => router.push("/")}>Vinyl Vibes</h1>
            <section className="items-center justify-between hidden sm:flex">
                <MenuList />
            </section>
            <section className="flex sm:hidden">
                <ItemsMenuMobile />
            </section>
            <section className="flex items-center justify-between gap-2 sm:gap-7">
                {cart.items.length === 0 ? (
                    <ShoppingCart strokeWidth="1" className="cursor-pointer" onClick={() => router.push("/cart")} />
                ) : (
                    <article className="flex gap-1">
                        <BaggageClaim strokeWidth="1" className="cursor-pointer" onClick={() => router.push("/cart")} />
                        <span>{cart.items.length}</span>
                    </article>
                )}
                <Heart strokeWidth="1"
                    className={`cursor-pointer transition duration-300
                        ${favItems.length === 0 ? 'text-black dark:text-white' 
                        : 'fill-black dark:fill-white'}`}
                    onClick={() => router.push("/favorites")} 
                />
                <User strokeWidth="1" className="cursor-pointer" onClick={() => router.push("/profile")} />
                <ToggleTheme />
            </section>
        </nav>
	);
}

export default Navbar;