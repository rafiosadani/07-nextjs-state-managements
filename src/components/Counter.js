"use client";

import useCounterStore from "@/stores/counterStore";

export default function Counter() {
  const { count, increment, decrement, reset } = useCounterStore();

  return (
      <div className="flex flex-col items-center p-8 bg-green-50 border border-green-200 rounded-xl shadow-lg space-y-6 w-lg mx-auto">
          <h1 className="text-4xl font-extrabold text-green-800">
              Counter: <span className="text-green-600">{count}</span>
          </h1>

          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 mt-6 w-full justify-center">
              <button
                  onClick={increment}
                  className="w-full sm:w-auto px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg shadow-md transition duration-200 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-75"
              >
                  Increment
              </button>
              <button
                  onClick={decrement}
                  className="w-full sm:w-auto px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg shadow-md transition duration-200 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-75"
              >
                  Decrement
              </button>
              <button
                  onClick={reset}
                  className="w-full sm:w-auto px-6 py-3 bg-gray-500 hover:bg-gray-600 text-white font-semibold rounded-lg shadow-md transition duration-200 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75"
              >
                  Reset
              </button>
          </div>
      </div>
  );
}