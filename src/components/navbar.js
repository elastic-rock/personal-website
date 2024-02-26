'use client'

import { useState } from 'react';
import { useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
    
    const [menuState, setMenuState] = useState("hidden");
    const [navbarTextColor, setNavbarTextColor] = useState("text-white");
    const [svgStrokeColor, setSvgStrokeColor] = useState("white");
    const [navbarDropShadow, setNavbarDropShadow] = useState("drop-shadow-md");
    const [navbarBackground, setNavbarBackground] = useState("bg-transparent");

    const navBarClass = `fixed top-0 w-full z-50 ${navbarBackground} ${navbarDropShadow} ${navbarTextColor}`
    const expMenuClass = `fixed ${menuState} sm:hidden top-0 z-20 right-0 w-full h-full bg-white`

    function handleMenuClick() {
      if (menuState == "hidden"){
        setMenuState("")
        setNavbarTextColor("text-black")
        setSvgStrokeColor("black")
        setNavbarDropShadow("")
        document.body.classList.add("stop-scrolling")
      } else {
        closeMenu()
      }
    }

    function closeMenu() {
      setMenuState("hidden")
      if (window.scrollY==0){
        setSvgStrokeColor("white")
        setNavbarTextColor("text-white")
      }
      setNavbarDropShadow("drop-shadow-md")
      document.body.classList.remove("stop-scrolling")
    }

    useEffect(() => {
      window.addEventListener("scroll", (event) => {
        if (window.scrollY==0){
          setNavbarBackground("bg-transparent")
          setNavbarTextColor("text-white")
          setSvgStrokeColor("white")
        } else {
          setNavbarBackground("bg-white")
          setNavbarTextColor("text-black")
          setSvgStrokeColor("black")
        }
      });
    });

    return (
      <div>
        <div className={navBarClass}>
          <div className="mx-auto max-w-5xl px-8 py-5">
            <nav className="flex items-center justify-between">
              <Link href="/" onClick={closeMenu}>David Weis</Link>
              <div className="hidden sm:flex gap-8">
                <Link href="/projects" className="hover:underline">Projects</Link>
                <Link href="/photography" className="hover:underline">Photography</Link>
                <Link href="/contact" className="hover:underline">Contact</Link>
              </div>
              <div className="sm:hidden" id="menuBtn">
                <button type="button" onClick={handleMenuClick}>
                  <svg id="menuBtnSvg" className="h-6 w-6" fill="none" strokeWidth="1.5" stroke={svgStrokeColor} >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                  </svg>
                </button>
              </div>
            </nav>
          </div>
        </div>

        <div className={expMenuClass}>
          <div className="flex flex-col left-0 top-24 absolute w-full px-8 gap-2">
            <Link href="/projects" className="text-black hover:underline" onClick={closeMenu}>Projects</Link>
            <Link href="/photography" className="text-black hover:underline" onClick={closeMenu}>Photography</Link>
            <Link href="/contact" className="text-black hover:underline" onClick={closeMenu}>Contact</Link>
          </div>
        </div>
      </div>
    )
  }