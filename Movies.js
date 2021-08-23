import React from 'react'
import { useGlobalContext } from './context'
import { Link } from 'react-router-dom'
import Movie from './SingleMovie'
const url =
  'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png'

const Movies = () => {
  
  const {movies,isLoading}=useGlobalContext();
// console.log(movies);
  if(isLoading){
    return <div className='loading'></div>
  }
  return (
    <main>
    <form>
      <input type='text' placeholder="type the movie name here"></input>
      <button type='submit'>search</button>
    </form>
    <section>
      <div>
        {movies.map((movie)=>{
          // const {Poster,Title}=movie;
          //  return <Movie key={index}></Movie>
         return <h4>movie</h4>
        })}
      </div>
    </section>
    </main>
  )
}

export default Movies
