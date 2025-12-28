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



import React, { useState } from 'react';
import { IoCalendar } from "react-icons/io5";

export default function LimousineHero() {
  const [pickupAddress, setPickupAddress] = useState('');
  const [dropoffAddress, setDropoffAddress] = useState('');
  const [pickupDate, setPickupDate] = useState('2023-04-19');
  const [pickupTime, setPickupTime] = useState('12:25');

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-10 ">
      <div className="w-full max-w-7xl pt-16">
        {/* Main Content Container */}
        <div className="bg-gradient-to-r from-[#5c4a3e] to-[#372a23] rounded-3xl shadow-2xl overflow-hidden ">
          
          {/* Top Section with Centered Text */}
          <div className="text-center px-8 lg:px-12 pt-5">
            
            {/* Heading */}
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
              Limousine
              <br />
              <span className="text-amber-400">VIP</span> <span className="text-white">Transfers</span>
            </h1>

            {/* Description */}
            <p className="text-stone-200 text-base md:text-lg leading-relaxed mb-6 max-w-3xl mx-auto">
              Welcome to our limousine rental website! We offer luxury transportation services for any occasion, from weddings and proms to corporate events and airport transfers.
            </p>

            {/* Open Fleet Button */}
            {/* <button className="px-8 py-3 bg-amber-400 hover:bg-amber-500 text-stone-900 font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl">
              Open Fleet
            </button> */}
          </div>

          {/* Car Image Section */}
          <div className="px-8 lg:px-12 pb-8">
            <div className="relative">
              <img
                src="/chauffer.png"
                alt="Luxury Limousine"
                className="w-full h-auto rounded-xl object-cover"
                style={{ maxHeight: '500px', objectFit: 'cover' }}
              />
            </div>
          </div>

          {/* Booking Form Section */}
          <div className="px-8 lg:px-12 pb-8">
            <div className="bg-stone-800/90 backdrop-blur-md rounded-2xl p-6 border border-stone-700/50 shadow-xl">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                
                {/* Pick Up Address */}
                <div className="lg:col-span-1">
                  <label className="block text-stone-300 text-sm mb-2 font-medium">
                    Pick Up Address
                  </label>
                  <input
                    type="text"
                    placeholder="From: address, airport, hotel, ..."
                    value={pickupAddress}
                    onChange={(e) => setPickupAddress(e.target.value)}
                    className="w-full bg-stone-700/60 border border-stone-600 rounded-lg px-4 py-3 text-white placeholder-stone-400 text-sm focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-all"
                  />
                </div>

                {/* Drop Off Address */}
                <div className="lg:col-span-1">
                  <label className="block text-stone-300 text-sm mb-2 font-medium">
                    Drop Off Address
                  </label>
                  <input
                    type="text"
                    placeholder="Distance, Hourly, Flat Rate"
                    value={dropoffAddress}
                    onChange={(e) => setDropoffAddress(e.target.value)}
                    className="w-full bg-stone-700/60 border border-stone-600 rounded-lg px-4 py-3 text-white placeholder-stone-400 text-sm focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-all"
                  />
                </div>

                {/* Pick Up Date */}
                <div className="lg:col-span-1">
                  <label className="block text-stone-300 text-sm mb-2 font-medium">
                    Pick Up Date
                  </label>
                  <input
                    type="date"
                    value={pickupDate}
                    onChange={(e) => setPickupDate(e.target.value)}
                    className="w-full bg-stone-700/60 border border-stone-600 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-all"
                  />
                </div>

                {/* Pick Up Time */}
                <div className="lg:col-span-1">
                  <label className="block text-stone-300 text-sm mb-2 font-medium">
                    Pick Up Time
                  </label>
                  <input
                    type="time"
                    value={pickupTime}
                    onChange={(e) => setPickupTime(e.target.value)}
                    className="w-full bg-stone-700/60 border border-stone-600 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-all"
                  />
                </div>

                {/* Book Now Button */}
                <div className="lg:col-span-1 flex items-end">
                  <button className="w-full bg-amber-400 hover:bg-amber-500 text-stone-900 font-bold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl">
                    <IoCalendar size={20} />
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}