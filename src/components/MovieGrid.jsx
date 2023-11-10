import useStacks from "../hooks/useStacks";
import MovieCard from "./MovieCard";

const MovieGrid = ({ movies }) => {
  const stacks = useStacks();

  return (
    <div className="w-full grid grid-cols-5 gap-5 z-0 pt-4 px-4">
      {movies.map((movie) => (
        <MovieCard movie={movie} stacks={stacks} key={movie.id}/>
      ))}
    </div>
  )
}
export default MovieGrid;