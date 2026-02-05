// // import React, { useState } from 'react';
// // import { BsCalendar2Check } from 'react-icons/bs';

// // export default function LimousineHero() {
// //   const [pickupAddress, setPickupAddress] = useState('');
// //   const [dropoffAddress, setDropoffAddress] = useState('');
// //   const [pickupDate, setPickupDate] = useState('2023-04-19');
// //   const [pickupTime, setPickupTime] = useState('12:25');

// //   return (
// //     <div className="min-h-screen bg-gradient-to-br from-neutral-800 via-stone-700 to-neutral-900 flex items-center justify-center p-6">
// //       <div className="w-full max-w-7xl">
// //         {/* Main Content Container */}
// //         <div className="bg-gradient-to-b from-stone-800/80 to-stone-900/80 rounded-3xl shadow-2xl overflow-hidden">
          
// //           {/* Top Section with Text and Image */}
// //           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 lg:p-12">
            
// //             {/* Left Side - Heading */}
// //             <div className="flex flex-col justify-center">
// //               <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-4">
// //                 Limousine
// //                 <br />
// //                 <span className="text-amber-400">VIP</span> <span className="text-white">Transfers</span>
// //               </h1>
// //             </div>

// //             {/* Right Side - Description and Button */}
// //             <div className="flex flex-col justify-center">
// //               <p className="text-stone-200 text-base md:text-md leading-relaxed mb-6">
// //                 Welcome to our limousine rental website! We offer luxury transportation services for any occasion, from weddings and proms to corporate events and airport transfers.
// //               </p>
// //               <div>
// //                 <button className="px-8 py-3 bg-amber-400 hover:bg-amber-500 text-stone-900 font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl">
// //                   Open Fleet
// //                 </button>
// //               </div>
// //             </div>
// //           </div>

// //           {/* Car Image Section */}
// //           <div className="px-8 lg:px-12 pb-8">
// //             <div className="relative">
// //               <img
// //                 src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=1400&q=90"
// //                 alt="Luxury Limousine"
// //                 className="w-full h-auto rounded-xl object-cover"
// //                 style={{ maxHeight: '500px', objectFit: 'cover' }}
// //               />
// //             </div>
// //           </div>

// //           {/* Booking Form Section */}
// //           <div className="px-8 lg:px-12 pb-8">
// //             <div className="bg-stone-800/90 backdrop-blur-md rounded-2xl p-6 border border-stone-700/50 shadow-xl">
// //               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                
// //                 {/* Pick Up Address */}
// //                 <div className="lg:col-span-1">
// //                   <label className="block text-stone-300 text-sm mb-2 font-medium">
// //                     Pick Up Address
// //                   </label>
// //                   <input
// //                     type="text"
// //                     placeholder="From: address, airport, hotel, ..."
// //                     value={pickupAddress}
// //                     onChange={(e) => setPickupAddress(e.target.value)}
// //                     className="w-full bg-stone-700/60 border border-stone-600 rounded-lg px-4 py-3 text-white placeholder-stone-400 text-sm focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-all"
// //                   />
// //                 </div>

// //                 {/* Drop Off Address */}
// //                 <div className="lg:col-span-1">
// //                   <label className="block text-stone-300 text-sm mb-2 font-medium">
// //                     Drop Off Address
// //                   </label>
// //                   <input
// //                     type="text"
// //                     placeholder="Distance, Hourly, Flat Rate"
// //                     value={dropoffAddress}
// //                     onChange={(e) => setDropoffAddress(e.target.value)}
// //                     className="w-full bg-stone-700/60 border border-stone-600 rounded-lg px-4 py-3 text-white placeholder-stone-400 text-sm focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-all"
// //                   />
// //                 </div>

// //                 {/* Pick Up Date */}
// //                 <div className="lg:col-span-1">
// //                   <label className="block text-stone-300 text-sm mb-2 font-medium">
// //                     Pick Up Date
// //                   </label>
// //                   <input
// //                     type="date"
// //                     value={pickupDate}
// //                     onChange={(e) => setPickupDate(e.target.value)}
// //                     className="w-full bg-stone-700/60 border border-stone-600 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-all"
// //                   />
// //                 </div>

// //                 {/* Pick Up Time */}
// //                 <div className="lg:col-span-1">
// //                   <label className="block text-stone-300 text-sm mb-2 font-medium">
// //                     Pick Up Time
// //                   </label>
// //                   <input
// //                     type="time"
// //                     value={pickupTime}
// //                     onChange={(e) => setPickupTime(e.target.value)}
// //                     className="w-full bg-stone-700/60 border border-stone-600 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-all"
// //                   />
// //                 </div>

// //                 {/* Book Now Button */}
// //                 <div className="lg:col-span-1 flex items-end">
// //                   <button className="w-full bg-amber-400 hover:bg-amber-500 text-stone-900 font-bold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl">
// //                     <BsCalendar2Check size={20} />
// //                     Book Now
// //                   </button>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>

// //         </div>
// //       </div>
// //     </div>
// //   );
// // }



// // import React, { useState } from 'react';
// // import { IoCalendar } from "react-icons/io5";

