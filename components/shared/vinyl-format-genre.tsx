import { VinylType } from "@/types/vinyl";

interface VinylFormatGenreProps {
    vinyl: VinylType;
}

const VinylFormatGenre = (props: VinylFormatGenreProps) => {
    const { vinyl } = props;
    return (
        <div className="flex items-center justify-between mt-2 gap-3">
            <p className="p-2 text-xs bg-black text-white rounded-full w-fit dark:bg-white dark:text-black">
                {vinyl.attributes.genre}
            </p>
            <p className="p-2 text-xs bg-black text-white rounded-full w-fit dark:bg-white dark:text-black">
                {vinyl.attributes.format}
            </p>
        </div>
    );
};

export default VinylFormatGenre;