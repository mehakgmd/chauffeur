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