import { useState } from "react";
import useRegister from "../hooks/useRegister";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [otpDone, setOtpDone] = useState(false);

  const { error, loading, register, setError } = useRegister();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await register(username, email, password, otp);
  }

  const sendOtp = async () => {
    const res = await fetch(import.meta.env.VITE_API_BASE_URL + "users/otp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    const json = await res.json();

    if (!res.ok) {
      setError(json.error);
    } else {
      setError("");
      setOtpDone(true);
    }
  }

  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <div className={`alert alert-error mt-44 w-auto min-w-[407px] ${error ? "visible" : "invisible"}`}>
        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        <span>Error</span>
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
            <input type="text" className="input w-[200px]" 
              placeholder="OTP" value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
            <button type="button" 
              className={email && !otpDone ? "btn btn-accent" : "btn btn-disabled"}
              onClick={sendOtp}
            >
              {otpDone ? "OTP Sent": "Get OTP"}
            </button>
          </div>
          <button type="submit" className="btn btn-primary mt-10">Register</button>
        </form>
      </div>
    </div> 
  )
}

export default Register;