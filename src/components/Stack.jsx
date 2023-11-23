import deleteIcon from "../assets/delete.png";
import checkIcon from "../assets/check.png";
import closeIcon from "../assets/close.png";

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import StackItem from "./StackItem";
import StackTitle from "./StackTitle";

const Stack = ({ stack, setStacks }) => {
  const token = useSelector((state) => state.auth.user.token);
  const [movies, setMovies] = useState([]);
  const [deleteToggle, setDeleteToggle] = useState(false);
  const [editToggle, setEditToggle] = useState(false);
  const [getLoading, setGetLoading] = useState(false);
  const [openToggle, setOpenToggle] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const apiUrl = import.meta.env.VITE_API_BASE_URL + "stacks/";
  const stackId = stack._id;

  useEffect(() => {
    const getStack = async () => {
      setGetLoading(true);
      try {
        const res = await fetch(apiUrl + stackId, {
          headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json",
          }
        });
        const json = await res.json();
        
        if (res.ok) {
          setMovies(json);
        } else {
          console.log(json.error)
        }
      } catch (error) {
        console.log(error);
      } finally {
        setGetLoading(false);
      }
    }
    getStack();
  }, [stackId]);

  const handleDelete = async () => {
    setDeleteLoading(true);
    try {
      const res = await fetch(apiUrl, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify({ stackId }),
      });
      const json = await res.json();

      if (!res.ok) {
        console.log(json.error);
      } else {
        setStacks(json);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setDeleteLoading(false);
    }
  }

  const updateMovies = (movieId) => {
    setMovies(movies.filter((movie) => movie.id !== movieId));
  }

  return (
    <div tabIndex={0} className={`collapse collapse-plus bg-base-200 py-2 my-2 ${openToggle ? "collapse-open" : "collapse-close"}`}>
      <div className="collapse-title text-xl flex justify-between items-center py-0 font-bold">
        <StackTitle stack={stack} />
        <div className="flex gap-2">
          {openToggle &&
          <button 
            className={`btn btn-outline ${editToggle ? "btn-primary" : "btn-secondary"}`}
            onClick={() => setEditToggle(!editToggle)}>
            {editToggle ? "Done" : "Edit Stack"}
          </button>
          }
          <button className="btn btn-outline" onClick={() => setOpenToggle(!openToggle)}>
            {openToggle ? "Close" : "Open"}
          </button>
          {deleteToggle ?
          <div className="flex justify-center items-center gap-2">
            <p>Delete this stack?</p>
            <button className="btn btn-circle btn-primary" onClick={handleDelete}>
              {deleteLoading ? <span className="loading"></span> :
              <img src={checkIcon} />}
            </button>
            <button className="btn btn-circle glass" onClick={() => setDeleteToggle(!deleteToggle)}>
              <img src={closeIcon} />
            </button>
          </div>:
          <button className="btn btn-square btn-accent" onClick={() => setDeleteToggle(!deleteToggle)}>
            <img src={deleteIcon} />
          </button>}
        </div>
      </div>
      <div className="collapse-content">
        <div className="carousel gap-2">
          {movies.length === 0 && !getLoading ? 
          <div className="flex flex-col justify-center items-center">
            <p className="text-xl">This Stack is empty</p>
          </div> :
          movies.map((movie) => (
            <StackItem stackId={stackId} movie={movie} key={movie.id} editToggle={editToggle} updateMovies={updateMovies} />
          ))}
          {getLoading && <span className="loading loading-bars loading-lg"></span>}
        </div>
      </div>
    </div>
  )
}
export default Stack;