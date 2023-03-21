import {useState} from 'react';
import './App.css';
import MovieList from './Components/MovieList';
import SearchAppBar from './Components/SearchBar';

function App() {

  const [movieList , setMovieList] = useState(null)

  return (
    <div className="App">
      <SearchAppBar updateList={setMovieList}></SearchAppBar>
      <MovieList list={movieList}></MovieList>
    </div>
  );
}

export default App;
