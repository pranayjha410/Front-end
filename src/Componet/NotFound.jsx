import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate(); // ✅ moved inside component

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <h2 className="text-4xl font-bold mb-6">404 | Page Not Found</h2>
      <button
        type="button"
        className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
        onClick={() => navigate(-1)} // goes back to previous page
      >
        Go Back
      </button>
    </div>
  );
};

export default NotFound;
