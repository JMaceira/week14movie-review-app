import React from "react";
import './index.css'
import allMovies from './MovieList.js'
import ReviewForm from './ReviewForm';


export default function Movie() {

return (
<>
<div className="container">
  <div className="row">
    {allMovies.map((movie) => {
      return (
        <div className="col-md-3">
          <div className="card">
            <img src={movie.posterURL} className="card-img-top img-fluid poster" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{movie.title}</h5>
              <p className="card-text">Release Date: {movie.releaseDate}<br/> Director: {movie.director}</p>
              <ReviewForm />
            </div>
          </div>
        </div>
      );
})
    }
    
  </div>
</div>
</>
  );
}
