import React,{useState} from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
  } from 'reactstrap';
  import { Link } from 'react-router-dom';
function NavBar(args) {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => setIsOpen(!isOpen);
    const [activeLink, setActiveLink] = useState(false);
  
    const handleLinkClick = (link) => {
      setActiveLink(link);}
  return (
        <div className='relative w-full rounded-lg p-0 navbar-expand-lg  flex-wrap '>
  
          <Navbar {...args} className=''>
            <img
          src="/my-avatar.png"
          alt="My Avatar"
          className="relative top-2  bg-[#333333] mt-0 mb-3 sm:mt-10 sm:mx-1 mx-0   bg-red below-sm:w-[30px] below-sm:h-[30px]  sm:w-[50px] sm:h-[50px] w-[40px] h-[40px] rounded-full navbar-expand-lg"
        />
            <Link className=' relative top-1 ml-1 hover:text-cyan-500 below-sm:text-[14px] text-[22px]  mr-2 pr-1' href="">Varad Badgujar</Link>
            <NavbarToggler className='relative top-1 flex flex-wrap rounded-full  h-[40px] w-[45px] below-sm:w-[40px] below-sm:h-[35px] bg-[#9b9b9bc1] text-gray-50 hover:text-gray-500' onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="me-auto gap-1 text-center" navbar>
               
                <NavItem>
                  <Link className={`hover:text-[#ffc663] ${activeLink === "/about" ? "text-[#ffc663]" : "text-white"}`} to='/about' onClick={() => handleLinkClick("/about")}>
                    About
                  </Link>
                </NavItem>
                <NavItem>
                  <Link className={`hover:text-[#ffc663] ${activeLink === "/resume" ? "text-[#ffc663] " : "text-white"}`} to='/resume' onClick={() => handleLinkClick("/resume")}>
                    Resume
                  </Link>
                </NavItem>
                <NavItem>
                  <Link className={`hover:text-[#ffc663] ${activeLink === "/project" ? "text-[#ffc663]" : "text-white"}`} to='/project' onClick={() => handleLinkClick("/project")}>
                    Projects
                  </Link>
                </NavItem>
                <NavItem>
                <NavItem>
                  <Link className={`hover:text-[#ffc663] ${activeLink === "/experience" ? "text-[#ffc663]" : "text-white"}`} to='/experience' onClick={() => handleLinkClick("/experience")}>
                  Experience
                  </Link>
                </NavItem>
                  <Link className={`hover:text-[#ffc663] ${activeLink === "/contact" ? "text-[#ffc663]" : "text-white"}`} to='/contact'onClick={() => handleLinkClick("/contact")}>
                    Contact
                  </Link>
                </NavItem>
               
              </Nav>
              
            </Collapse>
            

          </Navbar>
        </div>
    
  );
}

export default NavBar;