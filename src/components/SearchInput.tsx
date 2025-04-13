import { STRINGS } from "../constants";

interface SearchInputProps {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  count?: number;
}

const isAlphanumeric = (value: string) => /^[a-zA-Z0-9\s]*$/.test(value);

const SearchInput = ({ search, setSearch, count }: SearchInputProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (isAlphanumeric(value)) {
      setSearch(value);
    }
  };
  return (
    <div data-testid="search-input" className="py-3 space-y-3">
      <input
        className="border-b-[0.5px] border-neutral-400 pb-1 w-full placeholder:font-light focus:outline-none focus:ring-0 focus:border-neutral-400"
        value={search}
        onChange={handleChange}
        placeholder={STRINGS.pages.productList.searchPlaceholder}
      />

      <p data-testid="results-count" className="text-xs font-light space-x-2">
        {count}{" "}
        {count === 1
          ? STRINGS.pages.productList.resultLabel
          : STRINGS.pages.productList.resultsLabel}
      </p>
    </div>
  );
};

export default SearchInput;
