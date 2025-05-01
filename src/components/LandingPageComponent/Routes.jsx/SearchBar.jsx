function SearchBar({ search, setSearch }) {

    // This component receives search and setSearch as props and displays a search bar
    // You can also add functionality to fetch search results from an API if needed
    // and handle search submission logic here
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}

 export default SearchBar;