// // export default function LimousineHero() {
// //   const [pickupAddress, setPickupAddress] = useState('');
// //   const [dropoffAddress, setDropoffAddress] = useState('');
// //   const [pickupDate, setPickupDate] = useState('2023-04-19');
// //   const [pickupTime, setPickupTime] = useState('12:25');

// //   return (
// //     <div className="min-h-screen bg-black flex items-center justify-center p-10 ">
// //       <div className="w-full max-w-7xl pt-16">
// //         {/* Main Content Container */}
// //         <div className="bg-gradient-to-r from-[#5c4a3e] to-[#372a23] rounded-3xl shadow-2xl overflow-hidden ">
          
// //           {/* Top Section with Centered Text */}
// //           <div className="text-center px-8 lg:px-12 pt-5">
            
// //             {/* Heading */}
// //             <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
// //               Limousine
// //               <br />
// //               <span className="text-amber-400">VIP</span> <span className="text-white">Transfers</span>
// //             </h1>

// //             {/* Description */}
// //             <p className="text-stone-200 text-base md:text-md leading-relaxed mb-6 max-w-3xl mx-auto">
// //               Welcome to our limousine rental website! We offer luxury transportation services for any occasion, from weddings and proms to corporate events and airport transfers.
// //             </p>

// //             {/* Open Fleet Button */}
// //             {/* <button className="px-8 py-3 bg-amber-400 hover:bg-amber-500 text-stone-900 font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl">
// //               Open Fleet
// //             </button> */}
// //           </div>

// //           {/* Car Image Section */}
// //           <div className="px-8 lg:px-12 pb-8">
// //             <div className="relative">
// //               <img
// //                 src="/chauffer.png"
// //                 alt="Luxury Limousine"
// //                 className="w-full h-auto rounded-xl object-cover"
// //                 style={{ maxHeight: '500px', objectFit: 'cover' }}
// //               />
// //             </div>
// //           </div>

// //           {/* Booking Form Section */}
// //           <div className="px-8 lg:px-12 pb-8">
// //             <div className="bg-stone-800/90 backdrop-blur-md rounded-2xl p-6 border border-stone-700/50 shadow-xl">
// //               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                
// //                 {/* Pick Up Address */}
// //                 <div className="lg:col-span-1">
// //                   <label className="block text-stone-300 text-sm mb-2 font-medium">
// //                     Pick Up Address
// //                   </label>
// //                   <input
// //                     type="text"
// //                     placeholder="From: address, airport, hotel, ..."
// //                     value={pickupAddress}
// //                     onChange={(e) => setPickupAddress(e.target.value)}
// //                     className="w-full bg-stone-700/60 border border-stone-600 rounded-lg px-4 py-3 text-white placeholder-stone-400 text-sm focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-all"
// //                   />
// //                 </div>

// //                 {/* Drop Off Address */}
// //                 <div className="lg:col-span-1">
// //                   <label className="block text-stone-300 text-sm mb-2 font-medium">
// //                     Drop Off Address
// //                   </label>
// //                   <input
// //                     type="text"
// //                     placeholder="Distance, Hourly, Flat Rate"
// //                     value={dropoffAddress}
// //                     onChange={(e) => setDropoffAddress(e.target.value)}
// //                     className="w-full bg-stone-700/60 border border-stone-600 rounded-lg px-4 py-3 text-white placeholder-stone-400 text-sm focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-all"
// //                   />
// //                 </div>

// //                 {/* Pick Up Date */}
// //                 <div className="lg:col-span-1">
// //                   <label className="block text-stone-300 text-sm mb-2 font-medium">
// //                     Pick Up Date
// //                   </label>
// //                   <input
// //                     type="date"
// //                     value={pickupDate}
// //                     onChange={(e) => setPickupDate(e.target.value)}
// //                     className="w-full bg-stone-700/60 border border-stone-600 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-all"
// //                   />
// //                 </div>

// //                 {/* Pick Up Time */}
// //                 <div className="lg:col-span-1">
// //                   <label className="block text-stone-300 text-sm mb-2 font-medium">
// //                     Pick Up Time
// //                   </label>
// //                   <input
// //                     type="time"
// //                     value={pickupTime}
// //                     onChange={(e) => setPickupTime(e.target.value)}
// //                     className="w-full bg-stone-700/60 border border-stone-600 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-all"
// //                   />
// //                 </div>

// //                 {/* Book Now Button */}
// //                 <div className="lg:col-span-1 flex items-end">
// //                   <button className="w-full bg-amber-400 hover:bg-amber-500 text-stone-900 font-bold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl">
// //                     <IoCalendar size={20} />
// //                     Book Now
// //                   </button>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>

// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// 'use client';
// // import React, { useState } from 'react';
// // import { LuMapPinHouse } from "react-icons/lu";
// // import { IoCalendarSharp } from "react-icons/io5";
// // import { FaArrowRight } from "react-icons/fa";

// // export default function LuxuryCarHero() {
// //   const [formData, setFormData] = useState({
// //     location: 'City or Airport',
// //     pickupDate: 'Tue 20 Jan, 9:00',
// //     returnDate: 'Fri 24 Jan, 11:00'
// //   });

