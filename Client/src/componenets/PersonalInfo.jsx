import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram, faLinkedin, faTwitter  } from '@fortawesome/free-brands-svg-icons';
import {
  faEnvelope,
  faPhone,
  faCalendar,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
function PersonalInfo() {
  return (
    <div className='flex flex-col gap-3 mt-3 '>
      <div className=' flex gap-1 ml-4 '> 
        <div className='flex g-[#202022] shadow-[0.5px_0.5px_3px_2px_black,-0.8px_-0.8px_3px_0px_white]  justify-center  text-center w-9 h-9 m-2 rounded-lg '><FontAwesomeIcon icon={faEnvelope} className='m-2 text-[#ffdb70]' /></div>
        <div className=' w-10 flex flex-col'>
          <span className='text-base text-[#9b9b9b]'>EMAIL</span>
          <a className='text-base text-[#d6d6d6]' href='https://mail.google.com/mail/?view=cm&fs=1&to=badgujarvarad800@gmail.com'>badgujarvarad800...</a>
        </div>        
      </div>

      <div className=' flex gap-1 ml-4 '> 
        <div className='flex g-[#202022] shadow-[0.5px_0.5px_3px_2px_black,-0.8px_-0.8px_3px_0px_white]  justify-center  text-center w-9 h-9 m-2 rounded-lg '><FontAwesomeIcon icon={faPhone} className='m-2 text-[#ffdb70]' /></div>
        <div className=' w-11 flex flex-col'>
          <span className='text-base text-[#9b9b9b]'>PHONE</span>
          <a className='w-32 text-base text-[#d6d6d6]' href='#'>+91 8007666002</a>
        </div>        
      </div>

      <div className=' flex gap-1 ml-4 '> 
        <div className='flex g-[#202022] shadow-[0.5px_0.5px_3px_2px_black,-0.8px_-0.8px_3px_0px_white]  justify-center  text-center w-9 h-9 m-2 rounded-lg '><FontAwesomeIcon icon={faCalendar} className='m-2 text-[#ffdb70]' /></div>
        <div className=' w-10 flex flex-col'>
          <span className='text-base text-[#9b9b9b]'>BIRTHDAY</span>
          <a className='text-base w-20 text-[#d6d6d6]' href='https://mail.google.com/mail/?view=cm&fs=1&to=badgujarvarad800@gmail.com'>Mar 2,2004</a>
        </div>        
      </div>

      <div className=' flex gap-1 ml-4 mb-0'> 
        <div className='flex g-[#202022] shadow-[0.5px_0.5px_3px_2px_black,-0.8px_-0.8px_3px_0px_white]  justify-center  text-center w-9 h-9 m-2 rounded-lg '><FontAwesomeIcon icon={faMapMarkerAlt} className='m-2 text-[#ffdb70]' /></div>
        <div className=' w-10 flex flex-col'>
          <span className='text-base text-[#9b9b9b]'>LOCATION</span>
          <a className='text-base w-[150px] text-left text-[#d6d6d6]' href='https://mail.google.com/mail/?view=cm&fs=1&to=badgujarvarad800@gmail.com'>Jalgaon, Maharastra, India</a>
        </div>        
      </div>
      {/* icons */}
      <div className='flex flex-row gap-1 ml-20'>
      <a href="https://github.com/Varad80076?tab=repositories" target="_blank" className="flex items-center ">
    <FontAwesomeIcon icon={faGithub } className="mr-2 text-xl" />
    
  </a>
  <a href="https://www.instagram.com" target="_blank" className="flex items-center ">
  <FontAwesomeIcon icon={faInstagram} className="mr-2 text-xl" />
    
  </a>
  <a href="https://www.linkedin.com/in/varadbadgujar/" target="_blank" className="flex items-center ">
    <FontAwesomeIcon icon={faLinkedin} className="mr-2 text-xl" />
    
  </a>
      </div>
    </div>
  )
}

export default PersonalInfo