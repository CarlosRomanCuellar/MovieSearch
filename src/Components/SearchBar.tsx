import React, {useState} from 'react'
import axios from 'axios'
import "../basicStyles.css";


const SearchAppBar = (props: { updateList: Function }) => {

  const [strToSearch, setStrToSearch] = useState('')
  const [lastfetch,setLastFetch] = useState('')

  const searchMovieHandler = ()=>{
    if(strToSearch !== lastfetch){
      setLastFetch(strToSearch)
      const formated = strToSearch.trim().replaceAll(' ','+').toLowerCase()
      // https://www.omdbapi.com/?t=hulk&apikey=f2e06722
      axios.get(`https://www.omdbapi.com/?s=${formated}&apikey=f2e06722`)
      .then((response) => {
        // console.log(response.data);
        if(response.data.Search)
        props.updateList(response.data.Search)
        else
        throw new Error("couldn't find the movie")
      }).catch((err)=>{
        alert("couldn't find the movie")
        props.updateList([])
      })
    }
  }
  
  const onChangeHandler = (ev : React.ChangeEvent<HTMLInputElement>)=>{
    setStrToSearch(ev.target.value)
  }
  
  const enterHandler = (ev: React.KeyboardEvent)=>{
    if(ev.key === 'Enter'){
      searchMovieHandler()
    }
  }

  return (
    <nav className="nav">
      <h1 className="nav-title">Search a movie</h1>
      <input
        className="nav-input"
        type="text"
        placeholder="movie title"
        value={strToSearch}
        onChange={onChangeHandler}
        onKeyUp={enterHandler}
      ></input>
      <button className="nav-btn" onClick={searchMovieHandler}>Search</button>
    </nav>
  );
}

export default SearchAppBar