// //   const handleSearch = () => {
// //     console.log('Search initiated with:', formData);
// //   };

// //   const popularSearches = [
// //     'Cadillac Limousines',
// //     'BMW 2 Series',
// //     'Hummer H3 Limo'
// //   ];

// //   return (
// //     <section className="min-h-screen bg-black relative overflow-hidden">
// //       {/* Background Gradient */}      
// //       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        
// //         {/* Explore All Cars Button - Absolute Position */}
// //         <div className="absolute top-8 right-4 sm:right-8 lg:right-12">
// //           <a 
// //             href="#cars" 
// //             className="group flex items-center gap-3 text-white hover:text-amber-600 transition-all duration-300"
// //           >
// //             <div className="w-10 h-10 border-2 border-dashed border-gray-600 rounded-full flex items-center justify-center group-hover:border-amber-600 transition-colors duration-300">
// //               <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
// //             </div>
// //             <span className="hidden sm:inline text-sm font-medium">Explore All Cars</span>
// //           </a>
// //         </div>

// //         {/* Hero Content */}
// //         <div className="text-center pt-16 sm:pt-20 mb-12 md:mb-16">
// //           <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-light mb-6 leading-tight">
// //             Your <span className="text-amber-600">Ultimate</span> Luxury
// //             <br />
// //             Drive Awaits
// //           </h1>
// //           <p className="text-[#ffd166] text-base sm:text-md md:text-xl">
// //             Rent the world's finest cars and redefine luxury travel.
// //           </p>
// //         </div>

// //         {/* Car Image */}
// //         <div className="relative w-full max-w-5xl mx-auto my-12 md:my-20 px-4">
// //           <img
// //             src="/hero-image.png"
// //             alt="Luxury Mercedes-Benz S-Class"
// //             className="w-full h-auto"
// //             style={{
// //             }}
// //           />
// //         </div>

// //         {/* Booking Bar */}
// //         <div className=" rounded-full p-5 md:p-6 flex flex-col md:flex-row items-center gap-0 max-w-6xl mx-auto mb-10 shadow-2xl">
          
// //           {/* Location Field */}
// //           <div className="flex items-center gap-3 flex-1 w-full px-5 py-4 border-b md:border-b-0 md:border-r border-gray-600">
// //             <LuMapPinHouse className="w-5 h-5 text-amber-600 flex-shrink-0" />
// //             <div className="flex flex-col flex-1">
// //               <label className="text-white text-sm font-semibold mb-1">Location</label>
// //               <input
// //                 type="text"
// //                 value={formData.location}
// //                 onChange={(e) => setFormData({...formData, location: e.target.value})}
// //                 className="bg-transparent border-none text-[#ffd166] text-sm outline-none w-full"
// //               />
// //             </div>
// //           </div>

// //           {/* Pick Up Date Field */}
// //           <div className="flex items-center gap-3 flex-1 w-full px-5 py-4 border-b md:border-b-0 md:border-r border-gray-600">
// //             <IoCalendarSharp className="w-5 h-5 text-amber-600 flex-shrink-0" />
// //             <div className="flex flex-col flex-1">
// //               <label className="text-white text-sm font-semibold mb-1">Pick Up Date</label>
// //               <input
// //                 type="text"
// //                 value={formData.pickupDate}
// //                 onChange={(e) => setFormData({...formData, pickupDate: e.target.value})}
// //                 className="bg-transparent border-none text-[#ffd166] text-sm outline-none w-full cursor-pointer"
// //               />
// //             </div>
// //           </div>

// //           {/* Return Date Field */}
// //           <div className="flex items-center gap-3 flex-1 w-full px-5 py-4 border-b md:border-b-0 md:border-r border-gray-600">
// //             <IoCalendarSharp className="w-5 h-5 text-amber-600 flex-shrink-0" />
// //             <div className="flex flex-col flex-1">
// //               <label className="text-white text-sm font-semibold mb-1">Return Date</label>
// //               <input
// //                 type="text"
// //                 value={formData.returnDate}
// //                 onChange={(e) => setFormData({...formData, returnDate: e.target.value})}
// //                 className="bg-transparent border-none text-[#ffd166] text-sm outline-none w-full cursor-pointer"
// //               />
// //             </div>
// //           </div>

// //           {/* Search Button */}
// //           <button 
// //             onClick={handleSearch}
// //             className="bg-gradient-to-r from-amber-600 to-amber-700 text-black px-10 py-4 rounded-full text-base font-bold hover:shadow-xl hover:shadow-amber-600 hover:scale-105 transition-all duration-300 w-full md:w-auto"
// //           >
// //             Search
// //           </button>
// //         </div>

// //         {/* Popular Searches */}
// //         <div className="text-center">
// //           <div className="flex flex-col sm:flex-row items-center justify-center gap-3 flex-wrap">
// //             <span className="text-white text-sm md:text-base font-medium">
// //               Popular Search :
// //             </span>
// //             {popularSearches.map((search, index) => (
// //               <button
// //                 key={index}
// //                 className="bg-gray-700 bg-opacity-80 text-gray-300 px-6 py-2.5 rounded-full text-sm hover:bg-gray-600 hover:text-white hover:border-amber-600 border border-transparent transition-all duration-300 cursor-pointer"
// //               >
// //                 {search}
// //               </button>
// //             ))}
// //           </div>
// //         </div>

