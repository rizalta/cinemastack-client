import checkIcon from "../assets/check.png";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../features/AuthSlice";

const DeleteAccount = () => {
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const token = useSelector((state) => state.auth.user.token);
  const apiUrl = import.meta.env.VITE_API_BASE_URL + "users/";
  const dispatch = useDispatch();

  const handleDelete = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(apiUrl, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify({ password }),
      });

      if (!res.ok) {
        setError(error);
        setPassword("");
      } else {
        setDone(true);
        setTimeout(() => {
          dispatch(authActions.logout());
          localStorage.removeItem("auth");
        }, 1500)
      }
    } catch (error) {
      setError(error);
      setPassword("");
    } finally {
      setPassword("");
      setLoading(false);
    }
  }

  const handleCancel = () => {
    setError("");
    setPassword("");
    setLoading(false);
  }

  return (
    <div>
      <button
        className="btn btn-outline btn-error"
        onClick={() => document.getElementById("delete").showModal()}
      >
        Delete Account
      </button>
      <dialog id="delete" className="modal">
        {!done ? <div className="modal-box flex flex-col justify-center items-center py-6">
          <h3>Do you want to delete your account?</h3>
          <form className="flex gap-4 mt-5" onSubmit={(e) => handleDelete(e)}> 
            <input 
              type="password" placeholder="Enter your password"
              className={`input input-bordered ${error && "input-error"}`}
              onChange={(e) => setPassword(e.target.value)} 
            />
            <button type="submit" className={`btn btn-warning ${loading && "btn-disabled"}`}>
              {done ? <img src={checkIcon}  /> : loading ? <span className="loading"></span> : "Confirm"}
            </button>
            <div className="modal-action p-0 m-0">
              <form method="dialog">
                <button className={`btn btn-error ${loading && "btn-disabled"}`} 
                  onClick={handleCancel}
                >
                  Cancel
                </button>
              </form>
            </div>
          </form>
          <span className="self-start h-7 ml-16 text-error pt-2">{error}</span>
        </div> :
        <div className="modal-box flex justify-center items-center bg-error shadow-lg">
          <h3 className="text-2xl text-error-content">Account Deleted</h3>
        </div>}
      </dialog>
    </div>
  )
}
export default DeleteAccount;