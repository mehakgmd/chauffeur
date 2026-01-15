// import React, { useState } from 'react';
// import { BsCalendar2Check } from 'react-icons/bs';

// export default function LimousineHero() {
//   const [pickupAddress, setPickupAddress] = useState('');
//   const [dropoffAddress, setDropoffAddress] = useState('');
//   const [pickupDate, setPickupDate] = useState('2023-04-19');
//   const [pickupTime, setPickupTime] = useState('12:25');

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-neutral-800 via-stone-700 to-neutral-900 flex items-center justify-center p-6">
//       <div className="w-full max-w-7xl">
//         {/* Main Content Container */}
//         <div className="bg-gradient-to-b from-stone-800/80 to-stone-900/80 rounded-3xl shadow-2xl overflow-hidden">
          
//           {/* Top Section with Text and Image */}
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 lg:p-12">
            
//             {/* Left Side - Heading */}
//             <div className="flex flex-col justify-center">
//               <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-4">
//                 Limousine
//                 <br />
//                 <span className="text-amber-400">VIP</span> <span className="text-white">Transfers</span>
//               </h1>
//             </div>

//             {/* Right Side - Description and Button */}
//             <div className="flex flex-col justify-center">
//               <p className="text-stone-200 text-base md:text-lg leading-relaxed mb-6">
//                 Welcome to our limousine rental website! We offer luxury transportation services for any occasion, from weddings and proms to corporate events and airport transfers.
//               </p>
//               <div>
//                 <button className="px-8 py-3 bg-amber-400 hover:bg-amber-500 text-stone-900 font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl">
//                   Open Fleet
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* Car Image Section */}
//           <div className="px-8 lg:px-12 pb-8">
//             <div className="relative">
//               <img
//                 src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=1400&q=90"
//                 alt="Luxury Limousine"
//                 className="w-full h-auto rounded-xl object-cover"
//                 style={{ maxHeight: '500px', objectFit: 'cover' }}
//               />
//             </div>
//           </div>

//           {/* Booking Form Section */}
//           <div className="px-8 lg:px-12 pb-8">
//             <div className="bg-stone-800/90 backdrop-blur-md rounded-2xl p-6 border border-stone-700/50 shadow-xl">
//               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                
//                 {/* Pick Up Address */}
//                 <div className="lg:col-span-1">
//                   <label className="block text-stone-300 text-sm mb-2 font-medium">
//                     Pick Up Address
//                   </label>
//                   <input
//                     type="text"
//                     placeholder="From: address, airport, hotel, ..."
//                     value={pickupAddress}
//                     onChange={(e) => setPickupAddress(e.target.value)}
//                     className="w-full bg-stone-700/60 border border-stone-600 rounded-lg px-4 py-3 text-white placeholder-stone-400 text-sm focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-all"
//                   />
//                 </div>

//                 {/* Drop Off Address */}
//                 <div className="lg:col-span-1">
//                   <label className="block text-stone-300 text-sm mb-2 font-medium">
//                     Drop Off Address
//                   </label>
//                   <input
//                     type="text"
//                     placeholder="Distance, Hourly, Flat Rate"
//                     value={dropoffAddress}
//                     onChange={(e) => setDropoffAddress(e.target.value)}
//                     className="w-full bg-stone-700/60 border border-stone-600 rounded-lg px-4 py-3 text-white placeholder-stone-400 text-sm focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-all"
//                   />
//                 </div>

//                 {/* Pick Up Date */}
//                 <div className="lg:col-span-1">
//                   <label className="block text-stone-300 text-sm mb-2 font-medium">
//                     Pick Up Date
//                   </label>
//                   <input
//                     type="date"
//                     value={pickupDate}
//                     onChange={(e) => setPickupDate(e.target.value)}
//                     className="w-full bg-stone-700/60 border border-stone-600 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-all"
//                   />
//                 </div>

//                 {/* Pick Up Time */}
//                 <div className="lg:col-span-1">
//                   <label className="block text-stone-300 text-sm mb-2 font-medium">
//                     Pick Up Time
//                   </label>
//                   <input
//                     type="time"
//                     value={pickupTime}
//                     onChange={(e) => setPickupTime(e.target.value)}
//                     className="w-full bg-stone-700/60 border border-stone-600 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-all"
//                   />
//                 </div>

//                 {/* Book Now Button */}
//                 <div className="lg:col-span-1 flex items-end">
//                   <button className="w-full bg-amber-400 hover:bg-amber-500 text-stone-900 font-bold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl">
//                     <BsCalendar2Check size={20} />
//                     Book Now
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// }



// import React, { useState } from 'react';
// import { IoCalendar } from "react-icons/io5";

