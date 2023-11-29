import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { authActions } from "../features/AuthSlice";

const Username = () => {
  const user = useSelector((state) => state.auth.user);
  const [username, setUsername] = useState(user.username);
  const dispatch = useDispatch();
  const [toggle, setToggle] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const apiUrl = import.meta.env.VITE_API_BASE_URL + "users/update";

  const handleUpdate = async () => {
    setLoading(true);
    try {
      const res = await fetch(apiUrl, {
        method: "PATCH",
        headers: {
          "Authorization": `Bearer ${user.token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username }),
      });
      const json = await res.json();

      if (!res.ok) {
        setError(json.error);
      } else {
        const updatedUser = {...user, username }
        dispatch(authActions.login(updatedUser));
        localStorage.setItem("auth", JSON.stringify(updatedUser));
        setError("");
        setToggle(false);
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  const handleCancel = () => {
    setError("");
    setToggle(false);
    setUsername(user.username);
  }

  return (
    <div className="flex w-full min-h-[90px] justify-start pt-3 items-start">
      <div className="w-[20%]">
        <h1 className="text-2xl pt-1 pl-1">Username</h1>
      </div>
      <div className="w-[40%]">
        {toggle ?
        <div className="flex flex-col gap-1">
          <input
            className={`input input-bordered ${error && "input-error"} w-4/5`}
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
          <span className="text-sm text-error pl-3">{error}</span>
        </div>
         :
        <p className="text-lg pt-2 pl-2">{username}</p>}
      </div>
      <div className="w-[40%]">
        {toggle ? 
        <div className="flex gap-2">
          <button 
            className="btn btn-outline btn-success"
            onClick={handleUpdate}
            disabled={loading}
          >
            {loading ? <span className="loading"></span> : "Confirm"}
          </button>
          <button
            className="btn btn-outline btn-error"
            onClick={handleCancel}
          >
            Cancel
          </button>
        </div> : 
        <button
          className="btn btn-outline btn-info"
          onClick={() => setToggle(true)}
        >
          Change Username
        </button>}
      </div>
    </div>
  )
}
export default Username;