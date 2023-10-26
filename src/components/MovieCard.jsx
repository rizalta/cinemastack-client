import ListDropdown from "./ListDropdown";

const MovieCard = ({ movie }) => {
  const POSTER_BASE = 'https://image.tmdb.org/t/p/w400/';

  return (
    <div className="card overflow-hidden image-full z-[2]">
      <figure><img src={POSTER_BASE + movie.poster_path} alt={movie.title} /></figure>
      <div className="card-body">
        <h1 className="card-title">{movie.title}</h1>
        <p>{movie.overview}</p>
        <div className="card-actions justify-center">
          <ListDropdown movie={movie} />
        </div>
      </div> 
    </div>
  )
}
export default MovieCard;