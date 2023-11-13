import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import posterImage from "../assets/poster.png";

const Stack = ({ stack }) => {
  const token = useSelector((state) => state.auth.user.token);
  const [movies, setMovies] = useState([]);
  const apiUrl = import.meta.env.VITE_API_BASE_URL + "stacks/";
  const POSTER_BASE = "https://image.tmdb.org/t/p/w400/";

  useEffect(() => {
    const stackId = stack._id;
    const getStack = async () => {
      try {
        const res = await fetch(apiUrl + stackId, {
          headers: {
            "Authorization": `Bearer ${token}`,
            "Content-type": "application/json",
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
      {movies.length > 0 ? movies.map((movie) => (
        <div className="carousel-item flex flex-col" key={movie.id}>
          <img src={movie.poster_path ? POSTER_BASE + movie.poster_path : posterImage} width="200px" />
          <h1>{movie.title}</h1>
        </div>
      )) :
      <div className="flex flex-col justify-center items-center">
        <p className="text-xl">This Stack is empty</p>
      </div>}
    </div>
  )
}
export default Stack;