// //       </div>
// //     </section>
// //   );
// // }

// import React, { useState } from 'react';
// import { FaArrowRight } from 'react-icons/fa';
// import { LuMapPinHouse } from 'react-icons/lu';
// import { IoCalendarSharp } from 'react-icons/io5';
// import { Spotlight } from '../ui/spotlight';


// export default function LuxuryCarHero() {
//   const [formData, setFormData] = useState({
//     location: '',
//     pickupDate: '',
//     returnDate: ''
//   });

//   const popularSearches = ['Cadillac Limousines', 'BMW 2 Series', 'Hummer H3 Limo'];

//   const handleSearch = () => {
//     console.log('Search data:', formData);
//   };

//   return (
//     <section className="min-h-screen bg-black relative overflow-hidden">
//       {/* Background Gradient */}
//       <div className="absolute inset-0 bg-gradient-radial from-gray-900 via-black to-black opacity-50"></div>
      
//       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        
//         {/* Explore All Cars Button - Absolute Position */}
//         <div className="absolute top-8 right-4 sm:right-8 lg:right-12">
//           <a 
//             href="#cars" 
//             className="group flex items-center gap-3 text-white hover:text-amber-500 transition-all duration-300"
//           >
//             <div className="w-10 h-10 border-2 border-dashed border-gray-600 rounded-full flex items-center justify-center group-hover:border-amber-500 transition-colors duration-300">
//               <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
//             </div>
//             <span className="hidden sm:inline text-sm font-medium">Explore All Cars</span>
//           </a>
//         </div>

//         {/* Hero Content */}
//         {/* <div className="text-center pt-8 sm:pt-12">
//           <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl text-white font-light mb-5">
//             WorldWide <span className="text-[#6b564b]">Chauffeur</span> Service
//           </h1>
//           <p className="text-[#ffd166] text-sm sm:text-base md:text-md">
//             Rent the world's finest cars and redefine luxury travel.
//           </p>
//         </div> */}

//         {/* Car Image */}
//          <Spotlight
//         className="top-50 left-0 md:-top-20 md:left-0"
//         fill="white"
//       />
//         <div className="relative w-full max-w-5xl mx-auto px-4">
//           <img
//             src="/chauffeur.png"
//             alt="Luxury Mercedes-Benz S-Class"
//             className="w-full h-[500px]"
//           />
//           {/* Car spotlight effect */}
// {/* <div
//   className="
//     absolute bottom-0 left-1/2
//     w-3/4 h-40
//     -translate-x-1/2
//     bg-gradient-radial from-white/15 to-transparent
//     blur-3xl
//     opacity-0
//     animate-spotlight
//   "
// ></div> */}
//         </div>

//         {/* Booking Bar */}
// <div
//   className="
//     max-w-5xl mx-auto
//     bg-gradient-to-r from-gray-400/40 via-gray-400/50 to-gray-400/40
//     backdrop-blur-xl
//     border border-white/10
//     rounded-full
//     shadow-[0_12px_40px_rgba(0,0,0,0.7)]
//     flex flex-col md:flex-row items-center
//     divide-y md:divide-y-0 md:divide-x divide-white/20 mb-4
//     overflow-hidden
//   "
// >
//   {/* Location */}
//   <div className="flex items-center gap-3 flex-1 px-7 py-4">
//     <LuMapPinHouse className="w-4 h-4 text-amber-400" />
//     <div className="flex flex-col leading-tight">
//       <span className="text-[#ffd166] text-[11px]">Location</span>
//       <span className="text-gray-200 text-sm">City Or Airport</span>
//     </div>
//   </div>

//   {/* Pick Up Date */}
//   <div className="flex items-center gap-3 flex-1 px-7 py-4">
//     <IoCalendarSharp className="w-4 h-4 text-amber-400" />
//     <div className="flex flex-col leading-tight">
//       <span className="text-[#ffd166] text-[11px]">Pick Up Date</span>
//       <span className="text-gray-200 text-sm">Tue 20 Jan, 9:00</span>
//     </div>
//   </div>

//   {/* Return Date */}
//   <div className="flex items-center gap-3 flex-1 px-7 py-4">
//     <IoCalendarSharp className="w-4 h-4 text-amber-400" />
//     <div className="flex flex-col leading-tight">
//       <span className="text-[#ffd166] text-[11px]">Return Date</span>
//       <span className="text-gray-200 text-sm">Fri 24 Jan, 11:00</span>
//     </div>
//   </div>

//   {/* Search Button */}
//   <div className="px-3 py-3">
//     <button
//       className="
//         bg-amber-400 hover:bg-amber-400
//         text-black font-semibold
//         px-8 py-3
//         rounded-full
//         transition-all duration-300
//       "
//     >
//       Search
//     </button>
//   </div>
// </div>


