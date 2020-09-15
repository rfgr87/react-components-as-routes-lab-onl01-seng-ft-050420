import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map((actor) => {
        return (
          <div key={actor.name} className="actor">
            <h3>{actor.name}</h3>
            <h4>Filmography: {actor.movies}</h4>
          </div>
        )
      })}
    </div>
  );
};

export default Actors;