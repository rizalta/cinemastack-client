import CreateStack from "./CreateStack";
import StackCheck from "./StackCheck";

const StacksDropdown = ({ movie, stacks, setStacks, bottom }) => {
  return (
    <div 
      className={`dropdown dropdown-end ${bottom ? "dropdown-bottom" : "dropdown-top"}`}
    >
      <div tabIndex={0} role="button" className="btn btn-primary glass">Add</div>
      <ul tabIndex={0} className="dropdown-content w-[250px] rounded-lg menu z-[1] shadow bg-base-100">
        {stacks.map((stack) => (
          <StackCheck stack={stack} movieId={movie.id} key={stack._id} />
        ))}
        <CreateStack id={movie.id} setStacks={setStacks} />
      </ul>
    </div>
  )
}
export default StacksDropdown;