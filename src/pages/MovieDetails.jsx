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
    <div className="container flex items-center justify-center">
      <div className="min-w-[40%] min-h-[90vh] bg-white"></div>
      <div className="min-w-[60%] min-h-[90vh] bg-red-200"></div>
    </div>
  )
}
export default MovieDetails;