// export default function LimousineHero() {
//   const [pickupAddress, setPickupAddress] = useState('');
//   const [dropoffAddress, setDropoffAddress] = useState('');
//   const [pickupDate, setPickupDate] = useState('2023-04-19');
//   const [pickupTime, setPickupTime] = useState('12:25');

//   return (
//     <div className="min-h-screen bg-black flex items-center justify-center p-10 ">
//       <div className="w-full max-w-7xl pt-16">
//         {/* Main Content Container */}
//         <div className="bg-gradient-to-r from-[#5c4a3e] to-[#372a23] rounded-3xl shadow-2xl overflow-hidden ">
          
//           {/* Top Section with Centered Text */}
//           <div className="text-center px-8 lg:px-12 pt-5">
            
//             {/* Heading */}
//             <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
//               Limousine
//               <br />
//               <span className="text-amber-400">VIP</span> <span className="text-white">Transfers</span>
//             </h1>

//             {/* Description */}
//             <p className="text-stone-200 text-base md:text-lg leading-relaxed mb-6 max-w-3xl mx-auto">
//               Welcome to our limousine rental website! We offer luxury transportation services for any occasion, from weddings and proms to corporate events and airport transfers.
//             </p>

//             {/* Open Fleet Button */}
//             {/* <button className="px-8 py-3 bg-amber-400 hover:bg-amber-500 text-stone-900 font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl">
//               Open Fleet
//             </button> */}
//           </div>

//           {/* Car Image Section */}
//           <div className="px-8 lg:px-12 pb-8">
//             <div className="relative">
//               <img
//                 src="/chauffer.png"
//                 alt="Luxury Limousine"
//                 className="w-full h-auto rounded-xl object-cover"
//                 style={{ maxHeight: '500px', objectFit: 'cover' }}
//               />
//             </div>
//           </div>

//           {/* Booking Form Section */}
//           <div className="px-8 lg:px-12 pb-8">
//             <div className="bg-stone-800/90 backdrop-blur-md rounded-2xl p-6 border border-stone-700/50 shadow-xl">
//               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                
//                 {/* Pick Up Address */}
//                 <div className="lg:col-span-1">
//                   <label className="block text-stone-300 text-sm mb-2 font-medium">
//                     Pick Up Address
//                   </label>
//                   <input
//                     type="text"
//                     placeholder="From: address, airport, hotel, ..."
//                     value={pickupAddress}
//                     onChange={(e) => setPickupAddress(e.target.value)}
//                     className="w-full bg-stone-700/60 border border-stone-600 rounded-lg px-4 py-3 text-white placeholder-stone-400 text-sm focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-all"
//                   />
//                 </div>

//                 {/* Drop Off Address */}
//                 <div className="lg:col-span-1">
//                   <label className="block text-stone-300 text-sm mb-2 font-medium">
//                     Drop Off Address
//                   </label>
//                   <input
//                     type="text"
//                     placeholder="Distance, Hourly, Flat Rate"
//                     value={dropoffAddress}
//                     onChange={(e) => setDropoffAddress(e.target.value)}
//                     className="w-full bg-stone-700/60 border border-stone-600 rounded-lg px-4 py-3 text-white placeholder-stone-400 text-sm focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-all"
//                   />
//                 </div>

//                 {/* Pick Up Date */}
//                 <div className="lg:col-span-1">
//                   <label className="block text-stone-300 text-sm mb-2 font-medium">
//                     Pick Up Date
//                   </label>
//                   <input
//                     type="date"
//                     value={pickupDate}
//                     onChange={(e) => setPickupDate(e.target.value)}
//                     className="w-full bg-stone-700/60 border border-stone-600 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-all"
//                   />
//                 </div>

//                 {/* Pick Up Time */}
//                 <div className="lg:col-span-1">
//                   <label className="block text-stone-300 text-sm mb-2 font-medium">
//                     Pick Up Time
//                   </label>
//                   <input
//                     type="time"
//                     value={pickupTime}
//                     onChange={(e) => setPickupTime(e.target.value)}
//                     className="w-full bg-stone-700/60 border border-stone-600 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-all"
//                   />
//                 </div>

//                 {/* Book Now Button */}
//                 <div className="lg:col-span-1 flex items-end">
//                   <button className="w-full bg-amber-400 hover:bg-amber-500 text-stone-900 font-bold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl">
//                     <IoCalendar size={20} />
//                     Book Now
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// }

'use client';
import React, { useState } from 'react';
import { LuMapPinHouse } from "react-icons/lu";
import { IoCalendarSharp } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";

