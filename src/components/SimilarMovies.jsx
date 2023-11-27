import posterImage from "../assets/poster.png";

import { Link } from "react-router-dom";

const SimilarMovies = ({ similar }) => {
  const POSTER_BASE = "https://image.tmdb.org/t/p/w200/";

  return (
    <div className="carousel rounded-box">
      {similar.map((movie) => (
        <div className="carousel-item" key={movie.id}>
          <Link to={"/movie/" + movie.id} target="_blank">
            <img src={movie.poster_path ? POSTER_BASE + movie.poster_path : posterImage} width={150} />
          </Link>
        </div>
      ))}
    </div>
  )
}
export default SimilarMovies;