import { Link } from "react-router-dom";
import Search from "./Search";
import UserButtons from "./UserButtons";

const NavBar = () => {
  return (
    <div className="navbar fixed justify-between py-3 px-2 bg-base-200 z-10">
      <Link to="/"><div className="flex gap-1">
        <img alt="logo" className="w-10" id="logo" />
        <h1 className="text-3xl">cinemaStack</h1>
      </div></Link>
      <div className="flex gap-4 pr-2">
        <Search />
        <UserButtons />
      </div>
    </div>
  )
}
export default NavBar;