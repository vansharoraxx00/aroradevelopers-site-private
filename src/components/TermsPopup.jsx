import React, { useEffect, useState } from "react";

export default function TermsPopup() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("termsAccepted");
    if (!accepted) {
      setShowPopup(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("termsAccepted", "true");
    setShowPopup(false);
  };

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-[9999] backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl p-6 max-w-md text-center mx-4 animate-fadeIn">
        <h2 className="text-2xl font-bold mb-3 text-indigo-700">Terms & Conditions</h2>
        <p className="text-gray-600 text-sm mb-5 leading-relaxed">
          By using this website, you agree to our{" "}
          <span className="text-indigo-600 font-medium">Terms of Service</span>,{" "}
          <span className="text-indigo-600 font-medium">Privacy Policy</span>, and{" "}
          <span className="text-indigo-600 font-medium">Cookie Policy</span>.
        </p>

        <button
          onClick={handleAccept}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-full font-semibold transition duration-300"
        >
          Accept All
        </button>
      </div>
    </div>
  );
}
