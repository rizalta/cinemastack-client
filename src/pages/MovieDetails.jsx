import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const POSTER_BASE = 'https://image.tmdb.org/t/p/w300/';
  const BACDROP_BASE = 'https://image.tmdb.org/t/p/w1280/';

  useEffect(() => {
    const getMovie = async () => {
      const apiUrl = import.meta.env.VITE_API_BASE_URL;
      try {
        const res = await fetch(apiUrl + "movies/" + id);
        const json = await res.json();
  
        setMovie(json);
      } catch (error) {
        console.log(error.message);
      }
    }
    getMovie();
  }, [id]);

  return (
    <div className="hero max-h-[50%]" style={{ backgroundImage: `url(${BACDROP_BASE + movie.backdrop_path})` }}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content pt-[100px] w-screen justify-between">
        <img
          src={POSTER_BASE + movie.poster_path} alt={movie.title} 
          className="rounded-lg showdow-2xl max-w-sm"
        /> 
        <div className="max-w-md">
          <h1 className="font-bold">{movie.title}</h1>
        </div>
      </div>
    </div>
  )
}
export default MovieDetails;