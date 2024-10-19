const SearchBar = ({
  query,
  setQuery,
}: {
  query: string;
  setQuery: (query: string) => void;
}) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <div className="flex flex-row items-center gap-1 h-fit rounded-lg py-[0.4375rem] px-[0.9375rem] min-h-[2.25rem] border border-gray-200 hover:border-gray-300 bg-white w-full">
      <i className="mi-search icon-medium mr-1" />
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Type to search..."
        className="focus:outline-0"
      />
    </div>
  );
};

export default SearchBar;
