import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import MovieDetailsLeft from "../components/MovieDetailsLeft";
import MovieDetailsRight from "../components/MovieDetailsRight";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(true);
  

  useEffect(() => {    
    const getMovie = async () => {
      try {
        const res = await fetch(import.meta.env.VITE_API_BASE_URL + "movies/" + id);
        const json = await res.json();

        if (!res.ok) {
          console.log(json.error);
        } else {
          setMovie(json);
        }
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    }
    getMovie();
  }, [id]);

  return (
    <div>
      {!loading ? 
      <div className="pb-12 bg-base-200 w-full h-full flex">
        <div className="flex-[2]">
          <MovieDetailsLeft movie={movie}/>
        </div>
        <div className="flex-[8]">
          <MovieDetailsRight movie={movie}/>
        </div>
      </div> : <span className="loading"></span>}
    </div>
  )
}
export default MovieDetails;