//         {/* Popular Searches */}
//         <div className="text-center pb-8 md:pb-12">
//           <div className="flex flex-col sm:flex-row items-center justify-center gap-3 flex-wrap">
//             <span className="text-[#ffd166] text-md md:text-sm font-normal">
//               Popular Search :
//             </span>
//             {popularSearches.map((search, index) => (
//               <button
//                 key={index}
//                 className="bg-gray-400/40 text-gray-300 px-5 md:px-6 py-2 rounded-full text-md md:text-sm hover:bg-gray-700 hover:text-white border border-gray-700/50 hover:border-gray-600 transition-all duration-300 cursor-pointer"
//               >
//                 {search}
//               </button>
//             ))}
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// }




// import Image from "next/image";

// export default function Hero() {
//   return (
//     <section className="relative w-full overflow-hidden">
      
//       {/* Image Wrapper */}
//       <div className="relative w-full">
//         <Image
//           src="/hero.png"
//           alt="Luxury Chauffeur Service"
//           width={1920}
//           height={1080}
//           priority
//           className="
//             w-full
//             h-auto
//             bg-white
//             object-contain
//             rounded-b-[3rem]
//           "
//         />

//         {/* Overlay */}
//         {/* <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent rounded-b-[3rem]" /> */}
//       </div>

//       {/* Text Content */}
//       <div className="absolute inset-0 z-10 max-w-7xl mx-auto px-6 flex items-center">
//         <div className="max-w-xl pt-40">
//           <h1 className="text-white text-4xl md:text-6xl font-light leading-tight">
//             Your Premium <br /> Chauffeur
//           </h1>

//           <p className="mt-6 text-gray-300 text-md">
//             Your High Class Chauffeur & Limousine Service Worldwide
//           </p>

//           <button className="mt-10 px-8 py-3 rounded-full bg-white text-black text-sm font-medium hover:bg-gray-200 transition">
//             Book Your Ride
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }



// import Image from "next/image";

// export default function Hero() {
//   return (
//     <section className="relative w-full">
      
//       {/* HERO IMAGE CONTAINER */}
//       <div
//         className="
//           relative
//           w-full
//           h-[90vh]
//           sm:h-[80vh]
//           md:h-[90vh]
//           lg:h-[100vh]
//           xl:h-[95vh]
//           overflow-hidden
//           rounded-b-3xl
//           sm:rounded-b-[2.5rem]
//           lg:rounded-b-[3.5rem]
//           xl:rounded-b-[4rem]
//         "
//       >
//         <Image
//           src="/hero.png"
//           alt="Luxury Chauffeur Service"
//           fill
//           priority
//           className="object-cover object-bottom"
//         />

//         {/* Overlay */}
//         <div
//           className="
//             absolute inset-0
//             bg-gradient-to-r
//             from-black/75
//             via-black/40
//             to-transparent
//           "
//         />
//       </div>

//       {/* TEXT */}
//       <div className="absolute inset-0 z-10 flex items-center">
//         <div className="max-w-7xl mx-auto px-6 w-full">
//           <div
//             className="
//               max-w-lg
//               pt-24
//               sm:pt-28
//               md:pt-32
//               lg:pt-40
//             "
//           >
//             <h1
//               className="
//                 text-white
//                 font-light
//                 leading-tight
//                 text-3xl
//                 sm:text-4xl
//                 md:text-5xl
//                 lg:text-6xl
//                 xl:text-7xl
//               "
//             >
//               Your Premium <br /> Chauffeur
//             </h1>

//             <p
//               className="
//                 mt-4
//                 sm:mt-5
//                 md:mt-6
//                 text-gray-300
//                 text-base
//                 sm:text-md
//                 md:text-xl
//               "
//             >
//               Your High Class Chauffeur & Limousine Service Worldwide
//             </p>

//             <button
//               className="
//                 mt-8
//                 sm:mt-10
//                 px-7
//                 sm:px-8
//                 py-3
//                 rounded-full
//                 bg-white
//                 text-black
//                 text-sm
//                 sm:text-base
//                 font-medium
//                 hover:bg-gray-200
//                 transition
//               "
//             >
//               Book Your Ride
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import { useState } from "react";
import Image from "next/image";

