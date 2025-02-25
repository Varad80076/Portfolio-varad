import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NavBar from './componenets/NavBar.jsx'
import About from './componenets/About.jsx'
import Experience from './componenets/Experience.jsx'
import ContactFormm from './componenets/ContactForm.jsx'
import Resume from './componenets/Resume.jsx'
import Projects from './componenets/Projects.jsx'

const router =createBrowserRouter([
  {
     path: "/",
     element: <App />,
     childern: [
      {
        path: "/navbar",
     element: <NavBar />,
    },
    {
      path: "/about",
   element: <About />,
    },
    {
      path: "/resume",
      element: <Resume />,
    },
    {
      path: "/project",
   element: <Projects />,
    },
      {
        path: "/experience",
     element: <Experience />,
      },
      {
        path: "/contact",
     element: <ContactFormm />,
      },
      
  
     ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
