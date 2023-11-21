import posterImage from "../assets/poster.png";
import deleteIcon from "../assets/delete.png";
import checkIcon from "../assets/check.png";
import closeIcon from "../assets/close.png";

import { Link } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";

const StackItem = ({ movie, editToggle, stackId, updateMovies }) => {
  const POSTER_BASE = "https://image.tmdb.org/t/p/w400/";
  const [loading, setLoading] = useState(false);
  const [hoverToggle, setHoverToggle] = useState(false);
  const [removeToggle, setRemoveToggle] = useState(false);
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
    <div
      className="carousel-item relative" 
      onMouseEnter={() => setHoverToggle(true)} onMouseLeave={() => setHoverToggle(false)}
    >
      <img className="rounded-box"
        src={movie.poster_path ? POSTER_BASE + movie.poster_path : posterImage} width="300px" height="450px"
      />
      {hoverToggle && 
      <div className="glass absolute rounded-box w-full h-full flex flex-col items-center justify-evenly">
        <Link to={`/movie/${movie.id}`}><h1 className="text-black drop-shadow-lg self-center text-center text-2xl">
          {movie.title}
        </h1></Link>
        {!editToggle ? 
        <div className="flex flex-col gap-3 items-center justify-center">
          <p className="text-xl text-black drop-shadow-lg">User Score</p>
          <div className="radial-progress text-warning drop-shadow-lg" style={{"--value": movie.user_score}} role="progressbar">{movie.user_score}</div>
        </div> :
        removeToggle ? 
        <div className="flex flex-col gap-3 items-center">
          <p className="text-lg text-black drop-shadow-lg">
            Remove this from the stack?
          </p>
          <div className="flex gap-2">
            <button
              className="btn btn-outline btn-circle"
              onClick={handleRemove}
            >
              {loading ? <span className="loading"></span> : 
              <img src={checkIcon} />}
            </button>
            <button className="btn btn-outline btn-circle" onClick={() => setRemoveToggle(false)}>
              <img src={closeIcon} />
            </button>
          </div>
        </div> :
        <button className="btn btn-outline btn-circle" onClick={() => setRemoveToggle(true)}>
          <img src={deleteIcon} width="30px" />
        </button>}
      </div>}
    </div>
  )
}
export default StackItem;