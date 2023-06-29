import { useProgress } from "@react-three/drei";
import { usePlay } from "../contexts/Play";
import Logo from "../images/GLOBAL-WARNING-LOGO.png"
import { Link } from "react-router-dom";

export const Overlay = () => {
  const { progress } = useProgress();
  const { play, end, setPlay, hasScroll } = usePlay();
  return (
    <>
    <div
    className={`overlay ${play ? "overlay--disable" : ""}
    ${hasScroll ? "overlay--scrolled" : ""}`}
    >
      <div
        className={`loader ${progress === 100 ? "loader--disappear" : ""}`}
        />
      {progress === 100 && (
        <div className={`relative intro ${play ? "intro--disappear" : ""}`}>
          <img className="w-32 absolute bottom-5 right-5 max-lg:bottom-0 max-lg:right-4" src={Logo} alt="" />
          <p className="intro__scroll">Scroll to begin the journey</p>
          <button
            className="explore"
            onClick={() => {
              setPlay(true);
            }}
          >
            Explore
          </button>
        </div>
      )}
      <div className={`outro ${end ? "outro--appear" : ""}`}>
        <p className="outro__text">Wish you had a great flight with us...</p>
      </div>
    </div>
    <Link to="/" className={`${end ? "ease-in duration-300 top-5 left-5 w-38 z-50 absolute px-5 py-2.5 font-medium bg-blue-50 hover:bg-blue-100 hover:text-blue-600 text-blue-500 rounded-lg text-2xl" : "hidden"}`}>
        RETURN HOME
      </Link>
      
</>
  );
};
