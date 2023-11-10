import useStacks from "../hooks/useStacks";
import Stack from "../components/Stack";

const Stacks = () => {
  const stacks = useStacks();

  return (
    <div className="px-4 py-3">
      <h1 className="text-3xl font-bold pb-3">My Stacks</h1>
      {stacks && stacks.map((stack) => (
        <div key={stack._id} className="collapse collapse-plus bg-base-200 py-2 my-2">
          <input type="radio" name="stacks"/>
          <div className="collapse-title text-xl font-medium">
            {stack.name}
          </div>
          <div className="collapse-content">
            <Stack stack={stack}/>
          </div>
        </div>
      ))}
    </div>
  )
}
export default Stacks;