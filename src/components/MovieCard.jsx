import posterImage from "../assets/poster.png";

import StacksDropdown from "./StacksDropdown";
import genres from "../constants/genres";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const MovieCard = ({ movie, stacks, setStacks }) => {
  const poster = movie.poster_path ? "https://image.tmdb.org/t/p/w300/" + movie.poster_path : posterImage;
  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  return (
    <div className="card overflow-hidden image-full z-[2]">
      <figure><img src={poster} alt={movie.title} /></figure>
      <div className="card-body">
        <Link to={`/movie/${movie.id}`}>
          <h1 className="card-title text-white">{movie.title}</h1>
        </Link>
        <p className="text-white text-lg">
          <span className="font-bold">{movie.release_date.slice(0,4)}<br/></span>
          {movie.genre_ids.map((id) => (
            <span key={id} className="badge badge-secondary mx-1">
              {genres[id]}
            </span>))}
        </p>
        <div className="self-center">
          <p className="pb-4 text-white">User Score</p>
          <div className="radial-progress text-warning drop-shadow-xl" role="progressbar" style={{"--value": Math.floor(movie.vote_average * 10)}}>{Math.floor(movie.vote_average * 10)}</div>
        </div>
        <div className="card-actions justify-end">
          {isAuth ? 
          <StacksDropdown movie={movie} stacks={stacks} setStacks={setStacks} bottom={false} /> : 
          <button className="btn btn-disabled glass">Add</button>}
        </div>
      </div> 
    </div>
  )
}
export default MovieCard;