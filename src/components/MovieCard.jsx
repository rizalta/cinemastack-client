import { Link } from "react-router-dom";
import StacksDropdown from "./StacksDropdown";
import { useSelector } from "react-redux";
import posterImage from "../assets/poster.png";

const MovieCard = ({ movie, stacks, setStacks }) => {
  const poster = movie.poster_path ? "https://image.tmdb.org/t/p/w400/" + movie.poster_path : posterImage;
  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  return (
    <div className="card overflow-hidden image-full z-[2]">
      <figure><img src={poster} alt={movie.title} /></figure>
      <div className="card-body">
        <Link to={`/movie/${movie.id}`}><h1 className="card-title">{movie.title}</h1></Link>
        <p>{movie.overview}</p>
        <div className="card-actions justify-end">
          {isAuth ? 
          <StacksDropdown movie={movie} stacks={stacks} setStacks={setStacks} /> : 
          <button className="btn btn-disabled glass">Add</button>}
        </div>
      </div> 
    </div>
  )
}
export default MovieCard;