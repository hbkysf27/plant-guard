import React from "react";
import { Image as ImageIcon, Info, Book } from "lucide-react";

const HowToUseSection = () => {
  return (
    <section className="mb-8">
      <h2 className="text-3xl font-bold text-green-800 text-center mb-6 mt-8">
        How to Use the Plant Guard
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="bg-green-100 p-6 rounded-xl shadow-md text-center">
          <ImageIcon className="w-12 h-12 text-green-800 mx-auto mb-4" />
          <h3 className="text-lg font-bold text-green-800">Upload an Image</h3>
          <p className="text-green-600 mt-2">
            Upload a clear image of the plant you want to identify.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-green-100 p-6 rounded-xl shadow-md text-center">
          <Info className="w-12 h-12 text-green-800 mx-auto mb-4" />
          <h3 className="text-lg font-bold text-green-800">
            Get Plant Details
          </h3>
          <p className="text-green-600 mt-2">
            Our AI provides the plant's name, scientific name, and family.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-green-100 p-6 rounded-xl shadow-md text-center">
          <Book className="w-12 h-12 text-green-800 mx-auto mb-4" />
          <h3 className="text-lg font-bold text-green-800">Learn Care Tips</h3>
          <p className="text-green-600 mt-2">
            Discover essential care instructions for your plant.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowToUseSection;
