import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { toast } from "@/hooks/use-toast";

import { VinylType } from "@/types/vinyl";

interface FavouriteVinylsType {
    favItems: VinylType[];
    addFavItem: (data: VinylType) => void;
    removeFavItem: (id: number) => void;
    removeFavAll: () => void;
}

export const useFavouriteVinyls = create(persist<FavouriteVinylsType>((set, get) => ({
    favItems: [],
    addFavItem: (data: VinylType) => {
        const currentFavItems = get().favItems;
        const existingFavItem = currentFavItems.find(item => item.id === data.id);
        if (existingFavItem) {
            return toast({
                title: "Ya existe en favoritos",
                variant: "destructive",
            })
        }
        set({ favItems: [...currentFavItems, data] });
        toast({
            title: "Se ha añadido a favoritos",
            variant: "default",
        });
    },
    removeFavItem: (id: number) => {
        const currentFavItems = get().favItems;
        const existingFavItem = currentFavItems.find(item => item.id === id);
        if (!existingFavItem) {
            return toast({
                title: "No existe en favoritos",
                variant: "destructive",
            })
        }
        set({ favItems: currentFavItems.filter(item => item.id !== id) });
        toast({
            title: "Se ha eliminado de favoritos",
            variant: "default",
        });
    },
    removeFavAll: () => {
        set({ favItems: [] });
        toast({
            title: "Se han eliminado todos los elementos de favoritos",
            variant: "default",
        });
    },
}), {
    name: "favorites-storage",
    storage: createJSONStorage(() => localStorage),
}))