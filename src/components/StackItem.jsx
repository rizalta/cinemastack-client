import { Link } from "react-router-dom";
import posterImage from "../assets/poster.png";

const StackItem = ({ movie }) => {
  const POSTER_BASE = "https://image.tmdb.org/t/p/w400/";

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
          <div className="card-actions justify-end">
            <button className="btn glass">remove</button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default StackItem;