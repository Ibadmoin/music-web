import React from 'react'
import { TiSocialFacebook,TiSocialGithub,TiSocialLinkedin,TiSocialInstagram,TiSocialTwitter } from "react-icons/ti";

export default function Footer() {
  return (
    <footer  className="bg-black text-gray-400 py-12">
      <div className='className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8"'>
        <div>
            <h2 className='text-white text-lg font-semibold mb-4'>About Us</h2>
            <p className="mb-4">
            Music School is a premier institution dedicated to teaching the art
            and science of music. We nurture talent from the ground up,
            fostering a vibrant community of musicians.
          </p>
        </div>
        <div>
            <h2 className='text-white text-lg font-semibold mb-4'>Quick Links</h2>
            <ul>
                <li>
                    <a href="#" className='hover:text-white transition-colors duration-300'>
                        Home
                    </a>
                    </li>
                <li><a href="#" className='hover:text-white transition-colors duration-300'>
                    About
                    </a></li>
                <li><a href="/courses" className='hover:text-white transition-colors duration-300'>
                    Courses</a></li>
               
            </ul>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Follow Us</h2>
          <div className="flex flex-col">
            <div className='flex   items-center hover:text-white transition-colors duration-300 gap-0.6'>
              <TiSocialFacebook size={24} />
            <a
              href="#"
              
            >
              Facebook
            </a>
            </div>
          
            <div className="flex items-center hover:text-white transition-colors duration-300 gap-0.6">
            <TiSocialTwitter  size={24}/>
            <a
              href="#"
              
            >
              Twitter
            </a>
            </div>
            <div className="flex items-center hover:text-white transition-colors duration-300 gap-0.6">
            <TiSocialInstagram  size={24}/>
            <a
              href="https://www.instagram.com/ibad_moin/"
              target='_blank'
            >
              Instagram
            </a>
            </div>
           <div className="flex items-center hover:text-white hover:text-white transition-colors duration-300 gap-0.6">
           <TiSocialGithub  size={24}/>
           <a
              href="https://www.github.com/ibadmoin/"
              target='_blank'
            >
              Github
            </a>
           </div>
           <div className="flex items-center  hover:text-white hover:text-white transition-colors duration-300 gap-0.6 ">
           <TiSocialLinkedin  size={24}/>
           <a
              href="https://www.linkedin.com/in/ibad-moin-2b43a8253/"
              target='_blank'
              
            >
              Linkedin
            </a>
           </div>
          </div>
        </div>
        <div>
            <h2 className='text-white text-lg font-semibold mb-4'>Contact Us</h2>
            <p>Karachi, Pakistan</p>
            <p>Karachi 130320</p>
            <p>Email: ibadmoin@gmail.com</p>
            <p>Phone: (123) 456-7890 </p>
        </div>
      </div>
      <p className='text-center text-xs pt-8'>@ 2024-2025 Music school. All rights reserved.</p>
    </footer>
  )
}
