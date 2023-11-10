import { useSelector } from "react-redux";
import useStacks from "../hooks/useStacks";
import CreateStack from "./CreateStack";

const StacksDropdown = ({ movie }) => {
  const stacks = useStacks();
  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  return (
    <div className="dropdown dropdown-top dropdown-end">
      <label tabIndex={0} className={`btn ${isAuth ? "btn-primary" : "btn-disabled"}`}>Add</label>
      <ul tabIndex={0} className="dropdown-content w-[300px] rounded-lg menu z-[1] shadow bg-base-100">
        {stacks.map((stack) => (
          <li key={stack._id}><label>
            <input 
              type="checkbox" className="checkbox"
              defaultChecked={stack.movies.includes(movie.id)}
            />
            {stack.name}
          </label></li>
        ))}
        <CreateStack />
      </ul>
    </div>
  )
}
export default StacksDropdown;