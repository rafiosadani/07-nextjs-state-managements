"use client"

import { useRouter, useSearchParams } from "next/navigation";

export default function ProductFilter() {
    const router = useRouter();
    const searchParams = useSearchParams();

    const category = searchParams.get("category") || 'all';

    const setCategory = (newCategory) => {
        const params = new URLSearchParams(searchParams);
        params.set("category", newCategory);
        router.push(`?${params.toString()}`);
    }

    return (
        <div className="p-6 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg shadow-md border border-gray-200 w-lg mx-auto">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Filter by Category
            </h3>
            <div className="relative">
                <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="block w-full px-4 py-2 pr-8 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 ease-in-out cursor-pointer"
                >
                    <option value="all">All Products</option>
                    <option value="electronics">Electronics</option>
                    <option value="clothing">Clothing</option>
                    <option value="books">Books</option>
                    <option value="home">Home & Kitchen</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                    </svg>
                </div>
            </div>
        </div>
    );
}