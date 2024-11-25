import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="bg-green-50 min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-6">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-green-800 mb-4">
            About Plant Guard
          </h1>
          <p className="text-lg text-green-600">
            The Plant Guard app helps you identify plants effortlessly using AI.
            Simply upload or capture a plant image to discover its name,
            scientific details, and care instructions.
          </p>
        </div>

        {/* Feature Highlights */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Feature 1 */}
          <div className="bg-white rounded-xl shadow-md p-6 text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-green-500 mx-auto mb-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8c1.656 0 3-1.344 3-3s-1.344-3-3-3-3 1.344-3 3 1.344 3 3 3zm0 5c-1.656 0-3 1.344-3 3s1.344 3 3 3 3-1.344 3-3-1.344-3-3-3zm0 5c1.656 0 3-1.344 3-3s-1.344-3-3-3-3 1.344-3 3 1.344 3 3 3z"
              />
            </svg>
            <h3 className="text-xl font-bold text-green-700 mb-2">
              AI-Powered Identification
            </h3>
            <p className="text-green-600">
              Quickly identify plants by uploading or capturing an image.
              Powered by advanced AI.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white rounded-xl shadow-md p-6 text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-green-500 mx-auto mb-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M20 12H4"
              />
            </svg>
            <h3 className="text-xl font-bold text-green-700 mb-2">
              Detailed Insights
            </h3>
            <p className="text-green-600">
              Access scientific names, plant families, and key care instructions
              for each plant.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white rounded-xl shadow-md p-6 text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-green-500 mx-auto mb-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 4v16m8-8H4"
              />
            </svg>
            <h3 className="text-xl font-bold text-green-700 mb-2">
              User-Friendly
            </h3>
            <p className="text-green-600">
              Designed for anyone, from gardening enthusiasts to botanists.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h2 className="text-2xl font-bold text-green-800 mb-4">
            Start Your Plant Identification Journey
          </h2>
          <p className="text-green-600 mb-8">
            Explore the world of plants with ease. Discover their details and
            learn how to care for them.
          </p>
          <Link to="/">
            <button className="bg-green-600 hover:bg-green-700 text-white py-2 px-6 rounded-lg font-medium">
              Get Started Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
