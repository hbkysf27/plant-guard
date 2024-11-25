import React, { useState } from "react";
import { Upload, Leaf, Loader2, Camera } from "lucide-react";
import HowToUseSection from "../components/HowToUseSection";
import { fileToBase64 } from "../utils/fileUtils"; // Utility for file conversion

const Home = () => {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [plantInfo, setPlantInfo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const BACKEND_URL =
    process.env.REACT_APP_BACKEND_URL || "http://localhost:5000/api/identify";

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
      identifyPlant(file);
    }
  };

  const handleCameraCapture = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
      identifyPlant(file);
    }
  };

  const identifyPlant = async (file) => {
    setLoading(true);
    setError(null);

    try {
      const formData = new FormData();
      formData.append("image", await fileToBase64(file));
      formData.append("mimeType", file.type);

      const response = await fetch(BACKEND_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          image: await fileToBase64(file),
          mimeType: file.type,
        }),
      });

      if (!response.ok) throw new Error("Failed to identify plant");

      const data = await response.json();
      setPlantInfo(data);
    } catch (err) {
      setError("Failed to identify plant. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-green-50 to-green-100 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-green-800 flex items-center justify-center gap-2 mt-4">
            <Leaf className="w-8 h-8" />
            Plant Guard
          </h1>
          <p className="text-green-600 mt-2">
            Discover the name, scientific details, and care instructions for any
            plant by uploading its image. Less than 3MB.
          </p>
        </header>

        {/* Upload Section */}
        <section className="bg-white rounded-2xl shadow-xl p-6 mb-8">
          <div className="border-2 border-dashed border-green-300 rounded-xl p-8 text-center">
            {/* File Upload */}
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
              id="image-upload"
            />
            <label
              htmlFor="image-upload"
              className="flex flex-col items-center justify-center cursor-pointer mb-4"
            >
              <Upload className="w-12 h-12 text-green-500 mb-2" />
              <span className="text-green-800 font-medium">
                Click to upload an image
              </span>
              <span className="text-green-600 text-sm">
                or drag and drop here
              </span>
            </label>

            {/* Camera Capture */}
            <input
              type="file"
              accept="image/*"
              capture="environment"
              onChange={handleCameraCapture}
              className="hidden"
              id="camera-capture"
            />
            <label
              htmlFor="camera-capture"
              className="flex flex-col items-center justify-center cursor-pointer mt-4"
            >
              <Camera className="w-12 h-12 text-green-500 mb-2" />
              <span className="text-green-800 font-medium">
                Click to take a picture
              </span>
              <span className="text-green-600 text-sm">
                Use your device&apos;s camera
              </span>
            </label>
          </div>
        </section>

        {/* Image Preview */}
        {preview && (
          <section className="bg-white rounded-2xl shadow-xl p-6 mb-8 fade-in">
            <h2 className="text-2xl font-bold text-green-800 mb-4">
              Uploaded Image
            </h2>
            <div className="relative h-64 md:h-96 rounded-xl overflow-hidden bg-green-50 flex items-center justify-center">
              <img
                src={preview}
                alt="Captured plant"
                className="object-contain h-full w-full"
              />
            </div>
          </section>
        )}

        {/* Loading Spinner */}
        {loading && (
          <div className="text-center py-8 fade-in">
            <Loader2 className="w-8 h-8 text-green-500 animate-spin mx-auto" />
            <p className="text-green-600 mt-4">Analyzing your plant...</p>
          </div>
        )}

        {/* Error Message */}
        {error && (
          <div className="bg-red-50 text-red-600 p-4 rounded-xl text-center fade-in">
            {error}
          </div>
        )}

        {/* Plant Details */}
        {plantInfo && (
          <section className="bg-white rounded-2xl shadow-xl p-8 mb-12 mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-green-800 mb-6 flex items-center gap-2">
              <Leaf className="w-8 h-8 text-green-500" />
              Plant Details
            </h2>
            <p className="text-green-600 mb-8">
              Below is the information about the plant you uploaded or captured:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-green-700 mb-4">
                  Scientific Details
                </h3>
                <p className="text-green-600">
                  <strong>Called Name:</strong> {plantInfo.name || "N/A"}
                </p>
                <p className="text-green-600 mb-2">
                  <strong>Scientific Name:</strong>{" "}
                  {plantInfo.scientificName || "N/A"}
                </p>
                <p className="text-green-600">
                  <strong>Family:</strong> {plantInfo.family || "N/A"}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-green-700 mb-4">
                  Care Instructions
                </h3>
                <ul className="space-y-3">
                  {plantInfo.care && plantInfo.care.length > 0 ? (
                    plantInfo.care.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-center gap-2 text-green-600"
                      >
                        <Leaf className="w-6 h-6 text-green-500" />
                        {item}
                      </li>
                    ))
                  ) : (
                    <li>No care instructions available</li>
                  )}
                </ul>
              </div>
            </div>
          </section>
        )}

        {/* How to Use Section */}
        <HowToUseSection className="mt-14" />
      </div>
    </main>
  );
};

export default Home;
