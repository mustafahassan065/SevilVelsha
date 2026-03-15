import React from "react";

function VoiceCoachingPage() {
  return (
    <div className="min-h-screen bg-bgColor flex items-center justify-center px-4">
      <div className="text-center max-w-xl">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Voice Control Coaching
        </h1>
        <p className="text-gray-500 text-lg mb-6">
          One-on-one coaching sessions with Sevil Velsha — coming soon.
        </p>
        <a
          href="/contact"
          className="inline-block bg-green-600 text-white font-semibold px-8 py-3 rounded hover:bg-green-700 transition"
        >
          Get in Touch
        </a>
      </div>
    </div>
  );
}

export default VoiceCoachingPage;
