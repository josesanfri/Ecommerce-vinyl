import { useGetVinylField } from "@/api/getVinylField";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { FilterTypes } from "@/types/filters";

type FilterFormatProps = {
    setFilterFormat: (format: string) => void;
}

const FilterFormat = (props: FilterFormatProps) => {
    const { setFilterFormat } = props;
    const { result, loading }: FilterTypes = useGetVinylField();
    console.log("se caran", result);

    return (
        <section className="sm:mt-5">
            <p className="text-xl font-semibold">Formato</p>
            {loading && result === null && (
                <p>Cargando...</p>
            )}
            <RadioGroup onValueChange={(value) => setFilterFormat(value)}>
                {result !== null && result.schema.attributes.format.enum.map((format:string) => (
                    <div key={format} className="flex items-center space-x-2">
                        <RadioGroupItem value={format} key={format}  />
                        <Label htmlFor={format}>{format}</Label>
                    </div>
                ))}
            </RadioGroup>
        </section>
    );
};

export default FilterFormat;