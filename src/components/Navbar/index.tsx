// // 'use client';
// // import { useState } from "react";
// // import { IoIosGlobe } from "react-icons/io";

// // export default function Navbar() {
// //   const [open, setOpen] = useState(false);
// //   const [language, setLanguage] = useState("ENG");

// //   const navLinks = [
// //     { name: "Home", href: "#" },
// //     { name: "About Us", href: "#about" },
// //     { name: "Our Services", href: "#services" },
// //     { name: "Our Fleets", href: "#fleets" },
// //     { name: "Cooperation", href: "#cooperation" },
// //   ];

// //   return (
// //     <header className="fixed top-0 left-0 w-full z-50 bg-black text-white shadow-md pb-6">
// //       <nav className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-16">
// //         {/* Logo */}
// //         <a href="/" className="text-2xl font-bold tracking-wide">
// //           LIMSON
// //         </a>

// //         {/* Center Nav Links */}
// //         <ul className="hidden md:flex items-center gap-6 text-sm font-medium">
// //           {navLinks.map((link) => (
// //             <li key={link.name}>
// //               <a
// //                 href={link.href}
// //                 className="text-white hover:bg-[#5c4a3e] rounded-md px-2 py-3 transition duration-200"
// //               >
// //                 {link.name}
// //               </a>
// //             </li>
// //           ))}
// //         </ul>

// //         {/* Right Section */}
// //         <div className="hidden md:flex items-center gap-4">
// //           {/* Language Selector */}
// //           <div className="relative group">
// //             <button className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-[#5c4a3e] transition">
// // <IoIosGlobe size={20} />
// //               <span className="text-sm font-medium">{language}</span>
// //               <svg
// //                 className="w-4 h-4 text-white"
// //                 fill="none"
// //                 stroke="currentColor"
// //                 viewBox="0 0 24 24"
// //               >
// //                 <path
// //                   strokeLinecap="round"
// //                   strokeLinejoin="round"
// //                   strokeWidth="2"
// //                   d="M19 9l-7 7-7-7"
// //                 />
// //               </svg>
// //             </button>

// //             {/* Dropdown */}
// //             <div className="absolute right-0 mt-2 w-28 bg-black rounded-md shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition">
// //               <ul className="text-sm text-white">
// //                 <li>
// //                   <button
// //                     onClick={() => setLanguage("ENG")}
// //                     className="flex items-center gap-2 px-3 py-2 w-full hover:bg-[#5c4a3e]"
// //                   >
// //                     <img
// //                       src="https://flagcdn.com/w20/gb.png"
// //                       alt="ENG"
// //                       className="w-5 h-4 rounded-sm"
// //                     />
// //                     ENG
// //                   </button>
// //                 </li>
// //                 <li>
// //                   <button
// //                     onClick={() => setLanguage("FRA")}
// //                     className="flex items-center gap-2 px-3 py-2 w-full hover:bg-[#5c4a3e]"
// //                   >
// //                     <img
// //                       src="https://flagcdn.com/w20/fr.png"
// //                       alt="FRA"
// //                       className="w-5 h-4 rounded-sm"
// //                     />
// //                     FRA
// //                   </button>
// //                 </li>
// //                 <li>
// //                   <button
// //                     onClick={() => setLanguage("ESP")}
// //                     className="flex items-center gap-1 px-3 py-2 w-full hover:bg-[#5c4a3e]"
// //                   >
// //                     <img
// //                       src="https://flagcdn.com/w20/es.png"
// //                       alt="ESP"
// //                       className="w-5 h-4 rounded-sm"
// //                     />
// //                     ESP
// //                   </button>
// //                 </li>
// //               </ul>
// //             </div>
// //           </div>

// //           {/* Auth Buttons */}
// //           <a
// //             href="#login"
// //             className="px-4 py-2 text-sm font-medium text-white hover:bg-[#5c4a3e] rounded-md transition"
// //           >
// //             Log in
// //           </a>
// //           <a
// //   href="#signup"
// //   className="px-4 py-2 bg-[#5c4a3e] text-white text-sm font-semibold rounded-md 
// //              border border-transparent hover:bg-transparent hover:border-[#5c4a3e] transition"
// // >
// //   Sign up
// // </a>

// //         </div>

