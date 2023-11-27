import profileImage from "../assets/profile.png";

const MovieCast = ({ cast }) => {
  const PROFILE_BASE = "https://image.tmdb.org/t/p/w200";

  return (
    <div className="carousel rounded-box">
      {cast.map((profile) => (
        <div className="carousel-item relative" key={profile.id}>
          <img src={profile.profile_path ? PROFILE_BASE + profile.profile_path: profileImage} width={150} />
          <div className="w-full h-16 glass absolute bottom-0 flex flex-col items-center justify-center">
            <h3 className="text-md font-semibold text-white drop-shadow-md">
              {profile.name}
            </h3>
            <h3 className="italic text-white drop-shadow-md text-sm">
              {profile.character}
            </h3>
          </div>
        </div>
      ))}
    </div>
  )
}
export default MovieCast;