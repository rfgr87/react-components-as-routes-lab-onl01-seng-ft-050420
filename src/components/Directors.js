import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map((director) => {
        return (
          <div key={director.name} className="director">
            <h3>{director.name}</h3>
            <h3>{director.movies}</h3>
          </div>
        )
      })}
    </div>
  );
}


export default Directors