// //         {/* Mobile Toggle */}
// //         <button
// //           className="md:hidden text-white hover:text-white focus:outline-none"
// //           onClick={() => setOpen(!open)}
// //         >
// //           {open ? (
// //             <svg
// //               xmlns="http://www.w3.org/2000/svg"
// //               className="h-6 w-6"
// //               fill="none"
// //               viewBox="0 0 24 24"
// //               stroke="currentColor"
// //             >
// //               <path
// //                 strokeLinecap="round"
// //                 strokeLinejoin="round"
// //                 strokeWidth="2"
// //                 d="M6 18L18 6M6 6l12 12"
// //               />
// //             </svg>
// //           ) : (
// //             <svg
// //               xmlns="http://www.w3.org/2000/svg"
// //               className="h-6 w-6"
// //               fill="none"
// //               viewBox="0 0 24 24"
// //               stroke="currentColor"
// //             >
// //               <path
// //                 strokeLinecap="round"
// //                 strokeLinejoin="round"
// //                 strokeWidth="2"
// //                 d="M4 6h16M4 12h16M4 18h16"
// //               />
// //             </svg>
// //           )}
// //         </button>
// //       </nav>

// //       {/* Mobile Menu */}
// //       {open && (
// //         <div className="md:hidden bg-black border-t border-gray-800">
// //           <ul className="flex flex-col items-center py-3 space-y-1 text-white text-sm">
// //             {navLinks.map((link) => (
// //               <li key={link.name}>
// //                 <a
// //                   href={link.href}
// //                   onClick={() => setOpen(false)}
// //                   className="block hover:bg-[#5c4a3e] rounded-md px-2 py-3 transition"
// //                 >
// //                   {link.name}
// //                 </a>
// //               </li>
// //             ))}
// //             <div className="border-t border-gray-700 w-2/3 my-2"></div>

// //             {/* Mobile Language Dropdown */}
// //             {/* <div className="flex items-center gap-2">
// //               <img
// //                 src="https://flagcdn.com/w20/gb.png"
// //                 alt="flag"
// //                 className="w-5 h-4 rounded-sm"
// //               />
// //               <span>{language}</span>
// //             </div> */}

// //             <a
// //               href="#login"
// //             className="px-4 py-2 text-sm font-medium text-white hover:bg-[#5c4a3e] rounded-md transition"
// //               onClick={() => setOpen(false)}
// //             >
// //               Log in
// //             </a>
// //             <a
// //               href="#signup"
// // className="px-4 py-2 bg-[#5c4a3e] text-white text-sm font-semibold rounded-md 
// //              border border-transparent hover:bg-transparent hover:border-[#5c4a3e] transition"
// //               onClick={() => setOpen(false)}
// //             >
// //               Sign up
// //             </a>
// //           </ul>
// //         </div>
// //       )}
// //     </header>
// //   );
// // }




// import React from 'react';

// export default function Navbar() {
//   return (
//     <div className="relative min-h-screen bg-white">
      
//       {/* ------------------------------------------------------
//          1. NAVBAR
//          Fixed to top. 
//          'z-50' ensures it sits above the green hero.
//          ------------------------------------------------------ */}
//       <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center">
        
//         <div className="relative flex h-[80px] items-center gap-8 bg-white px-10 rounded-b-[40px]">
          
//           {/* Logo */}
//           <div className="flex items-center gap-2 text-xl font-bold tracking-tight">
//             <span className="text-green-900">⚡ Solidroad</span>
//           </div>

//           {/* Links (Hidden on mobile for simplicity) */}
//           <div className="hidden md:flex gap-6 text-sm font-medium text-gray-600">
//             <a href="#" className="hover:text-black">Products</a>
//             <a href="#" className="hover:text-black">Customers</a>
//             <a href="#" className="hover:text-black">Careers</a>
//           </div>

//           {/* Buttons */}
//           <div className="flex gap-4">
//             <button className="text-sm font-medium text-gray-600">Sign in</button>
//             <button className="rounded-full bg-[#3FB973] px-5 py-2 text-sm font-bold text-white transition hover:bg-green-600">
//               See a demo
//             </button>
//           </div>

//           {/* ------------------------------------------------------
//              THE MAGIC: INVERTED CORNERS (WINGS)
//              These SVGs create the "melted" curve connecting the 
//              nav to the top screen edge.
//              ------------------------------------------------------ 
//           */}
          
