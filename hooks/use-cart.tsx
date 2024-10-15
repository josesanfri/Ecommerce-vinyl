import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { toast } from "@/hooks/use-toast";

import { VinylType } from "@/types/vinyl";

interface CartStore {
    items: VinylType[];
    addItem: (data: VinylType) => void;
    removeItem: (id: number) => void;
    removeAll: () => void;
}

export const useCartStore = create(persist<CartStore>((set, get) => ({
    items: [],
    addItem: (data: VinylType) => {
        const currentItems = get().items;
        const existingItem = currentItems.find(item => item.id === data.id);
        if (existingItem) {
            return toast({
                title: "Ya existe en el carrito",
                variant: "destructive",
            })
        }
        set({ items: [...currentItems, data] });
        toast({
            title: "Se ha añadido al carrito",
            variant: "default",
        });
    },
    removeItem: (id: number) => {
        const currentItems = get().items;
        const existingItem = currentItems.find(item => item.id === id);
        if (!existingItem) {
            return toast({
                title: "No existe en el carrito",
                variant: "destructive",
            })
        }
        set({ items: currentItems.filter(item => item.id !== id) });
        toast({
            title: "Se ha eliminado del carrito",
            variant: "default",
        });
    },
    removeAll: () => {
        set({ items: [] });
        toast({
            title: "Se han eliminado todos los elementos del carrito",
            variant: "default",
        });
    },
}), {
    name: "cart-storage",
    storage: createJSONStorage(() => localStorage),
}))