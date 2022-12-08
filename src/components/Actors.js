import React from "react";
import { actors } from "../data";

function Actors() {
  const renderActors = () => {
    return actors.map(actors => {
      return (
        <div key={actors.name}>
          <h1>
            {actors.name}
          </h1>
          <ul>
            {actors.movies.map(movie => {
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
    <h1>Actors Page</h1>
    {renderActors()}
    </div>
  );
}

export default Actors;
