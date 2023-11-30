import checkIcon from "../assets/check.png";

import { useEffect, useState } from "react";

import useRegister from "../hooks/useRegister";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [otpDone, setOtpDone] = useState(false);
  const [otpLoading, setOtpLoading] = useState(false);
  const [countdown, setCountdown] = useState(60);
  const apiUrl = import.meta.env.VITE_API_BASE_URL + "users/otp";

  const { error, loading, done, register, setError } = useRegister();

  useEffect(() => {
    let intervalId;
    if (countdown > 0 && otpDone) {
      intervalId = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
    } else if (countdown === 0 && otpDone) {
      setOtpDone(false);
    }
    return () => clearInterval(intervalId);
  }, [countdown, otpDone]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await register(username, email, password, otp);
  }

  const sendOtp = async () => {
    setOtpLoading(true);
    try {
      const res = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
  
      const json = await res.json();
  
      if (!res.ok) {
        if (res.status === 401) {
          setCountdown(60 - parseInt(json.time));
          setOtpDone(true);
        }
        setError(json.error);
      } else {
        setError("");
        setOtpDone(true);
        setCountdown(60);      
      } 
    } catch (error) {
      setError(error.message);
    } finally {
      setOtpLoading(false);
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
        <span>Registered successfully</span>
      </div>
      <div className="card card-bordered shadow-xl px-8 py-8 bg-base-200">
        <form className="card-body" onSubmit={handleSubmit}>
          <h1 className="card-title self-center text-secondary text-2xl mb-5">
            Register
          </h1>
          <input type="text" className="input" 
            placeholder="Username" value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input type="email" className="input" 
            placeholder="Email" value={email} 
            onChange={(e) => setEmail(e.target.value)} 
          />
          <input type="password" className="input" 
            placeholder="Password" value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="flex gap-2 justify-between">
            <input type="text" className="input w-[65%]" 
              placeholder="OTP" value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
            <button type="button" 
              className={`btn max-w-[35%] w-[35%] btn-accent ${!email || otpDone && "btn-disabled"}`}
              onClick={sendOtp}
            >
              {otpDone ? "OTP Sent": otpLoading ? <span className="loading"></span> : "Get OTP"}
            </button>
          </div>
          <button type="submit" className="btn btn-primary mt-10">
            {done ? <img src={checkIcon} /> : loading ? <span className="loading"></span> : "Register"}
          </button>
          <div className={`flex gap-2 items-end justify-center pt-3 ${otpDone ? "visible" : "invisible"}`}>
            <span>Resend OTP after</span>
            <span className="countdown text-3xl text-warning">
              <span style={{"--value": countdown}}></span>
            </span>
            <span>seconds</span>
          </div>
        </form>
      </div>
    </div> 
  )
}

export default Register;