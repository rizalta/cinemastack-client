import checkIcon from "../assets/check.png";

import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const token = new URLSearchParams(useLocation().search).get("token");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);
  const apiUrl = import.meta.env.VITE_API_BASE_URL + "users/reset";
  const navigate = useNavigate();
  
  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      const res = await fetch(apiUrl, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password, token }),
      });
      const json = await res.json();
      if (!res.ok) {
        if (json.error === "jwt expired") {
          setError("Request Link expired. Request again");
        } else {
          setError(json.error);
        }
        setPassword("");
      } else {
        setError("");
        setDone(true);
        setTimeout(() => {
          navigate("/login");
        }, 1500);
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
        <span>Password has been changed. Login again</span>
      </div>
      <div className="card card-bordered shadow-xl px-8 py-8 bg-base-200">
        <form className="card-body" onSubmit={handleSubmit}>
          <h1 className="card-title self-center text-secondary text-2xl mb-5">
            Forgot Password
          </h1>
          <input type="password" className="input" 
            value={password} placeholder="New Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className={`btn btn-primary mt-10 ${loading || done && "btn-disabled"}`}>
            {done ? <img src={checkIcon} /> : loading ? <span className="loading"></span> : "Confirm"}
          </button>
        </form>
      </div>
    </div>
  )
}
export default ResetPassword;