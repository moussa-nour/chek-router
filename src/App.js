import React, { useState } from 'react'
import MovieList from './MovieList'
import 'bootstrap/dist/css/bootstrap.min.css';
import AddMovie from './AddMovie';
import { Routes, Route } from 'react-router-dom';
import MovieDetail from "./MovieDetail";
import Filter from './Filter';



// the list of movie
function App() {
  const [movies, setMovie] = useState([
    {id:"1",
      title:'Dachra',
      description:' Dachra est un film d horreur tunisien écrit et réalisé par Abdelhamid Bouchnak et sorti en 2018.  ',
      rating:5,
      posterUrl:'https://www.galeries.be/wp-content/uploads/2020/02/Dachra-poster.jpg',
      anneé:2018,
      type:'Thriller/horrer',
      heur:'2h35m',
      Trailer:'https://www.youtube.com/embed/a5_WTF7KtYQ?si=apAa9t1phBWzqWBp'

    },
    {
      id:"2",
      title: 'Venom',
      year: '2018',
      genre: 'Action/SFy',
      description: 'Après avoir fusionné avec un symbiote extraterrestre qui lui confère dincroyables super-pouvoirs. ',
      time: '1h52m',
      rating: 4,
      posterUrl: 'https://upload.wikimedia.org/wikipedia/en/1/10/Venom_%282018_film%29_poster.png',
      trailer:"https://www.youtube.com/embed/u9Mv98Gr5pY?si=uZhy6Hgdr7ugtmob"
    },
    {id:"3",
      title:'Scream',
    description :' Les survivants des derniers meurtres de Ghostface, les sœurs Samantha et Tara Carpenter et les jumeaux Chad et Mindy Meeks, .',
    rating: 5,
    posterUrl:'data:image/jpeg;base64,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',
    anneé:2023,
    type:'horror',
    heur:'1h55m',
    Trailer:'https://youtu.be/1Ie2qmAOc6Q?si=OU_1paoRO42XktUC'
  } ,
    {
      id:"4",
      title: 'Divergente ',
      year: '2014',
      time: '2h',
      genre: 'Action/fantasy',
      description: 'Tris vit dans un monde post-apocalyptique où la société est divisée en cinq clans.',
      rating: 4,
      posterUrl: 'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/c8f213d7b0cdbaa45c076ffe666d50d98f740bd5e0af414b9cd9d31696cabe55._RI_TTW_.jpg',
      trailer:"https://youtu.be/gxbwcBlj_dM?si=a2DHtTn3n9aKnTQR"
    },
     {id:"5",
       title:'joker',
       year:'2019',
      time:'1h40m',
     genre :'Action/fantasy' ,
       description :'En 1981 à Gotham City, un clown atteint de troubles mentaux et en mal de reconnaissance .',
      rating:4,
      posterUrl:'https://upload.wikimedia.org/wikipedia/en/thumb/e/e1/Joker_%282019_film%29_poster.jpg/220px-Joker_%282019_film%29_poster.jpg' ,
      trailer:"https://www.youtube.com/embed/OoTx1cYC5u8?si=jxwIu7IZabszcyjN"   
    },
       {id:"6",
       title:'Nanny McPhee',
       year:'2005',
      time:'1h40m',
     genre :'Family/Children' ,
       description :'Depuis la disparition de son épouse, le brave M. Brown a bien du mal avec ses sept enfants .',
      rating:5,
      posterUrl:'https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p159118_p_v8_ab.jpg' ,
      trailer:"https://youtu.be/4iCRftNMwC4?si=V-Hh32Vlq_9Y5fnM"   
    },


  ])

  // State for filtering movies based on title and rating
  const [filter, setFilter] = useState({ title: '', rating: '' });

  // Function to handle changes in filter values
  const handleFilterChange = (key, value) => {
    setFilter({ ...filter, [key]: value });
  };

  // Filtering movies based on title and rating
  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(filter.title.toLowerCase()) &&
      (filter.rating === '' || movie.rating.toString().includes(filter.rating))
  );

  // Function to add a new movie to the list
  const handleAddMovie = (newMovie) => {
    setMovie([...movies, newMovie]);
  };

  return (
    <div className='App'>
      <Filter onFilterChange={handleFilterChange} />
      <AddMovie onAddMovie={handleAddMovie} />

      {/* Define routes for different pages */}
      <Routes>
        <Route path="/" element={<> <MovieList movies={filteredMovies} /></>} />
        <Route path="/movies/:id" element={<MovieDetail movies={movies} />} />
      </Routes>
    </div>
  )
}




export default App
