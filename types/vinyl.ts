export type VinylType = {
    id: number;
    attributes: {
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
            data: {
                id: number,
                attributes: {
                    url: string;
                };
            }[];
        };
        category: {
            data: {
                id: number;
                attributes: {
                    categoryName: string;
                    slug: string;
                };
            };
        };
        tracks: {
            tracklist: {
                [discName: string]: TrackType[];  // Cambia esto
            };
        };
    };
};


// Define el tipo para cada pista
export type TrackType = {
    title: string;  // Título de la pista
    feat?: string[];  // Artistas invitados (opcional)
};