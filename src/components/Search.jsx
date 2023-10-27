import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Search = () => {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  const handleSearch = async (e) => {
    const query = e.target.value;
    if (query === "") {
      setMovies([]);
      return;
    }
    try{
      const res = await fetch("http://localhost:4500/api/movies/search/" + query);
      const json = await res.json();
      setMovies(json.slice(0, 15));
    } catch (error) {
      console.log(error.message);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const query = e.target[0].value;
    navigate("/search/" + query);
  }
  
  return (
    <form className="dropdown" onSubmit={handleSubmit}>
      <input 
        type="text" className="input" tabIndex={0} 
        placeholder="Search"
        onChange={handleSearch}
      />
      <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-200 rounded-box w-full">
        {movies.length == 0 ?
        <li>
          <span 
            className="loading loading-spinner self-center loading-lg m-2"
          ></span>
        </li> :
        movies.map((movie) => (
          <li key={movie.id}><Link to={`/movie/${movie.id}`}>{movie.title}</Link></li>
        ))}
      </ul>
    </form>
  )
}
export default Search;