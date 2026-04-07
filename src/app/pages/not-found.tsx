import { Link } from "react-router";

export function NotFoundPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-100 text-gray-800 px-6 relative overflow-hidden">
      
      {/* Soft background blobs */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-blue-200 opacity-30 blur-3xl rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-green-200 opacity-30 blur-3xl rounded-full"></div>

      <div className="text-center max-w-lg z-10">
        
        {/* 404 */}
        <h1 className="text-9xl font-extrabold bg-gradient-to-r from-blue-500 to-green-500 text-transparent bg-clip-text">
          404
        </h1>

        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-semibold mt-4">
          Oops! Page not found 👀
        </h2>

        {/* Description */}
        <p className="text-gray-500 mt-3">
          Looks like this page took a day off. Let’s get you back on track.
        </p>

        {/* Button */}
        <Link
          to="/"
          className="inline-block mt-6 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-green-500 text-white font-semibold shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300"
        >
          🚀 Go Back Home
        </Link>
      </div>
    </div>
  );
}