import React from "react";
import { FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="bg-green-50 py-16 relative overflow-hidden min-h-screen">
      <div className="absolute inset-0 bg-gradient-to-br from-green-200 to-green-400 opacity-20"></div>
      <div className="max-w-6xl mx-auto px-6 relative flex flex-col items-center">
        <h2 className="text-3xl font-bold text-green-800 text-center mb-6">
          Contact Us
        </h2>
        <p className="text-green-600 text-center mb-12">
          Have questions? Reach out to us through any of the following methods:
        </p>

        <div className="flex flex-wrap justify-center gap-8">
          {/* Email Card */}
          <div className="bg-white bg-opacity-70 backdrop-blur-md rounded-xl shadow-lg p-6 text-center border border-white/20 sm:w-96 w-full max-w-xs hover:scale-105 transition-transform duration-300">
            <FaEnvelope className="text-green-500 text-6xl mx-auto mb-4" />
            <h3 className="text-xl font-bold text-green-700 mb-2">Email Us</h3>
            <p className="text-green-600">
              Reach out to us at{" "}
              <a
                href="mailto:support@plantidentifier.com"
                className="text-green-800 font-medium underline"
              >
                info@yusufsalh.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
