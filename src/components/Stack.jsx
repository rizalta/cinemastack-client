import deleteIcon from "../assets/delete.png";
import checkIcon from "../assets/check.png";
import closeIcon from "../assets/close.png";
import editIcon from "../assets/edit.png";

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import StackItem from "./StackItem";
import StackTitle from "./StackTitle";

const Stack = ({ stack, setStacks }) => {
  const token = useSelector((state) => state.auth.user.token);
  const [movies, setMovies] = useState([]);
  const [deleteToggle, setDeleteToggle] = useState(false);
  const [editToggle, setEditToggle] = useState(false);
  const apiUrl = import.meta.env.VITE_API_BASE_URL + "stacks/";
  const stackId = stack._id;

  useEffect(() => {
    const getStack = async () => {
      try {
        const res = await fetch(apiUrl + stackId, {
          headers: {
            "Authorization": `Bearer ${token}`,
            "Content-type": "application/json",
          }
        });
        const json = await res.json();
        
        if (res.ok) {
          setMovies(json);
        }
      } catch (error) {
        console.log(error);
      }
    }
    getStack();
  }, []);

  const handleDelete = async () => {
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
    }
  }

  const updateMovies = (movieId) => {
    setMovies(movies.filter((movie) => movie.id !== movieId));
  }

  return (
    <div tabIndex={0} className={`collapse collapse-plus bg-base-200 py-2 my-2 ${editToggle && "collapse-open"}`}>
      <div className="collapse-title text-xl flex justify-between items-center py-0 font-bold">
        <StackTitle stack={stack} />
        <div className="flex gap-2">
          <button className="btn btn-outline" onClick={() => setEditToggle(!editToggle)}>
            {editToggle ? "Confirm" : "Edit Stack"}
          </button>
          {deleteToggle ?
          <div className="flex justify-center items-center">
            <p>Delete this stack?</p>
            <button className="btn btn-circle btn-primary" onClick={handleDelete}>
              <img src={checkIcon} />
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
        <div className="carousel rounded-box">
          {movies.length > 0 ? movies.map((movie) => (
            <StackItem stackId={stackId} movie={movie} key={movie.id} editToggle={editToggle} updateMovies={updateMovies} />
          )) :
          <div className="flex flex-col justify-center items-center">
            <p className="text-xl">This Stack is empty</p>
          </div>}
        </div>
      </div>
    </div>
  )
}
export default Stack;