import React, { useEffect, useReducer, useState } from "react";

function Movieslist(props) {
  const [DATA, SETDATA] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      let array = JSON.parse(localStorage.getItem("array"));
      array.sort((a, b) =>
        a.duration > b.duration ? -1 : b.duration > a.duration ? 1 : 0
      );
      SETDATA(array);
    }, 1000);
  }, [DATA]);

  let search = JSON.parse(localStorage.getItem("search"));

  return DATA.filter((data) => {
    if (search.toLowerCase() === "" || search.toLowerCase().length < 2) {
      return data;
    } else if (search.toLowerCase() !== data.name.toLowerCase()) {
      test = 444;
      console.log(test);
      setNotFound(()=>true)
   ;
    } else {
      return data.name.toLowerCase().includes(search);
    }
  
  }).map((data, index) => {
    return (
      <section key={index}>
        <ul className="styled w-100 pl-0" data-testid="moviesList">
          <li
            className="flex slide-up-fade-in justify-content-between"
            style={{ borderBottom: "2px solid var(--primary-color)" }}
          >
            <div className="layout-column w-40">
              <h3 className="my-3">{data.name}</h3>
              <p className="my-0">{data.ratings}</p>
            </div>
            <div className="layout-row my-auto mr-20">
              <p className="justify-content-end">{data.duration}</p>
            </div>
          </li>
        </ul>
      </section>
    );
  });
}

export default Movieslist;
