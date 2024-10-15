export type VinylType = {
    id: number;
    active: boolean;
    artist: string;
    description: string;
    genre: string;
    isFeatured: boolean;
    label: string;
    price: number;
    slug: string;
    title: string;
    format: string;
    images: {
        id: number;
        url: string;
    }[];
    category: {
        id: number;
        categoryName: string;
        slug: string;
    }[];
    tracks: {
        tracklist: {
            [discName: string]: TrackType[];  // Cambia esto
        };
    };
};


// Define el tipo para cada pista
export type TrackType = {
    title: string;  // Título de la pista
    feat?: string[];  // Artistas invitados (opcional)
};