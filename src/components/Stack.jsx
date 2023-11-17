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
  const apiUrl = import.meta.env.VITE_API_BASE_URL + "stacks/";
  const stackId = stack._id;
  const [editToggle, setEditToggle] = useState(false);

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
      }
    }
    getStack();
  }, []);

  const handleDelete = async () => {
    try {
      const res = await fetch(apiUrl + "delete", {
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

  return (
    <div tabIndex={0} className="collapse collapse-plus bg-base-200 py-2 my-2">
      <div className="collapse-title text-xl flex justify-between items-center py-0 font-bold">
        {/* {editToggle ?
        <div className="flex gap-2 items-center">
          <input type="text" className="input" />
          <button 
            className="btn glass btn-circle btn-sm"
            onClick={() => setEditToggle(!editToggle)}
          >
            <img src={checkIcon} />
          </button>
          <button 
            className="btn glass btn-circle btn-sm"
            onClick={() => setEditToggle(!editToggle)}
          >
            <img src={closeIcon} />
          </button>
        </div> :
        <div className="flex gap-2 items-center">
          <p>{stack.name}</p>
          <button 
            className="btn glass btn-circle btn-sm"
            onClick={() => setEditToggle(!editToggle)}
          >
            <img src={editIcon} />
          </button>
        </div>} */}
        <StackTitle stack={stack} />
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
      <div className="collapse-content">
        <div className="carousel rounded-box">
          {movies.length > 0 ? movies.map((movie) => (
            <StackItem movie={movie} key={movie.id}/>
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