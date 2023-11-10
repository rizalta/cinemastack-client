import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Stack = ({ stack }) => {
  const token = useSelector((state) => state.auth.user.token);
  const [movies, setMovies] = useState([]);
  const apiUrl = import.meta.env.VITE_API_BASE_URL + "stacks/";
  const POSTER_BASE = 'https://image.tmdb.org/t/p/w200';

  useEffect(() => {
    const stackId = stack._id;
    const getStack = async () => {
      try {
        const res = await fetch(apiUrl + stackId, {
          headers: {
            "Authorization": `Bearer ${token}`,
          }
        });
        const json = await res.json();
        setMovies(json)
      } catch (error) {
        console.log(json.error);
      }
    }
    getStack();
  }, []);

  return (
    <div className="carousel rounded-box">
      {movies && movies.map((movie) => (
        <div className="carousel-item flex flex-col" key={movie.id}>
          <img src={POSTER_BASE + movie.poster_path} />
          <h1>{movie.title}</h1>
        </div>
      ))}
    </div>
  )
}
export default Stack;