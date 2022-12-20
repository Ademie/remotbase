import React, { useState } from "react";

function Search() {
  const [search, setSearch] = useState("");
  {
    search
      ? localStorage.setItem("search", JSON.stringify(search))
      : localStorage.setItem("search", JSON.stringify(""));
  }

  function filter(e){
    const DATA = localStorage.getItem()
  }
  return (
    <section className="layout-row justify-content-center mb-40">
      <input
        type="text"
        placeholder="Search for movie by name"
        className="w-75 py-2"
        data-testid="search"
        id="search"
        // onChange={(e) => setSearch(e.target.value)}
        onChange={filter}
      />
    </section>
  );
}

export default Search;
