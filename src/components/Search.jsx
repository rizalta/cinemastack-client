import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Search = () => {
  const [movies, setMovies] = useState([]);
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  const handleSearch = async (query) => {
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
    navigate("/search/" + value);
    setValue("");
    setMovies([]);
  }
  
  return (
    <form className="dropdown" onSubmit={handleSubmit}>
      <input 
        type="text" className="input input-bordered" tabIndex={0} 
        placeholder="Search" value={value}
        onChange={(e) => {
          setValue(e.target.value);
          handleSearch(e.target.value);
        }}
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