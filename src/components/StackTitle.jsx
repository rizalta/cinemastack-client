import checkIcon from "../assets/check.png";
import closeIcon from "../assets/close.png";
import editIcon from "../assets/edit.png";

import { useState } from "react";

const StackTitle = ({ stack }) => {
  const [editToggle, setEditToggle] = useState(false);
  
  return (
    <div>
    {editToggle ?
      <div className="flex gap-2 items-center">
        <input type="text" className="input input-ghost" placeholder="Enter the new name" />
        <button
          className="btn btn-primary btn-circle btn-sm"
          onClick={() => setEditToggle(!editToggle)}
        >
          <img src={checkIcon} />
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