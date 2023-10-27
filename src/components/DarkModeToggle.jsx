import { useState, useEffect } from "react";
import darkMode from "../assets/dark.svg";
import lightMode from "../assets/light.svg";

const DarkModeToggle = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "dark"
  );
  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  }

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.querySelector("html").setAttribute("data-theme", theme);
    document.getElementById("logo").setAttribute("src", "/" + theme + "Logo.png");
  }, [theme]);

  return (
    <label className="swap swap-rotate btn btn-circle">
      <input 
        type="checkbox" onChange={handleToggle} id="toggleDark" 
        checked={theme === "light"? true : false} 
      />
      <img src={darkMode} className="swap-off fill-current w-10 h-10" />
      <img src={lightMode} className="swap-on fill-current w-10 h-10" />
    </label>
  )
}
export default DarkModeToggle;