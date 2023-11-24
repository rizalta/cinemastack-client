import userLogo from "../assets/user.png";
import DarkModeToggle from "./DarkModeToggle";

import { authActions } from "../features/AuthSlice";

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const UserButtons = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(authActions.logout());
    localStorage.removeItem("auth");
  }

  return (
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-circle btn-accent p-2">
        <img src={userLogo} />
      </label>
      <div tabIndex={0} className="px-4 py-7 card dropdown-content shadow-xl bg-base-200 min-w-[250px]">
        <h1 className="card-title self-center">{user ? user.username : "You are not signed in"}</h1>
        {user ? <ul className="menu text-lg">
          <li><Link to="/account">My Account</Link></li>
          <li><Link to="/stacks">My Stacks</Link></li>
          <li onClick={handleLogout}><a>Logout</a></li>
        </ul> :
        <div className="card-actions">
          <Link to="/login">
            <button className="btn btn-secondary mt-10 mb-4 btn-wide">Log In</button>  
          </Link>
          <Link to="/register">
            <button className="btn btn-primary mb-4 btn-wide">Register</button>  
          </Link>
        </div>
        }
        <span className="self-center"><DarkModeToggle /></span>
      </div>
    </div>
  )
}
export default UserButtons;