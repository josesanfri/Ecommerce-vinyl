import FilterFormat from './filter-format';

type FiltersControlsCategoryProps = {
    setFilterFormat: (format: string) => void;
}

const FiltersControlsCategory = (props: FiltersControlsCategoryProps) => {
    const { setFilterFormat } = props;
    return (
        <section className="p-4 sm:w-[350px] sm:mt-5">
            <FilterFormat setFilterFormat={setFilterFormat} />
        </section>
    );
};

export default FiltersControlsCategory;