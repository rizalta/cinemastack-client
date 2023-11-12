import { useState } from "react";
import { useSelector } from "react-redux";

const StackCheck = ({ stack, movieId }) => {
  const [checked, setChecked] = useState(stack.movies.includes(movieId));
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const addUrl = import.meta.env.VITE_API_BASE_URL + "stacks/add";
  const remUrl = import.meta.env.VITE_API_BASE_URL + "stacks/remove";
  const token = useSelector((state) => state.auth.user.token);
  const stackId = stack._id.toString();

  const handleCheck = async () => {
    setLoading(true);
    
    try {
      const options = {
        method: checked ? "DELETE" : "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify({ stackId, movieId }),
      };
      const res = await fetch(checked ? remUrl : addUrl, options);

      if (!res.ok) {
        const json = await res.json();
        setError(json.error);
      } else {
        setChecked(!checked);
        setError("");
      }

    } catch (error) {
      setError("An error occured while proccessing your request");
    } finally {
      setLoading(false);
    }
  }

  return (
    <li><label>
      <input 
        type="checkbox"
        defaultChecked={checked}
        onChange={handleCheck}
        className="checkbox"
      />
      <span className={`loading ${!loading && "hidden"}`}></span>
      {stack.name}
      {error && <span>{error}</span>}
    </label></li>
  )
}
export default StackCheck;