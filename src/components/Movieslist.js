import React from "react";

function Movieslist() {
  // const array = localStorage.getItem('array') ? JSON.parse(localStorage.getItem("array")) : [];
  // console.log('mov', array)
  // return array.map((data, index) => {
    return (
      <section>
        <ul className="styled w-100 pl-0" data-testid="moviesList">
          <li
            className="flex slide-up-fade-in justify-content-between"
            style={{ borderBottom: "2px solid var(--primary-color)" }}
          >
            <div className="layout-column w-40">
              {/* <h3 className="my-3">{data.name}</h3>
              <p className="my-0">{data.ratings}</p> */}
            </div>
            <div className="layout-row my-auto mr-20">
              {/* <p className="justify-content-end">{data.duration}</p> */}
            </div>
          </li>
        </ul>
      </section>
    );
  // });
}

export default Movieslist;