//           {/* Left Wing */}
//           <svg className="absolute -left-[40px] top-0 h-[40px] w-[40px] text-white" viewBox="0 0 40 40" fill="currentColor">
//              {/* Path: Starts top-left, goes top-right, goes bottom-right, curves back to top-left */}
//              <path d="M40 40 C40 20 20 0 0 0 L40 0 Z" />
//           </svg>

//           {/* Right Wing */}
//           <svg className="absolute -right-[40px] top-0 h-[40px] w-[40px] text-white" viewBox="0 0 40 40" fill="currentColor">
//              <path d="M0 40 C0 20 20 0 40 0 L0 0 Z" />
//           </svg>

//         </div>
//       </nav>

//       {/* ------------------------------------------------------
//          2. HERO SECTION (The Green Card)
//          Note the 'pt-[30px]' and 'mx-[30px]'.
//          This reveals the white body background at the edges,
//          creating the "floating card" effect.
//          ------------------------------------------------------ */}
//       <main className="px-4 pt-4 md:px-8 md:pt-6">
//         <div className="relative mx-auto min-h-[800px] w-full max-w-[1400px] overflow-hidden rounded-t-[50px] bg-[#0c3c35]">
          
//           {/* Hero Content */}
//           <div className="flex flex-col items-center justify-center pt-40 text-center">
//             <h1 className="text-5xl font-bold text-white md:text-7xl">
//               Train and QA your <br/>
//               <span className="text-white">human and AI agents</span>
//             </h1>
            
//             {/* The Road Illustration (CSS representation) */}
//             <div className="mt-20 h-64 w-full bg-gradient-to-b from-[#0c3c35] via-[#105046] to-[#F2C94C]/20">
//                {/* Just a placeholder for the illustration */}
//             </div>
//           </div>

//         </div>
//       </main>
      
//     </div>
//   );
// }




// import Link from "next/link";

// export default function Navbar() {
//   return (
//     <header className="fixed top-6 left-0 right-0 z-50">
//       <div className="max-w-7xl mx-auto px-6">
//         <div className="flex items-center justify-between bg-white/95 backdrop-blur-md rounded-2xl px-8 py-4 shadow-lg">
          
//           {/* Logo */}
//           <div className="text-2xl font-serif font-semibold tracking-wide">
//             GREYSTAR
//           </div>

//           {/* Navigation */}
//           <nav className="hidden md:flex items-center gap-10 text-gray-800">
//             <Link href="#" className="hover:text-black">
//               For Businesses
//             </Link>
//             <Link href="#" className="flex items-center gap-1 hover:text-black">
//               Our Services
//               <span className="text-sm">▾</span>
//             </Link>
//             <Link href="#" className="hover:text-black">
//               Contact
//             </Link>
//           </nav>

//           {/* Actions */}
//           <div className="flex items-center gap-4">
//             <button className="px-4 py-2 rounded-full border border-purple-500 text-purple-600 text-sm">
//               EN
//             </button>
//             <button className="px-6 py-2 rounded-full bg-purple-600 text-white text-sm hover:bg-purple-700 transition">
//               Get Started
//             </button>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }



// "use client";
// import { useState } from "react";
// import Link from "next/link";
// import { FaBars, FaTimes, FaChevronDown, FaPhoneAlt } from "react-icons/fa";
// import { motion, AnimatePresence } from "framer-motion";

// export default function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const menuItems = [
//     { label: "Home", href: "/" },
//     { label: "Companies", href: "/companies" },
//     { label: "Services", href: "/services" },
//     { label: "Contact", href: "/contact" },
//   ];

//   return (
//     <nav className="fixed left-5 right-5 mx-auto w-[75%] max-w-[1500px] bg-gray-50 z-50 rounded-full mt-4 border border-gray-100">
//       <div className="flex items-center justify-between px-8 py-1">
//         {/* Logo */}
//         <div className="flex items-center h-16">
//           <div className="h-32 w-32 flex items-center justify-center overflow-hidden">
//             <img src="/Logo.png" alt="Packega logo" className="h-full w-auto object-contain scale-125" />
//           </div>
//         </div>

