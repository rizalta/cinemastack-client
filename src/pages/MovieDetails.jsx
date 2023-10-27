import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const { id } = useParams();

  return (
    <div className="flex justify-center items-center">
      <div className="mt-[100px]">{id}</div>
    </div>
  )
}
export default MovieDetails;