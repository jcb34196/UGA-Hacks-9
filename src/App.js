import React, {useState} from 'react';
import AddMovie from'./components/addMovie';
import MovieList from'./components/movieList';
import Header from './components/Header'

function App() {
  const[movieList,setMovieList] = useState([])
  const addMovieHandler = newMovie => {
    setMovieList(prevMovie => prevMovie.concat(newMovie));
    console.log("setMovieList");
  };
  return (
   <div>
    <Header/>
    <AddMovie onAddMovie={addMovieHandler}/>
    <MovieList movies={movieList}/>
   </div>
  );
}
export default App;
