export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-8">Hello, Tailwind CSS!</h1>
      <div className="space-x-4">
        {/* Primary Button */}
        <button className="px-6 py-2 text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300">
          Primary Button
        </button>

        {/* Secondary Button */}
        <button className="px-6 py-2 text-gray-700 bg-gray-200 rounded-lg shadow-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400">
          Secondary Button
        </button>
      </div>
    </div>
  );
}
