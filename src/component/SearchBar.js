import SearchBar from "material-ui-search-bar";
// *snip*

function SearchBar(params) {
  const handleChange = (event) => {
    console.log("w");
  };

  return <SearchBar value={this.state.value} onChange={() => handleChange} />;
}

export default SearchBar;
