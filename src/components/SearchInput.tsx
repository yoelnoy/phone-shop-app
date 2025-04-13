import { STRINGS } from "../constants";

interface SearchInputProps {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  count?: number;
}
const SearchInput = ({ search, setSearch, count }: SearchInputProps) => {
  return (
    <div data-testid="search-input" className="py-3 space-y-3">
      <input
        className="border-b-[0.5px] border-neutral-400 pb-1 w-full placeholder:font-light focus:outline-none focus:ring-0 focus:border-neutral-400"
        value={search}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          const value = e.target.value;
          const onlyLetters = value.replace(/[^a-zA-Z\s]/g, "");
          setSearch(onlyLetters);
        }}
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
