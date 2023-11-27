import { useState } from "react";
import { useDispatch } from "react-redux";
import { authActions } from "../features/AuthSlice";

const useRegister = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const dispatch = useDispatch();

  const apiUrl = import.meta.env.VITE_API_BASE_URL + "users/signup";

  const register = async (username, email, password, otp) => {
    setLoading(true);
    setError("");

    const res = await fetch(apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, email, password, otp }),
    });

    const json = await res.json();

    if (!res.ok) {
      setError(json.error);
      setLoading(false);
    }

    if (res.ok) {
      setLoading(false);
      setError("");
      setDone(true);
      setTimeout(() => {
        dispatch(authActions.login(json));
        localStorage.setItem("auth", JSON.stringify(json));
      }, 1500);
    }
  }

  return { error, loading, done, register, setError };
}

export default useRegister;