import YouTube from "react-youtube";

import closeIcon from "../assets/close.png";
import { useState } from "react";

const MovieTrailer = ({ trailer }) => {
  const [player, setPlayer] = useState(null);

  const handleClick = () => {
    document.getElementById(trailer).showModal();
  }

  const handleClose = () => {
    if (player) {
      player.stopVideo();
    }
    document.getElementById(trailer).close();
  }

  return (
    <div>
      <button className="btn btn-info" onClick={handleClick}>Watch Trailer</button>
      <dialog id={trailer} className="modal">
        <div className="modal-box w-2/5 max-w-5xl">
          <div className="flex justify-between items-center pb-2">
            <h1 className="text-3xl">Watch Trailer</h1>
            <div className="m-1">
              <button className="btn btn-circle btn-ghost" onClick={handleClose}>
                <img src={closeIcon} />
              </button>
            </div>
          </div>
          <div className="flex w-full h-full justify-center pb-4">
            <YouTube
              videoId={trailer}
              opts={{
                height: 480,
                width: 640,
                playerVars: {
                  autoplay: 1,
                },
              }}
              onReady={(e) => setPlayer(e.target)}
            />
          </div>
        </div>
      </dialog>
    </div>
  )
}
export default MovieTrailer;