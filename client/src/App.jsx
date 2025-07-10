import { Routes, Route, Link } from 'react-router-dom'
import { useState } from 'react'
import { Link as ScrollLink } from 'react-scroll';
import './App.css'
import './index.css'
'use client'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import EMK from '../src/assets/eatmorekorean/images/emk_thumbnail copy.png'
import Bookclub from '../src/assets/bookclub/images/bookclub_thumbnail.png'
import Windbnb from '../src/assets/windbnb/images/display-mockup-min.jpeg'
import Sneakers from '../src/assets/sneakers/images/sneakersthumbnail.png'
import Spaceship from '../src/assets/spaceship/images/SpaceshipThumbnail.png'
import EmkPage from './Pages/EMK.jsx'
import BookclubPage from './Pages/BookclubPage.jsx'
import WindbnbPage from './Pages/Windbnb.jsx'
import Hero from './Hero.jsx'
import ProjectCard from './Components/ProjectCard.jsx'
import Services from './Components/services.jsx'
import AboutMe from './Components/About.jsx'
import Contact from './Components/Contact.jsx'
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';


function ScrollToHashElement() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return null;
}

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/#services' },
  { name: 'Portfolio', href: '/#portfolio' },
  { name: 'Contact', href: '/#contact' },
  { name: 'About', href: '/#about' },
]

const projects = [
  { thumbnail: EMK, name: 'Eat More Korean',  category:'UX case study', tool1:'Figma', tool2:'Card sort', tool3:'Surveys', summary:'Kiosk app for customers of different language backgrounds to ease the process of ordering authentic Korean food.' , href: 'emk' },
  { thumbnail: Bookclub, name: 'BookClub',  category:'UX case study and Web development', tool1:'HTML', tool2:'Bootstrap', tool3:'Figma', summary:'A website that acts as a social platform to host book clubs and live discussion feeds centered around your availibility.', href: 'bookclub'},
  { thumbnail: Windbnb, name: 'WindBnb',  category:'UX case study and Web development', tool1:'React', tool2:'MongoDB', tool3:'Express.js', summary:'Based off of the popular accommodation booking app Airbnb, my app incorporates a unique feature that allows friends to plan together.', href: 'https://windbnb-zd7l.onrender.com/' },
  
  { thumbnail: Sneakers, name: 'Sneakers', category:'Web development', tool1:'HTML', tool2:'CSS', tool3:'Javascript', summary:'A shoe E-commerce website', href: 'https://www.sneakers-c24z.onrender.com' },
  
  { thumbnail: Spaceship, name: 'Spaceship', category:'Web development', tool1:'HTML', tool2:'CSS', tool3:'Javascript', summary:'A space alien game based on probability', href: 'https://diondraevans.github.io/Space-Battle-MOD-1-PROJECT-/' }
]

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-white">
      <header className="bg-white shadow-lg ring-2 ring-amber-400/50 sticky top-0 z-50 inset-x-0">
        <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8 ">
          <div className="flex lg:flex-1">
              <a href="/">
                <img
                className="h-10 w-10 rounded-full object-cover border border-gray-300 shadow-sm"
                src="/assets/avatar/Diondra.JPG"
                alt="User avatar"
              />
              </a>
          </div>
          <div className="flex lg:hidden">
            {/* conditionally rendering the X mark and the hamburger menu */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
              <span className="sr-only">Toggle menu</span>
              {mobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
            {/* also conditionally rendered navigation menu below */}
            {mobileMenuOpen && (
            <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-md p-4">
               <nav className="space-y-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block text-gray-900 font-medium"
                  >
                    {item.name}
                  </a>
                ))}
              </nav>
            </div>
            )}
             
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm/6 font-semibold text-gray-900 hover:bg-sky-700 hover:text-white py-2 px-4 rounded">
                {item.name}
              </a>
            ))}
          </div>
         
        </nav>
        
      </header>

      <div className="relative isolate pt-14">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75"
          />
        </div>
        <ScrollToHashElement />
      {/* --- Page Content via Routes --- */}
      <main className="pt-4">
        <Routes>
          {/* Home Route: grid of project cards */}
          <Route
            path="/"
            element={
              <div>
                <Hero /> 
                <AboutMe />
                <Services />
                <ProjectCard projects={projects} />
                
              </div>
            }
          />

          {/* Bookclub internal page */}
          <Route path="/bookclub" element={<BookclubPage />} />
          <Route path="/windbnb" element={<WindbnbPage />} />
          <Route path="/emk" element={<EmkPage />} />
      
      

          {/* Add more internal routes here */}
        </Routes>
      </main>
      <Contact />
      </div>
  </div>
  )
}






     
 