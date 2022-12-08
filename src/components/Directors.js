import React from "react";
import { directors } from "../data";

function Directors() {
  const renderDirectors = () => {
    return directors.map(directors => {
      return (
        <div key={directors.name}>
          <h3>
            {directors.name}
          </h3>
          <ul>
            {directors.movies.map(movie => {
              return (
                <li key={movie}>{movie}</li>
              )
            })}
          </ul>
          </div>
      )
    })
  }



  return (
  <div>
    <h1>Directors Page</h1>
    {renderDirectors()}
    </div>
  );
}

export default Directors;
