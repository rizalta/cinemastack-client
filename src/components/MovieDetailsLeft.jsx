import posterImage from "../assets/poster.png";

import { Link } from "react-router-dom";

const MovieDetailsLeft = ({ movie }) => {
  const POSTER_BASE = "https://image.tmdb.org/t/p/w300/";
  const releaseDate = new Date(movie.release_date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="flex flex-col items-center justify-start">
      <div className="flex glass rounded-lg shadow-xl my-4 w-[330px] h-[480px] justify-center items-center">
        <img src={movie.poster_path ? POSTER_BASE + movie.poster_path : posterImage} />
      </div>
      <div className="flex flex-row justify-center gap-4 mt-2">
        <div className="flex flex-col items-center">
          <span>Release Date</span>
          <span className="text-2xl">{releaseDate}</span>
        </div>
        <span className="badge badge-info badge-outline badge-lg mt-2">{movie.status}</span>
      </div>
      <div className="flex gap-2 mt-3">
        {movie.genres && movie.genres.map((genre) => (
        <span key={genre['id']} className="badge badge-secondary mt-1 h-fit">
          {genre['name']}
        </span>))}
      </div>
      <p className="mt-2 text-xl font-semibold">Language : <span className="font-normal">{movie.language}</span></p>
      {movie.vote_average ?
        <div>
          <p className="text-xl mt-2 text-warning">User Score</p>
          <div role="progressbar" className="radial-progress bg-base-300 text-warning mt-2 drop-shadow-2xl"
            style={{"--value": movie.vote_average * 10}}
          >
            {Math.floor(movie.vote_average * 10)}
        </div>
      </div>: <p className="text-warning">No score available</p>}
      
      <div className="mt-3">
        {movie.homepage &&
        <Link to={movie.homepage} target="_blank" className="underline text-primary">
          Homepage
        </Link>}
      </div>
    </div>
  )
}
export default MovieDetailsLeft;