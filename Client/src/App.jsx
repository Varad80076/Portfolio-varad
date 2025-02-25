import './App.css'
import './../node_modules/bootstrap/dist/css/bootstrap-grid.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './componenets/Sidebar';
import NavBar from './componenets/NavBar';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './componenets/About';
import Experience from './componenets/Experience';
import ContactForm from './componenets/ContactForm';
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faFile,
  faFileLines,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Resume from './componenets/Resume';
import Projects from './componenets/Projects';
import { ToastContainer } from 'react-toastify';

function App() {
   // Create an array to loop through (e.g., array with 4 elements to repeat NewCom)
  //  const componentsArray = [1, 2, 3, 4,5,6,7,8]; // This array will define how many times you repeat the component
  //  const cardRepeater=()=>{
  //   return componentsArray.map((_,index) => (<NewCom key={index}/>));
  //  }
  return (
    <>
    <Router>
    
    <div className=' flex flex-col sm:flex-row bg-grey-500 justify-around gap-3 p-0 rounded-md h-[720px] mt-0 w-full '> 
    <ToastContainer />
     <Sidebar/>
    
    <div id='varad' className='relative flex flex-wrap bg-[#1e1e1f] w-full sm:w-6xl  justify-around  gap-3 h-[580px] rounded-xl sm:h-[663px] overflow-scroll scrollbar-none border-[#3c3c3c] border-1'>
        {/*NavBar start  */}
        <div id="nev" className="hidden  absolute z-10 sm:flex flex-row gap-1  right-0  justify-items-end items-center bg-[#282829] p-3 lg:p-2  rounded-tr-lg rounded-bl-sm ">
  <ul className="flex flex-row gap-1">
    
    <li>
      <Link
        className="btn shadow-xl  rounded-xl text-white hover:border-[#877748] text-xs sm:text-base"
        to="/about"
      >
        <FontAwesomeIcon icon={faUser} /> About
      </Link>
    </li>
    <li>
      <Link
        className="btn shadow-xl rounded-xl text-white hover:border-[#877748] text-xs sm:text-base "
        to="/resume"
      >
        <FontAwesomeIcon icon={faFile} /> Resume
      </Link>
    </li>
    <li>
      <Link
        className="btn shadow-xl rounded-xl text-white hover:border-[#877748] text-xs sm:text-base"
        to="/project"
      >
        <FontAwesomeIcon icon={faFile} /> Projects
      </Link>
    </li>
    <li>
      <Link
        className="btn shadow-xl  rounded-xl text-white hover:border-[#877748] text-xs sm:text-base"
        to="/experience"
      >
        <FontAwesomeIcon icon={faFileLines} /> Experience
      </Link>
    </li>
    <li>
      <Link
        className="btn shadow-xl rounded-xl text-white hover:border-[#877748] text-xs sm:text-base"
        to="/contact"
      >
        <FontAwesomeIcon icon={faEnvelope} /> Contact
      </Link>
    </li>
    
  </ul>
</div>


      {/*NavBar end */}
      <div className='relative flex flex-wrap bg-grey-700  w-full sm:w-6xl sm:mt-[68px] pt-3 px-3 pb-3 justify-around gap-2  h-[785px] rounded-xl sm:h-[563px] overflow-scroll scrollbar-none '>
    
    <Routes>
              <Route path="/" element={<About />} /> Default Home
              <Route path="/nevbar" element={<NavBar />} /> {/* About Page */}
              <Route path="/about" element={<About />} /> {/* New Component Page */}
              <Route path="/resume" element={<Resume />} /> {/* Resume Page */}
              <Route path="/experience" element={<Experience />} /> {/* New Component Page */}
              <Route path="/contact" element={<ContactForm />} /> {/* New Component Page */}
              <Route path="/project" element={<Projects />} /> {/* New Component Page */}
            </Routes>
            </div>
    </div></div>
      
    <div className="fixed bottom-0 w-full bg-white z-50">
  
</div>
    </Router>
    </>
  )
}

export default App
