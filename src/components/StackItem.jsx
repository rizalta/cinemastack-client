import { Link } from "react-router-dom";
import posterImage from "../assets/poster.png";

import { useState } from "react";
import { useSelector } from "react-redux";

const StackItem = ({ movie, editToggle, stackId, updateMovies }) => {
  const POSTER_BASE = "https://image.tmdb.org/t/p/w400/";
  const [loading, setLoading] = useState(false);
  const apiUrl = import.meta.env.VITE_API_BASE_URL + "stacks/remove";
  const token = useSelector((state) => state.auth.user.token);

  const handleRemove = async () => {
    setLoading(true);
    try {
      const res = await fetch(apiUrl, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify({
          stackId,
          movieId: movie.id,
        }),
      });
      const json = await res.json();

      if (!res.ok) {
        console.log(json.error);
      } else {
        updateMovies(movie.id);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="carousel-item flex flex-col">
      <div className="card bg-base-300 card-bordered h-[420px]">
        <figure><img src={movie.poster_path ? POSTER_BASE + movie.poster_path : posterImage} width="200px" height="300px" /></figure>
        <div className="card-body p-0">
          <div className="card-title justify-center content-center h-12">
            <Link to={`/movie/${movie.id}`}>
              <h3 className="font-medium pt-1 max-w-[180px]">
                {movie.title}
              </h3>
            </Link>
          </div>
          <div className="card-actions justify-end pr-2">
            <button 
              className={`btn btn-warning btn-circle btn-sm ${!editToggle && "invisible"}`}
              onClick={handleRemove}
            >
              {loading ? <span className="loading"></span> : "x"}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default StackItem;