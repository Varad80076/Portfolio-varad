import NavBar from "../componenets/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faFile,
  faFileLines,
  faHome,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import PersonalInfo from "./PersonalInfo";

function Sidebar() {
  return (
    // image
    <div className="bg-[#1e1e1f] text-white w-full sticky right-0 flex sm:flex-col sm:w-72 h-fit sm:h-[663px] rounded-xl border-[#3c3c3c] border-1">
      <figure className="bg-[#333333] mt-10 mx-5 bg-red  w-[155px] h-[155px] hidden sm:block rounded-3xl">
        <img
          src="/my-avatar.png"
          alt="My Avatar"
        />
      </figure>
      {/* toggle button */}

      <div className="rleative right-0 w-full sm:hidden">
        <NavBar />
      </div>
      {/* toggle button end */}
      <h2 className="my-3 sm:my-3 ml-3 text-sm sm:text-2xl justify-center items-center sm:mx-0 hidden sm:block">
        Varad Badgujar
      </h2>
      <div className="bg-[#2b2b2c] mb-4 ml-5 relative left-12 w-fit px-2 h-5 text-sm rounded-[5px] hidden sm:block">Web Developer</div>
      <div className="bg-[#504f4f] ml-8 w-48 h-[1px] hidden sm:block"></div>
      <div className="hidden sm:block"><PersonalInfo /></div>
      {/* <ul className=" mx-2 my-3 sm:my-11 flex sm:flex-col gap-1 sm:gap-0 hidden sm:block">
        <li className="mb-2">
          <Link
            className="btn text-white hover:border-gray-500 bg-gray-800 shadow-2xl  rounded-xl  text-xs sm:text-base"
            to="/"
          >
            <FontAwesomeIcon icon={faHome} /> Home
          </Link>
        </li>
        <li className="mb-2">
          <Link
            className="btn  shadow-xl bg-gray-800 rounded-xl text-white hover:border-gray-500 text-xs sm:text-base"
            to="/about"
          >
            <FontAwesomeIcon icon={faUser} /> About
          </Link>
        </li>
        <li className="mb-2">
          <Link
            className="btn  shadow-white-900 bg-gray-800 rounded-xl  text-white hover:border-gray-500 text-xs sm:text-base"
            to="/project"
          >
            <FontAwesomeIcon icon={faFileLines} /> Projects
          </Link>
        </li>
        <li className="mb-2">
          <Link className="btn  rounded-xl text-white hover:border-gray-500 text-xs bg-gray-800 sm:text-base"
            to="/contact"
          >
            <FontAwesomeIcon icon={faEnvelope} /> Contact
          </Link>
        </li>
        <li className="mb-2">
          <Link className="btn  rounded-xl text-white hover:border-gray-500 text-xs bg-gray-800 sm:text-base"
to="/doc"          
          >
            <FontAwesomeIcon icon={faFile} /> Resume
          </Link>
        </li>
      </ul> */}
    </div>
  );
}

export default Sidebar;
