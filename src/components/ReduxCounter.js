// components/ReduxCounter.jsx
"use client";

import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "@/features/counter/counterSlice";

export default function ReduxCounter() {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <div className="flex flex-col items-center p-8 bg-blue-50 border border-blue-200 rounded-xl shadow-lg space-y-6 w-lg mx-auto">
            <h2 className="text-4xl font-extrabold text-blue-800">
                Redux Count: <span className="text-blue-600">{count}</span>
            </h2>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 mt-6 w-full justify-center">
                <button
                    onClick={() => dispatch(increment())}
                    className="w-full sm:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition duration-200 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75"
                >
                    Increment
                </button>
                <button
                    onClick={() => dispatch(decrement())}
                    className="w-full sm:w-auto px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg shadow-md transition duration-200 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-75"
                >
                    Decrement
                </button>
            </div>
        </div>
    );
}