export default function Hero() {
  const [activeTab, setActiveTab] = useState<"oneway" | "hourly">("oneway");
  const [formData, setFormData] = useState({
    from: "",
    to: "",
    date: "",
    time: "",
    duration: "",
  });
  const [errors, setErrors] = useState({
    from: "",
    to: "",
    date: "",
    time: "",
    duration: "",
  });

  // Validation function
  const validateForm = () => {
    const newErrors = {
      from: "",
      to: "",
      date: "",
      time: "",
      duration: "",
    };

    let isValid = true;

    if (!formData.from.trim()) {
      newErrors.from = "Pickup location is required";
      isValid = false;
    }

    if (activeTab === "oneway" && !formData.to.trim()) {
      newErrors.to = "Drop-off location is required";
      isValid = false;
    }

    if (activeTab === "hourly" && !formData.duration.trim()) {
      newErrors.duration = "Duration is required";
      isValid = false;
    }

    if (!formData.date) {
      newErrors.date = "Date is required";
      isValid = false;
    }

    if (!formData.time) {
      newErrors.time = "Time is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      const submitData = {
        serviceType: activeTab,
        ...formData,
      };

      console.log("Form submitted:", submitData);

      // TODO: Replace with your API endpoint
      // try {
      //   const response = await fetch('/api/booking', {
      //     method: 'POST',
      //     headers: { 'Content-Type': 'application/json' },
      //     body: JSON.stringify(submitData),
      //   });
      //   const result = await response.json();
      // } catch (error) {
      //   console.error('Error:', error);
      // }

      alert("Form submitted successfully! Check console for data.");
    }
  };

  // Handle input changes
  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  return (
    <section className="relative w-full">
      {/* HERO IMAGE CONTAINER */}
      <div
        className="
          relative
          w-full
          h-[95vh]
          sm:h-[90vh]
          md:h-[100vh]
          lg:h-[105vh]
          xl:h-[100vh]
          overflow-hidden
          rounded-b-3xl
          sm:rounded-b-[2.5rem]
          lg:rounded-b-[3.5rem]
          xl:rounded-b-[4rem]
        "
      >
        <Image
          src="/hero.png"
          alt="Luxury Chauffeur Service"
          fill
          priority
          className="object-cover object-bottom"
        />

        {/* Overlay */}
        {/* <div
          className="
            absolute inset-0
            bg-gradient-to-r
            from-black/75
            via-black/40
            to-transparent
          "
        /> */}
      </div>

      {/* CONTENT WRAPPER */}
      <div className="absolute inset-0 z-10">
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between gap-8">
          
          {/* LEFT: TEXT */}
          <div
            className="
              max-w-xl
              ml-12
               pt-8
               sm:pt-16
              md:pt-20
              lg:pt-24
               xl:pt-28
            "
          >
            <h1
              className="
                text-white
                font-light
                leading-tight
                text-3xl
                sm:text-4xl
                md:text-5xl
                lg:text-6xl
                xl:text-7xl
              "
            >
              Your Premium Chauffeur
            </h1>

            <p
              className="
                mt-4
                sm:mt-5
                md:mt-6
                text-gray-300
                text-base
                sm:text-md
                md:text-xl
              "
            >
              Your High Class Chauffeur & Limousine Service Worldwide
            </p>

            <button
              className="
                mt-8
                sm:mt-10
                px-7
                sm:px-8
                py-3
                rounded-full
                bg-[#ffd166]
                text-black
                text-sm
                sm:text-base
                font-medium
                hover:bg-gray-200
                transition
              "
            >
              Book Your Ride
            </button>
          </div>

          {/* RIGHT: BOOKING FORM (Hidden on mobile) */}
          <div className="hidden lg:block mr-16 mt-16">
            <div
              className="
                w-[380px]
                xl:w-[420px]
                backdrop-blur-3xl
                bg-white/10
                rounded-2xl
                shadow-2xl
                p-5
                border border-black/50
              "
            >
              {/* Tabs */}
              <div className="flex gap-2 mb-4">
                <button
                  onClick={() => setActiveTab("oneway")}
                  className={`
                    flex-1 py-2 px-3 rounded-lg font-medium transition-all text-sm
                    ${
                      activeTab === "oneway"
                        ? "bg-[#ffd166] text-black"
                        : "bg-transparent text-white hover:bg-gray-100"
                    }
                  `}
                >
                  One way
                </button>
                <button
                  onClick={() => setActiveTab("hourly")}
                  className={`
                    flex-1 py-2 px-3 rounded-lg font-medium transition-all text-sm
                    ${
                      activeTab === "hourly"
                        ? "bg-[#ffd166] text-black"
                        : "bg-transparent text-white hover:bg-gray-100"
                    }
                  `}
                >
                  By the hour
                </button>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-2.5">
                {/* From Field */}
                <div>
                  <div
                    className={`
                    flex items-center gap-2.5 px-3 py-2.5 rounded-lg
                    border transition-all
                    ${
                      errors.from
                        ? "border-red-400"
                        : "border-black focus-within:border-gray-400"
                    }
                  `}
                  >
                    <svg
                      className="w-4 h-4 text-[#ffd166] flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <div className="flex-1">
                      <label className="block text-md text-white mb-0.5 font-medium">
                        From
                      </label>
                      <input
                        type="text"
                        placeholder="Address, airport, hotel, ..."
                        value={formData.from}
                        onChange={(e) => handleChange("from", e.target.value)}
                        className="w-full bg-transparent text-black placeholder:text-[#ffd166]/20 outline-none text-sm"
                      />
                    </div>
                  </div>
                  {errors.from && (
                    <p className="text-red-500 text-md mt-1 ml-1">
                      {errors.from}
                    </p>
                  )}
                </div>

                {/* To Field (Only for One Way) OR Duration Field (Only for Hourly) */}
                {activeTab === "oneway" ? (
                  <div>
                    <div
                      className={`
                      flex items-center gap-2.5 px-3 py-2.5 rounded-lg
                      border transition-all
                      ${
                        errors.to
                          ? "border-red-400"
                          : "border-black focus-within:border-gray-400"
                      }
                    `}
                    >
                      <svg
                        className="w-4 h-4 text-[#ffd166] flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      <div className="flex-1">
                        <label className="block text-md text-white mb-0.5 font-medium">
                          To
                        </label>
                        <input
                          type="text"
                          placeholder="Address, airport, hotel, ..."
                          value={formData.to}
                          onChange={(e) => handleChange("to", e.target.value)}
                          className="w-full bg-transparent text-gray-900 placeholder:text-[#ffd166] outline-none text-sm"
                        />
                      </div>
                    </div>
                    {errors.to && (
                      <p className="text-red-500 text-md mt-1 ml-1">
                        {errors.to}
                      </p>
                    )}
                  </div>
                ) : (
                  <div>
                    <div
                      className={`
                      flex items-center gap-2.5 px-3 py-2.5 rounded-lg
                      border transition-all
                      ${
                        errors.duration
                          ? "border-red-400"
                          : "border-black focus-within:border-gray-400"
                      }
                    `}
                    >
                      <svg
                        className="w-4 h-4 text-[#ffd166] flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <div className="flex-1">
                        <label className="block text-md text-white mb-0.5 font-medium">
                          Duration
                        </label>
                        <select
                          value={formData.duration}
                          onChange={(e) => handleChange("duration", e.target.value)}
                          className="w-full bg-transparent text-gray-900 outline-none text-sm"
                        >
                          <option value="">Select duration</option>
                          <option value="1">1 hour</option>
                          <option value="2">2 hours</option>
                          <option value="3">3 hours</option>
                          <option value="4">4 hours</option>
                          <option value="5">5 hours</option>
                          <option value="6">6 hours</option>
                          <option value="8">8 hours</option>
                          <option value="10">10 hours</option>
                          <option value="12">12 hours</option>
                        </select>
                      </div>
                    </div>
                    {errors.duration && (
                      <p className="text-red-500 text-md mt-1 ml-1">
                        {errors.duration}
                      </p>
                    )}
                  </div>
                )}

                {/* Date Field */}
                <div>
                  <div
                    className={`
                    flex items-center gap-2.5 px-3 py-2.5 rounded-lg
                    border transition-all
                    ${
                      errors.date
                        ? "border-red-400"
                        : "border-black focus-within:border-gray-400"
                    }
                  `}
                  >
                    <svg
                      className="w-4 h-4 text-[#ffd166] flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <div className="flex-1">
                      <label className="block text-md text-white mb-0.5 font-medium">
                        Date
                      </label>
                      <input
                        type="date"
                        value={formData.date}
                        onChange={(e) => handleChange("date", e.target.value)}
                        className="w-full bg-transparent text-gray-900 outline-none text-sm"
                      />
                    </div>
                  </div>
                  {errors.date && (
                    <p className="text-red-500 text-md mt-1 ml-1">
                      {errors.date}
                    </p>
                  )}
                </div>

                {/* Time Field */}
                <div>
                  <div
                    className={`
                    flex items-center gap-2.5 px-3 py-2.5 rounded-lg
                    border transition-all
                    ${
                      errors.time
                        ? "border-red-400"
                        : "border-black focus-within:border-gray-400"
                    }
                  `}
                  >
                    <svg
                      className="w-4 h-4 text-[#ffd166] flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <div className="flex-1">
                      <label className="block text-md text-white mb-0.5 font-medium">
                        Pickup time
                      </label>
                      <input
                        type="time"
                        value={formData.time}
                        onChange={(e) => handleChange("time", e.target.value)}
                        className="w-full bg-transparent text-gray-900 outline-none text-sm"
                      />
                    </div>
                  </div>
                  {errors.time && (
                    <p className="text-red-500 text-md mt-1 ml-1">
                      {errors.time}
                    </p>
                  )}
                </div>

                {/* Info Text */}
                <p className="text-xs text-white px-1 py-1">
                  Chauffeur will wait 15 minutes free of charge.
                </p>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="
                    w-full py-3 rounded-lg font-semibold text-white text-base
                    bg-gradient-to-r from-[#ffd166] to-[#784e37]
                    hover:from-red-600 hover:to-orange-600
                    transition-all shadow-md hover:shadow-lg
                  "
                >
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE BOOKING FORM (Below hero on mobile) */}
      <div className="lg:hidden px-6 -mt-16 relative z-20 mb-12">
        <div
          className="
            backdrop-blur-xl
            bg-white/90
            rounded-2xl
            shadow-2xl
            p-5
            border border-black/50
          "
        >
          {/* Tabs */}
          <div className="flex gap-2 mb-5">
            <button
              onClick={() => setActiveTab("oneway")}
              className={`
                flex-1 py-2.5 px-4 rounded-lg font-medium transition-all text-sm
                ${
                  activeTab === "oneway"
                    ? "bg-gray-900 text-white"
                    : "bg-transparent text-gray-600 hover:bg-gray-100"
                }
              `}
            >
              One way
            </button>
            <button
              onClick={() => setActiveTab("hourly")}
              className={`
                flex-1 py-2.5 px-4 rounded-lg font-medium transition-all text-sm
                ${
                  activeTab === "hourly"
                    ? "bg-gray-900 text-white"
                    : "bg-transparent text-gray-600 hover:bg-gray-100"
                }
              `}
            >
              By the hour
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-3">
            {/* From Field */}
            <div>
              <div
                className={`
                flex items-center gap-3 px-3 py-3 rounded-lg
                border transition-all
                ${
                  errors.from
                    ? "border-red-400"
                    : "border-black focus-within:border-gray-400"
                }
              `}
              >
                <svg
                  className="w-5 h-5 text-[#ffd166] flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <div className="flex-1">
                  <label className="block text-md text-white mb-0.5 font-medium">
                    From
                  </label>
                  <input
                    type="text"
                    placeholder="Address, airport, hotel, ..."
                    value={formData.from}
                    onChange={(e) => handleChange("from", e.target.value)}
                    className="w-full bg-transparent text-gray-900 placeholder:text-[#ffd166] outline-none text-sm"
                  />
                </div>
              </div>
              {errors.from && (
                <p className="text-red-500 text-md mt-1 ml-1">{errors.from}</p>
              )}
            </div>

            {/* To Field (Only for One Way) OR Duration Field (Only for Hourly) */}
            {activeTab === "oneway" ? (
              <div>
                <div
                  className={`
                  flex items-center gap-3 px-3 py-3 rounded-lg
                  border transition-all
                  ${
                    errors.to
                      ? "border-red-400"
                      : "border-black focus-within:border-gray-400"
                  }
                `}
                >
                  <svg
                    className="w-5 h-5 text-[#ffd166] flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <div className="flex-1">
                    <label className="block text-md text-white mb-0.5 font-medium">
                      To
                    </label>
                    <input
                      type="text"
                      placeholder="Address, airport, hotel, ..."
                      value={formData.to}
                      onChange={(e) => handleChange("to", e.target.value)}
                      className="w-full bg-transparent text-gray-900 placeholder:text-[#ffd166] outline-none text-sm"
                    />
                  </div>
                </div>
                {errors.to && (
                  <p className="text-red-500 text-md mt-1 ml-1">{errors.to}</p>
                )}
              </div>
            ) : (
              <div>
                <div
                  className={`
                  flex items-center gap-3 px-3 py-3 rounded-lg
                  border transition-all
                  ${
                    errors.duration
                      ? "border-red-400"
                      : "border-black focus-within:border-gray-400"
                  }
                `}
                >
                  <svg
                    className="w-5 h-5 text-[#ffd166] flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <div className="flex-1">
                    <label className="block text-md text-white mb-0.5 font-medium">
                      Duration
                    </label>
                    <select
                      value={formData.duration}
                      onChange={(e) => handleChange("duration", e.target.value)}
                      className="w-full bg-transparent text-gray-900 outline-none text-sm"
                    >
                      <option value="">Select duration</option>
                      <option value="1">1 hour</option>
                      <option value="2">2 hours</option>
                      <option value="3">3 hours</option>
                      <option value="4">4 hours</option>
                      <option value="5">5 hours</option>
                      <option value="6">6 hours</option>
                      <option value="8">8 hours</option>
                      <option value="10">10 hours</option>
                      <option value="12">12 hours</option>
                    </select>
                  </div>
                </div>
                {errors.duration && (
                  <p className="text-red-500 text-md mt-1 ml-1">{errors.duration}</p>
                )}
              </div>
            )}

            {/* Date Field */}
            <div>
              <div
                className={`
                flex items-center gap-3 px-3 py-3 rounded-lg
                border transition-all
                ${
                  errors.date
                    ? "border-red-400"
                    : "border-black focus-within:border-gray-400"
                }
              `}
              >
                <svg
                  className="w-5 h-5 text-[#ffd166] flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <div className="flex-1">
                  <label className="block text-md text-white mb-0.5 font-medium">
                    Date
                  </label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => handleChange("date", e.target.value)}
                    className="w-full bg-transparent text-gray-900 outline-none text-sm"
                  />
                </div>
              </div>
              {errors.date && (
                <p className="text-red-500 text-md mt-1 ml-1">{errors.date}</p>
              )}
            </div>

            {/* Time Field */}
            <div>
              <div
                className={`
                flex items-center gap-3 px-3 py-3 rounded-lg
                border transition-all
                ${
                  errors.time
                    ? "border-red-400"
                    : "border-black focus-within:border-gray-400"
                }
              `}
              >
                <svg
                  className="w-5 h-5 text-[#ffd166] flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <div className="flex-1">
                  <label className="block text-md text-white mb-0.5 font-medium">
                    Pickup time
                  </label>
                  <input
                    type="time"
                    value={formData.time}
                    onChange={(e) => handleChange("time", e.target.value)}
                    className="w-full bg-transparent text-gray-900 outline-none text-sm"
                  />
                </div>
              </div>
              {errors.time && (
                <p className="text-red-500 text-md mt-1 ml-1">{errors.time}</p>
              )}
            </div>

            {/* Info Text */}
            <p className="text-md text-white px-1 py-1.5">
              Chauffeur will wait 15 minutes free of charge.
            </p>

            {/* Submit Button */}
            <button
              type="submit"
              className="
                w-full py-3.5 rounded-lg font-semibold text-white text-base
                bg-gradient-to-r from-[#ffd166] to-[#372a23]
                hover:from-red-600 hover:to-orange-600
                transition-all shadow-md hover:shadow-lg
              "
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}