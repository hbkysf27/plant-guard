import React from "react";

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white p-6">
      <div className="max-w-6xl mx-auto text-center space-y-4">
        <p className="text-lg font-medium">Plant Guard</p>
        <p className="text-sm">
          Discover plants effortlessly using AI. Upload a photo to identify
          plants and learn care instructions.
        </p>
        <p className="text-xs text-green-400">
          &copy; {new Date().getFullYear()} Plant Guard. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
