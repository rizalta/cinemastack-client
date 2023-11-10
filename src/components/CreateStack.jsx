import { useState } from "react";
import addIcon from "../assets/add.png";
import closeIcon from "../assets/close.png";

const CreateStack = () => {
  const [toggle, setToggle] = useState(false);
  
  return (
    <li>
      <input className="hidden" type="checkbox" onChange={() => setToggle(!toggle)} id="toggle" />
      {toggle ? 
      <label htmlFor="toggle"><img src={closeIcon} />
        <input type="text" className="input input-ghost h-full w-[200px]" />
      </label> : 
      <label htmlFor="toggle">
        <img src={addIcon} />Create
      </label>}
    </li>
  )
}
export default CreateStack;