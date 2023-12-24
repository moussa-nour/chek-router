import React from 'react';
import { useParams, Link } from 'react-router-dom';

const MovieDetail = ({ movies }) => {
  const { id } = useParams();
   // Find the movie with the specified id from the list of movies
 const movie = movies.find((m) => m.id === id);

 // Render the movie details
  return (
    <div className="movie-detail-container">
    <div className="movie-detail">
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <iframe
        width="560"
        height="315"
        src={movie.trailer}
        title="YouTube video player"
       
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe> <br/>
        <div style={{ border: '3px solid #bleu', padding: '2px', display: 'inline-block' ,marginTop:'5px'}}>
      <Link to="/" style={{ textDecoration: 'none', color: 'white',
       fontWeight: 'bold', fontSize: '20px' }}>
        Back to Home
      </Link>
    </div>
    </div>
  </div>
  );
};

export default MovieDetail;
