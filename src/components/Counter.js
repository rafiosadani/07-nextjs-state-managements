"use client";

import useCounterStore from "@/stores/counterStore";

export default function Counter() {
  const { count, increment, decrement, reset } = useCounterStore();

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold">Counter: {count}</h1>
      <div className="flex space-x-4 mt-4">
        <button
          onClick={increment}
          className="px-4 py-2 bg-blue-500 text-white rounded-md"
        >
          Increment
        </button>
        <button
          onClick={decrement}
          className="px-4 py-2 bg-red-500 text-white rounded-md"
        >
          Decrement
        </button>
        <button
          onClick={reset}
          className="px-4 py-2 bg-gray-500 text-white rounded-md"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
