import React, { useState } from "react";

function Movieform() {
  const [error, setError] = useState(false);
  const array = [];
  //  GET INPUT FIELD VALUES
  const submitForm = (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const ratings = document.getElementById("ratings").value;
    const time = document.getElementById("duration").value;
    let duration;
    time.includes("m")
      ? (duration = `${(parseInt(time) / 60).toFixed(1)}h`)
      : (duration = `${time}`);
    if (!duration.includes("h")) {
      setError(true);
      return;
    }
    array.push({
      name: name,
      ratings: ratings,
      time: time,
      duration: duration,
    });

    console.log("Array", array);
    document.getElementById("movieform").reset();
  };

  return (
    <section>
      <div className="card pa-30">
        <form
          onSubmit={submitForm}
          onChange={() => {
            setError(false);
          }}
          id="movieform"
        >
          <div className="layout-column mb-15">
            <label htmlFor="name" className="mb-3">
              Movie Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter Movie Name"
              data-testid="nameInput"
              // onChange={getInfo}
              required
            />
          </div>
          <div className="layout-column mb-15">
            <label htmlFor="ratings" className="mb-3">
              Ratings
            </label>
            <input
              type="number"
              id="ratings"
              placeholder="Enter Rating on a scale of 1 to 100"
              data-testid="ratingsInput"
              // onChange={getInfo}
              required
            />
          </div>
          <div className="layout-column mb-30">
            <label htmlFor="duration" className="mb-3">
              Duration
            </label>
            <input
              type="text"
              id="duration"
              placeholder="Enter duration in hours or minutes"
              data-testid="durationInput"
              // onChange={getInfo}
            />
          </div>
          {/* Use this div when time format is invalid */}
          <div className="alert error mb-30" data-testid="alert">
            {error && (
              <span>
                Please specify time in hours or minutes (e.g. 2.5h or 150m)
              </span>
            )}
          </div>
          <div className="layout-row justify-content-end">
            <button type="submit" className="mx-0" data-testid="addButton">
              Add Movie
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Movieform;
