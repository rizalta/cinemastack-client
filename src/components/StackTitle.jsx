import checkIcon from "../assets/check.png";
import closeIcon from "../assets/close.png";
import editIcon from "../assets/edit.png";

import { useState } from "react";
import { useSelector } from "react-redux";

const StackTitle = ({ stack }) => {
  const [editToggle, setEditToggle] = useState(false);
  const [name, setName] = useState(stack.name);
  const [loading, setLoading] = useState(false);
  const token = useSelector((state) => state.auth.user.token);
  const apiUrl = import.meta.env.VITE_API_BASE_URL + "stacks";

  const handleUpdate = async () => {
    setLoading(true);
    try {
      const res = await fetch(apiUrl, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify({
          stackId: stack._id,
          name: name,
        }),
      });
      const json = await res.json();

      if (!res.ok) {
        console.log(json.error);
      } else {
        stack.name = name;
        setEditToggle(false);
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  }
  
  return (
    <div>
    {editToggle ?
      <div className="flex gap-2 items-center">
        <input type="text" className="input input-ghost" 
          placeholder="Enter the new name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button
          className="btn btn-primary btn-circle btn-sm"
          onClick={handleUpdate}
        >
          {loading ? <span className="loading"></span> : <img src={checkIcon} />}
        </button>
        <button 
          className="btn btn-secondary btn-circle btn-sm"
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
      </div>}
    </div>
  )
}
export default StackTitle;