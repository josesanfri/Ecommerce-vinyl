import { Skeleton } from "./ui/skeleton";

type SkeletonSchemaProps = {
    grid: number;
};

const SkeletonSchema = (props: SkeletonSchemaProps) => {
    return (
        Array.from({ length: props.grid}).map((_, index) => (
            <section key={index} className="flex flex-col mx-auto space-y-3 gap-8">
                <Skeleton className="h-[125px] w-[250px] rounded-xl" />
                <div className="space-y-2">
                    <Skeleton className="h-4 w-[250px]" />
                    <Skeleton className="h-4 w-[250px]" />
                </div>
            </section>
        ))
    );
};

export default SkeletonSchema;