export default function LuxuryCarHero() {
  const [formData, setFormData] = useState({
    location: 'City or Airport',
    pickupDate: 'Tue 20 Jan, 9:00',
    returnDate: 'Fri 24 Jan, 11:00'
  });

  const handleSearch = () => {
    console.log('Search initiated with:', formData);
  };

  const popularSearches = [
    'Cadillac Limousines',
    'BMW 2 Series',
    'Hummer H3 Limo'
  ];

  return (
    <section className="min-h-screen bg-black relative overflow-hidden">
      {/* Background Gradient */}      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        
        {/* Explore All Cars Button - Absolute Position */}
        <div className="absolute top-8 right-4 sm:right-8 lg:right-12">
          <a 
            href="#cars" 
            className="group flex items-center gap-3 text-white hover:text-amber-600 transition-all duration-300"
          >
            <div className="w-10 h-10 border-2 border-dashed border-gray-600 rounded-full flex items-center justify-center group-hover:border-amber-600 transition-colors duration-300">
              <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </div>
            <span className="hidden sm:inline text-sm font-medium">Explore All Cars</span>
          </a>
        </div>

        {/* Hero Content */}
        <div className="text-center pt-16 sm:pt-20 mb-12 md:mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-light mb-6 leading-tight">
            Your <span className="text-amber-600">Ultimate</span> Luxury
            <br />
            Drive Awaits
          </h1>
          <p className="text-gray-400 text-base sm:text-lg md:text-xl">
            Rent the world's finest cars and redefine luxury travel.
          </p>
        </div>

        {/* Car Image */}
        <div className="relative w-full max-w-5xl mx-auto my-12 md:my-20 px-4">
          <img
            src="/hero-image.png"
            alt="Luxury Mercedes-Benz S-Class"
            className="w-full h-auto"
            style={{
            }}
          />
        </div>

        {/* Booking Bar */}
        <div className=" rounded-full p-5 md:p-6 flex flex-col md:flex-row items-center gap-0 max-w-6xl mx-auto mb-10 shadow-2xl">
          
          {/* Location Field */}
          <div className="flex items-center gap-3 flex-1 w-full px-5 py-4 border-b md:border-b-0 md:border-r border-gray-600">
            <LuMapPinHouse className="w-5 h-5 text-amber-600 flex-shrink-0" />
            <div className="flex flex-col flex-1">
              <label className="text-white text-sm font-semibold mb-1">Location</label>
              <input
                type="text"
                value={formData.location}
                onChange={(e) => setFormData({...formData, location: e.target.value})}
                className="bg-transparent border-none text-gray-400 text-sm outline-none w-full"
              />
            </div>
          </div>

          {/* Pick Up Date Field */}
          <div className="flex items-center gap-3 flex-1 w-full px-5 py-4 border-b md:border-b-0 md:border-r border-gray-600">
            <IoCalendarSharp className="w-5 h-5 text-amber-600 flex-shrink-0" />
            <div className="flex flex-col flex-1">
              <label className="text-white text-sm font-semibold mb-1">Pick Up Date</label>
              <input
                type="text"
                value={formData.pickupDate}
                onChange={(e) => setFormData({...formData, pickupDate: e.target.value})}
                className="bg-transparent border-none text-gray-400 text-sm outline-none w-full cursor-pointer"
              />
            </div>
          </div>

          {/* Return Date Field */}
          <div className="flex items-center gap-3 flex-1 w-full px-5 py-4 border-b md:border-b-0 md:border-r border-gray-600">
            <IoCalendarSharp className="w-5 h-5 text-amber-600 flex-shrink-0" />
            <div className="flex flex-col flex-1">
              <label className="text-white text-sm font-semibold mb-1">Return Date</label>
              <input
                type="text"
                value={formData.returnDate}
                onChange={(e) => setFormData({...formData, returnDate: e.target.value})}
                className="bg-transparent border-none text-gray-400 text-sm outline-none w-full cursor-pointer"
              />
            </div>
          </div>

          {/* Search Button */}
          <button 
            onClick={handleSearch}
            className="bg-gradient-to-r from-amber-600 to-amber-700 text-black px-10 py-4 rounded-full text-base font-bold hover:shadow-xl hover:shadow-amber-600 hover:scale-105 transition-all duration-300 w-full md:w-auto"
          >
            Search
          </button>
        </div>

        {/* Popular Searches */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 flex-wrap">
            <span className="text-white text-sm md:text-base font-medium">
              Popular Search :
            </span>
            {popularSearches.map((search, index) => (
              <button
                key={index}
                className="bg-gray-700 bg-opacity-80 text-gray-300 px-6 py-2.5 rounded-full text-sm hover:bg-gray-600 hover:text-white hover:border-amber-600 border border-transparent transition-all duration-300 cursor-pointer"
              >
                {search}
              </button>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}