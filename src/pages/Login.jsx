import checkIcon from "../assets/check.png";

import { useState } from "react";
import { Link } from "react-router-dom";

import useLogin from "../hooks/useLogin";

const Login = () => {
  const { loading, error, done, login } = useLogin();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password);
  }

  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <div role="alert" className={`alert alert-error mt-[80px] w-auto min-w-[410px] ${error ? "visible" : "invisible"} ${done && "hidden"}`}>
        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        <span>{error && error}</span>
      </div>
      <div role="alert" className={`alert alert-success mt-[80px] w-auto min-w-[410px] ${!done && "hidden"}`}>
        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        <span>Logged in successfully</span>
      </div>
      <div className="card card-bordered shadow-xl px-8 py-8 bg-base-200">
        <form className="card-body" onSubmit={handleSubmit}>
          <h1 className="card-title self-center text-secondary text-2xl mb-5">
            Log in
          </h1>
          <input type="email" className="input" 
            value={email} placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input type="password" className="input" 
            value={password} placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className={`btn btn-primary mt-10 ${loading && "btn-disabled"}`}>
            {done ? <img src={checkIcon} /> : loading ? <span className="loading"></span> : "Log in"}
          </button>
          <Link 
            className="self-center underline text-info pt-1"
            to="/forgot"
          >
            Forgot password?
          </Link>
        </form>
      </div>
    </div> 
  )
}
export default Login;