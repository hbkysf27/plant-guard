import React from "react";
import { FaLeaf, FaBrain, FaLightbulb } from "react-icons/fa"; // Import icons from React Icons
import { MdDevices } from "react-icons/md";

const Features = () => {
  return (
    <section className="bg-green-50 py-16 min-h-screen relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-green-800 mb-6">Features</h2>
        <p className="text-green-600 mb-12">
          Discover the incredible features of the Plant Guard app, designed to
          make plant identification and care effortless for everyone.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:scale-105 transition-transform duration-300">
            <FaLeaf className="text-green-500 text-6xl mx-auto mb-4" />
            <h3 className="text-xl font-bold text-green-700 mb-2">
              AI-Powered Identification
            </h3>
            <p className="text-green-600">
              Upload or capture an image, and our AI will identify the plant in
              seconds with incredible accuracy.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:scale-105 transition-transform duration-300">
            <FaBrain className="text-green-500 text-6xl mx-auto mb-4" />
            <h3 className="text-xl font-bold text-green-700 mb-2">
              Scientific Insights
            </h3>
            <p className="text-green-600">
              Access detailed scientific names, families, and classifications
              for every plant.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:scale-105 transition-transform duration-300">
            <FaLightbulb className="text-green-500 text-6xl mx-auto mb-4" />
            <h3 className="text-xl font-bold text-green-700 mb-2">
              Care Instructions
            </h3>
            <p className="text-green-600">
              Learn essential care tips, from watering and sunlight to
              temperature and soil needs.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:scale-105 transition-transform duration-300">
            <MdDevices className="text-green-500 text-6xl mx-auto mb-4" />
            <h3 className="text-xl font-bold text-green-700 mb-2">
              Responsive Design
            </h3>
            <p className="text-green-600">
              Use the app on any device, whether you&apos;re on a smartphone,
              tablet, or desktop.
            </p>
          </div>

          {/* Feature 5 */}
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:scale-105 transition-transform duration-300">
            <FaLeaf className="text-green-500 text-6xl mx-auto mb-4" />
            <h3 className="text-xl font-bold text-green-700 mb-2">
              Global Plant Library
            </h3>
            <p className="text-green-600">
              Explore a vast library of plants from around the world, constantly
              updated with new entries.
            </p>
          </div>

          {/* Feature 6 */}
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:scale-105 transition-transform duration-300">
            <FaBrain className="text-green-500 text-6xl mx-auto mb-4" />
            <h3 className="text-xl font-bold text-green-700 mb-2">
              Easy to Use
            </h3>
            <p className="text-green-600">
              Our intuitive interface ensures anyone can use the app, from
              beginners to plant enthusiasts.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