//         {/* Desktop Menu */}
//         <div className="hidden lg:flex items-center space-x-8">
//           {menuItems.map((item, index) => (
//             <Link key={index} href={item.href} className="nav-link">
//               <span>{item.label}</span>
//             </Link>
//           ))}
//         </div>

//         {/* Contact button */}
//         <div className="hidden lg:block">
//           <Link href="/contact" className="contact-btn flex items-center space-x-2">
//             <FaPhoneAlt />
//             <span>Contact Us</span>
//           </Link>
//         </div>

//         {/* Mobile Menu Button */}
//         <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden text-[#2c4658]">
//           {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       <AnimatePresence>
//         {menuOpen && (
//           <motion.div
//             initial={{ x: "100%" }}
//             animate={{ x: 0 }}
//             exit={{ x: "100%" }}
//             transition={{ duration: 0.35, ease: "easeInOut" }}
//             className="fixed inset-0 z-50 flex justify-end lg:hidden"
//             onClick={() => setMenuOpen(false)}
//           >
//             <motion.div
//               onClick={(e) => e.stopPropagation()}
//               initial={{ opacity: 0, x: 100 }}
//               animate={{ opacity: 1, x: 0 }}
//               exit={{ opacity: 0, x: 100 }}
//               transition={{ duration: 0.35 }}
//               className="w-72 h-full bg-white border-l border-gray-100 p-6 flex flex-col space-y-3 overflow-y-auto"
//             >
//               {/* Logo */}
//               <div className="flex justify-between items-center mb-4">
//                 <img src="/Logo.png" alt="Packega logo" className="h-full w-auto object-contain scale-125" />
//               </div>

//               {/* Mobile Links */}
//               {menuItems.map((item, index) => (
//                 <Link key={index} href={item.href} className="mobile-link flex items-center">
//                   <span>{item.label}</span>
//                 </Link>
//               ))}
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </nav>
//   );
// }



"use client";
import { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes, FaPhoneAlt } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "Companies", href: "/companies" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-2 left-5 right-5 mx-auto w-[65%] max-w-[1000px] bg-[#212121] backdrop-blur-md z-50 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.1)] border border-white/20">
      <div className="flex items-center justify-between px-8 py-1.5">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <div className="h-12 w-auto flex items-center justify-center">
            {/* <img src="/Logo.png" alt="Packega logo" className="h-full w-auto object-contain" /> */}
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8">
          {menuItems.map((item, index) => (
            <Link 
              key={index} 
              href={item.href} 
              className="text-white font-medium hover:text-[#ffd166] transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Contact button */}
        <div className="hidden lg:block">
          <Link 
            href="/contact" 
            className="flex items-center space-x-2 bg-[#ffd166] text-black px-6 py-2.5 rounded-full hover:bg-[#ffda85] transition-colors font-medium"
          >
            <FaPhoneAlt />
            <span>Contact Us</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setMenuOpen(!menuOpen)} 
          className="lg:hidden text-white p-2"
        >
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="fixed inset-0 z-50 flex justify-end lg:hidden bg-black/50 backdrop-blur-sm"
            onClick={() => setMenuOpen(false)}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.35 }}
              className="w-72 h-full bg-white/95 backdrop-blur-lg border-l border-white/20 p-6 flex flex-col space-y-3 overflow-y-auto shadow-xl"
            >
              {/* Logo */}
              <div className="flex justify-between items-center mb-6 pb-4 border-b border-gray-200">
                {/* <img src="/Logo.png" alt="Packega logo" className="h-10 w-auto object-contain" /> */}
                <button onClick={() => setMenuOpen(false)} className="text-[#2c4658]">
                  <FaTimes size={24} />
                </button>
              </div>

              {/* Mobile Links */}
              {menuItems.map((item, index) => (
                <Link 
                  key={index} 
                  href={item.href} 
                  className="text-[#2c4658] font-medium py-3 px-4 rounded-lg hover:bg-[#fefbea] transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              
              {/* Mobile Contact Button */}
              <Link 
                href="/contact" 
                className="flex items-center justify-center space-x-2 bg-[#ffd166] text-black px-6 py-3 rounded-full hover:bg-[#ffda85] transition-colors mt-4 font-medium"
                onClick={() => setMenuOpen(false)}
              >
                <FaPhoneAlt />
                <span>Contact Us</span>
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}