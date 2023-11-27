import { useState } from "react";
import addIcon from "../assets/add.png";
import closeIcon from "../assets/close.png";
import checkIcon from "../assets/check.png";
import { useSelector } from "react-redux";

const CreateStack = ({ id, setStacks }) => {
  const [toggle, setToggle] = useState(false);
  const [stack, setStack] = useState("");
  const [error, setError] = useState("");
  const apiUrl = import.meta.env.VITE_API_BASE_URL + "stacks/create";
  const token = useSelector((state) => state.auth.user.token);

  const handleCreate = async () => {
    try {
      const res = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify({ name: stack }),
      });
      const json = await res.json();

      if (!res.ok) {
        setError(json.error);
        setStack("");
      } else {
        setStacks(json);
        setError("");
      }
    } catch (error) {
      setError(error.message);
    }
  }
  
  return (
    <li>
      <input className="hidden" type="checkbox" onChange={() => setToggle(!toggle)} id={`toggle${id}`} />
      {toggle || error ? 
      <label htmlFor={`toggle${id}`} ><img src={closeIcon} onClick={() => setError("")} />
        <input
          type="text" placeholder="Enter stack name"
          className="input input-bordered h-full w-[150px]"
          value={stack} onChange={(e) => setStack(e.target.value)}
        />
        <img src={checkIcon} onClick={handleCreate} />
      </label> : 
      <label htmlFor={`toggle${id}`}>
        <img src={addIcon} />Create
      </label>}
      {error && <span>{error}</span>}
    </li>
  )
}
export default CreateStack;