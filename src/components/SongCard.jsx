import PlayPause from "./PlayPause";
import { useDispatch } from "react-redux";
import { playPause, setActiveSong } from "../redux/features/playerSlice";
import { Link } from "react-router-dom";

const SongCard = ({ song, isPlaying, activeSong, i, data }) => {
  // const activeSong = "Test";
  // console.log(song, "songcard");
  // console.log(activeSong, "active");

  const handlePlayClick = () => {};
  const handlePuaseClick = () => {};
  return (
    <div className="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop:blur-sm animate-slideup rounded-lg cursor-pointer">
      <div className="relative w-full h-56 group">
        <div
          className={`absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex ${
            activeSong?.title === song.title
              ? "flex bg-black bg-opacity-70"
              : "hidden"
          }`}
        >
          <PlayPause
            isPlaying={isPlaying}
            activeSong={activeSong}
            song={song}
            handlePuase={handlePuaseClick}
            handlePlay={handlePlayClick}
          />
        </div>
        <img src={song.images?.coverart} alt="song_img" />
      </div>
      <div className="mt-4 flex flex-col">
        <p className="font-semibold text-lg text-white truncate">
          <Link to={`/songs/${song?.key}`}>{song.title}</Link>
        </p>

        <p className=" text-sm text-gray-300 mt-1 truncate">
          <Link
            to={
              song.artists
                ? `/artists/${song?.artists[0]?.admid}`
                : `/top-artists`
            }
          >
            {song.subtitle}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SongCard;
