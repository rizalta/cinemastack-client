const stacks = [
  {
    "name": "To watch",
    "stack": [926393, 575264, 968051],
  },
  {
    "name": "Completed",
    "stack": [],
  }
]

const ListDropdown = ({ movie }) => {
  return (
    <div className="dropdown dropdown-top">
      <label tabIndex={0} className="btn btn-primary">Add</label>
      <ul tabIndex={0} className="dropdown-content menu z-[1] shadow bg-base-100">
        {stacks.map((stack) => (
          <li><label>
            <input 
              type="checkbox" className="checkbox"
              defaultChecked={stack.stack.includes(movie.id)}
            />
            {stack.name}
          </label></li>
        ))}
      </ul>
    </div>
  )
}
export default ListDropdown;