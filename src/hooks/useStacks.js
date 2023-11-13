import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const useStacks = () => {
  const [stacks, setStacks] = useState([]);
  const apiUrl = import.meta.env.VITE_API_BASE_URL + "stacks";
  const user = useSelector((state) => state.auth.user);
  
  useEffect(() => {
    const getStacks = async () => {
      const res = await fetch(apiUrl, {
        headers: {
          "Authorization": `Bearer ${user.token}`,
          "Content-type": "application/json",
        },
      });
      const json = await res.json();

      if (!res.ok) {
        console.log(json.error);
      }

      if (res.ok) {
        setStacks(json);
      }
    }
    {user && getStacks()};
  }, [stacks])

  return [stacks, setStacks];
}

export default useStacks;