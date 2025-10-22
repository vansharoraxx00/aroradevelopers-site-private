import React, { useEffect, useState } from "react";

export default function CookieBanner() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("cookiesAccepted");
    if (!accepted) {
      setShowPopup(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookiesAccepted", "true");
    setShowPopup(false);
  };

  const handleSettings = () => {
    alert("⚙️ Cookie settings panel coming soon!");
  };

  const handleReset = () => {
    localStorage.removeItem("cookiesAccepted");
    alert("✅ Cookies reset. Reload to see banner again!");
  };

  if (!showPopup)
    return (
      <>
        {process.env.NODE_ENV === "development" && (
          <button
            onClick={handleReset}
            className="fixed bottom-4 right-4 bg-red-600 text-white text-sm px-4 py-2 rounded-lg shadow-md hover:bg-red-700 z-[9999]"
          >
            Reset Cookies
          </button>
        )}
      </>
    );

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[9999] bg-gray-900 text-white px-6 py-4 md:py-5 flex flex-col md:flex-row md:items-center md:justify-between shadow-2xl animate-slideUp">
      {/* Text Section */}
      <p className="text-sm md:text-base text-gray-200 md:w-3/4 leading-relaxed text-center md:text-left mb-3 md:mb-0">
        We use cookies to ensure you have the best experience on our site, to analyze
        traffic and enhance our marketing activities.{" "}
        <span className="text-indigo-400 cursor-pointer hover:underline">
          Cookie Policy
        </span>{" "}
        &{" "}
        <span className="text-indigo-400 cursor-pointer hover:underline">
          Terms of Service
        </span>.
      </p>

      {/* Buttons */}
      <div className="flex items-center justify-center gap-3">
        <button
          onClick={handleSettings}
          className="border border-gray-400 text-gray-100 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition"
        >
          Cookie Settings
        </button>
        <button
          onClick={handleAccept}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-full text-sm font-semibold transition"
        >
          Accept All Cookies
        </button>
      </div>

      {/* Slide-up animation */}
      <style>
        {`
          @keyframes slideUp {
            from { transform: translateY(100%); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
          }
          .animate-slideUp {
            animation: slideUp 0.4s ease-out;
          }
        `}
      </style>
    </div>
  );
}
