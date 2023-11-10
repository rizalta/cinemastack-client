import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieGrid from "../components/MovieGrid";

const SearchResults = () => {
  const { query } = useParams();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      try{
        const res = await fetch("http://localhost:4500/api/movies/search/" + query);
        const json = await res.json();

        setMovies(json);
      } catch (error) {
        console.log(error.message);
      }
    }
    getMovies();
  }, [query]);

  return (
    <>
      <h1 className="text-2xl">{'Search results for ' + '"' + query + ' " :'}</h1>
      <MovieGrid movies={movies} />
    </>
  )
}
export default SearchResults;