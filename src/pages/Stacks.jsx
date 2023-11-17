import checkIcon from "../assets/check.png";
import closeIcon from "../assets/close.png";
import deleteIcon from "../assets/delete.png";

import useStacks from "../hooks/useStacks";
import Stack from "../components/Stack";
import { useState } from "react";
import { useSelector } from "react-redux";

const Stacks = () => {
  const [stacks, setStacks] = useStacks();
  const [toggle, setToggle] = useState(false);
  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const apiUrl = import.meta.env.VITE_API_BASE_URL + "stacks/";
  const token = useSelector((state) => state.auth.user.token);

  const handleCreate = async () => {
    setLoading(true);
    try {
      const res = await fetch(apiUrl + "create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify({ name: value }),
      });
      const json = await res.json();

      if (!res.ok) {
        setError(json.error);
        setValue("");
        setLoading(false);
      } else {
        setStacks(json);
        setError("");
        setLoading(false);
        setToggle(false);
      }
    } catch (error) {
      setError(error.message);
    }
  }

  const handleCancel = () => {
    setToggle(!toggle);
    setError("");
    setLoading(false);
    setValue("");
  }

  return (
    <div className="px-4 py-3">
      <div className="flex justify-between py-4">
        <h1 className="text-3xl font-bold">My Stacks</h1>
        {toggle ? 
        <div className="flex gap-1">
          <div className="flex flex-col">
            <input type="text" value={value}
              className="input input-bordered" 
              onChange={(e) => setValue(e.target.value)}
              placeholder="Enter stack name"
            />
            {error && <span>{error}</span>}
          </div>
          <button className="btn btn-primary" onClick={handleCreate}>
            {loading ? <span className="loading"></span> :
            <img src={checkIcon} />}
          </button>
          <button className="btn btn-secondary" onClick={handleCancel}>
            <img src={closeIcon} />
          </button>
        </div> :
        <button className="btn btn-primary" onClick={() => setToggle(!toggle)}>
          Create Stack
        </button>}
      </div>
      {stacks && stacks.map((stack) => (
        <Stack stack={stack} setStacks={setStacks} key={stack._id} />
      ))}
    </div>
  )
}
export default Stacks;