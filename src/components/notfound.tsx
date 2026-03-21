// src/components/NotFound.tsx
import { Link } from "@tanstack/react-router";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-6xl font-bold dark:text-white text-gray-900 mb-2">404</h1>
      <p className="text-gray-500 mb-6 text-sm">
        This page doesn't exist — or maybe it moved.
      </p>
      <Link
        to="/"
        className="text-sm px-4 py-2 rounded-full bg-white text-black hover:bg-gray-200 transition-colors"
      >
        ← Back home
      </Link>
    </div>
  );
};

export default NotFound;