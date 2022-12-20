import React, { useEffect, useState } from "react";
import "./App.css";
import "h8k-components";
import { TestContext } from "./TestContext";

import { Movieform, Movieslist, Search } from "./components";

const title = "Favorite Movie Directory";

function App() {
  const [array, setArray] = useState([]);

  


  useEffect(() => {
    setArray(JSON.parse(localStorage.getItem("array")));
    localStorage.setItem("array", JSON.stringify([]));
  }, [!array]);

  return (
    <TestContext.Provider value={()=>{}}>
    <div>
      <h8k-navbar header={title} />
      <div className="layout-row justify-content-center mt-100">
        <div className="w-30 mr-75">
          <Movieform />
        </div>
        <div className="layout-column w-30">
          <Search />
          <Movieslist />
          {/* {test ? (
            <div data-testid="noResult">
              <h3 className="text-center">No Results Found</h3>
            </div>
          ) : (
            <Movieslist />
          )} */}
        </div>
      </div>
    </div>
    </TestContext.Provider>
  );
}

export default App;
