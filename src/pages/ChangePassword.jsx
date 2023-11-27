import checkIcon from "../assets/check.png";

import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ChangePassword = () => {
  const [oldPass, setOldPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const navigate = useNavigate();
  const token = useSelector((state) => state.auth.user.token);
  const apiUrl = import.meta.env.VITE_API_BASE_URL + "users/change";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify({ oldPass, newPass }),
      });

      const json = await res.json();

      if (!res.ok) {
        setError(json.error);
        setOldPass("");
      } else {
        setError("");
        setDone(true);
        setTimeout(() => navigate("/account"), 2000);
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <div role="alert" className={`alert alert-error mt-[80px] w-auto min-w-[410px] ${error ? "visible" : "invisible"} ${done && "hidden"}`}>
        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        <span>{error && error}</span>
      </div>
      <div role="alert" className={`alert alert-success mt-[80px] w-auto min-w-[410px] ${!done && "hidden"}`}>
        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        <span>Password changed successfully</span>
      </div>
      <div className="card card-bordered shadow-xl px-8 py-8 bg-base-200">
        <form className="card-body" onSubmit={(e) => handleSubmit(e)}>
          <h1 className="card-title self-center text-secondary text-2xl mb-5">
            Change Password
          </h1>
          <input type="password" className="input" 
            value={oldPass} placeholder="Old Password"
            onChange={(e) => setOldPass(e.target.value)}
          />
          <input type="password" className="input" 
            value={newPass} placeholder="Password"
            onChange={(e) => setNewPass(e.target.value)}
          />
          <button
            type="submit"
            className={`btn btn-primary mt-10 ${loading && "btn-disabled"}`}
          >
            {done ? <img src={checkIcon} /> : loading ? <span className="loading"></span> : "Change"}
          </button>
        </form>
      </div>
    </div>
  )
}
export default ChangePassword;