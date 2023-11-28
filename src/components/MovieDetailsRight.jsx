import StacksDropdown from "../components/StacksDropdown";
import MovieTrailer from "../components/MovieTrailer";

import useStacks from "../hooks/useStacks";
import MovieCast from "./MovieCast";
import SimilarMovies from "./SimilarMovies";
import { useSelector } from "react-redux";

const MovieDetailsRight = ({ movie }) => {
  const [stacks, setStacks] = useStacks();
  const BACKDROP_BASE = "https://image.tmdb.org/t/p/w1280";
  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  return (
    <div className="w-full h-full flex flex-col shadow-2xl rounded-lg">
      <div 
        className="flex w-full h-1/4 bg-cover rounded-lg items-center py-4" 
        style={{backgroundImage: `url(${BACKDROP_BASE + movie.backdrop_path})`}}
      >
        <div className="flex flex-2 flex-col pl-9">
          <h1 className="text-5xl text-white drop-shadow-md font-mono">{movie.title}</h1>
          <span className="text-2xl text-primary italic drop-shadow-md">{movie.tagline}</span>
        </div>
        <div className="flex-1 flex-col text-center">
          <h1 className="text-xl text-white font-semibold drop-shadow-sm">Director</h1>
          {movie.director && movie.director.map((dir) => (
            <p key={dir.id} className="text-lg italic text-white drop-shadow-sm">
              {dir.name}
            </p>))}
        </div>
        <div className="flex-1 ml-20 gap-4 flex">
          {isAuth ? 
          <StacksDropdown movie={movie} stacks={stacks} setStacks={setStacks} bottom={true} /> : 
          <button className="btn btn-disabled glass">Add</button>}
          <MovieTrailer trailer={movie.trailer}/>       
        </div>
      </div>
      <div className="mt-8 px-5">
        <span className="font-semibold text-xl">Overview</span>
        <p className="mt-2">{movie.overview}</p>
      </div>
      <div className="flex flex-col gap-3 pl-5 mt-6">
        <h1 className="text-2xl">Cast</h1>
        <MovieCast cast={movie.cast} />
        <h1 className="text-2xl mt-2">Similar Movies</h1>
        <SimilarMovies similar={movie.similar} />
      </div>
    </div>
  )
}
export default MovieDetailsRight;