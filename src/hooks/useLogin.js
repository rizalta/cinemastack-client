import { useState } from "react";
import { authActions } from "../features/AuthSlice";
import { useDispatch } from "react-redux";

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [done, setDone] = useState(false);
  const dispatch = useDispatch();
  const apiUrl = import.meta.env.VITE_API_BASE_URL + "users/login";

  const login = async (email, password) => {
    setLoading(true);
    setError(null);
    
    const res = await fetch(apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
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

  return { loading, error, done, login };
}

export default useLogin;