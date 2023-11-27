import closeIcon from "../assets/close.png";

const MovieTrailer = ({ trailer }) => {
  const handleClick = () => {
    document.getElementById(trailer).showModal();
  }

  return (
    <div>
      <button className="btn btn-info" onClick={handleClick}>Watch Trailer</button>
      <dialog id={trailer} className="modal">
        <div className="modal-box w-2/5 max-w-5xl">
          <div className="flex justify-between items-center pb-2">
            <h1 className="text-3xl">Watch Trailer</h1>
            <div className="modal-action m-1">
              <form method="dialog">
                <button className="btn btn-circle btn-ghost">
                  <img src={closeIcon} />
                </button>
              </form>
            </div>
          </div>
          <div className="flex w-full h-full justify-center pb-4">
            <iframe
              width="640"
              height="480"
              src={`https://www.youtube.com/embed/${trailer}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </dialog>
    </div>
  )
}
export default MovieTrailer;