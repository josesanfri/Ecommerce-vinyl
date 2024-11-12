import FilterFormat from './filter-format';

type FiltersControlsCategoryProps = {
    setFilterFormat: (format: string) => void;
}

const FiltersControlsCategory = (props: FiltersControlsCategoryProps) => {
    const { setFilterFormat } = props;
    return (
        <section className="p-4 sm:pl-0">
            <FilterFormat setFilterFormat={setFilterFormat} />
        </section>
    );
};

export default FiltersControlsCategory;