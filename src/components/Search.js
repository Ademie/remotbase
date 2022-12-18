import React from "react";

function Search() {
  // function searchMovie() {
  //   const array = localStorage.getItem('array') ? JSON.parse(localStorage.getItem("array")) : [];
  //   const search = document.getElementById("search").value;

    // const result = array.find(function(movie, index){
    //   if(movie.name <= search.slice(1,2)){
    //     return movie
    //   }
    // })
  //   const result = array.filter(function(movie){
  //     return movie.name <= search.slice(1,2)
  //   })

  //   console.log(result)

  // }
  return (
    <section className="layout-row justify-content-center mb-40">
      <input
        type="text"
        placeholder="Search for movie by name"
        className="w-75 py-2"
        data-testid="search"
        id="search"
        // onChange={searchMovie}
      />
    </section>
  );
}

export default Search;
