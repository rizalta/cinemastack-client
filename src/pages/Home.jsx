import { useState, useEffect } from "react";
import MovieGrid from "../components/MovieGrid";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [tab, setTab] = useState("trending");
  const apiUrl = import.meta.env.VITE_API_BASE_URL + "movies/";

  useEffect(() => {
    const getMovies = async () => {
      try{
        const res = await fetch(apiUrl + tab);
        const json = await res.json();
        if (res.ok) {
          setMovies(json.slice(0, 18));
        }
      } catch (error) {
        console.log(error.message);
      }
    }
    getMovies();
  }, [tab]);

  return (
    <>
      <div role="tabslist" className="tabs tabs-bordered">
        <a
          role="tab"
          className={`tab ${tab === "trending" && "tab-active"}`}
          onClick={() => setTab("trending")}
        >
          Trending
        </a>
        <a
          role="tab"
          className={`tab ${tab === "nowrunning" && "tab-active"}`}
          onClick={() => setTab("nowrunning")}
        >
          Now Running
        </a>
        <a
          role="tab"
          className={`tab ${tab === "popular" && "tab-active"}`}
          onClick={() => setTab("popular")}
        >
          Popular
        </a>
        <a
          role="tab"
          className={`tab ${tab === "upcoming" && "tab-active"}`}
          onClick={() => setTab("upcoming")}
        >
          Upcoming
        </a>
      </div>
      <MovieGrid movies={movies} />
    </>
  )
}
export default Home;