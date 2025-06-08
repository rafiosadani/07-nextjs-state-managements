"use client"

import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function UserProfile() {
    const { data, error, isLoading } = useSWR(
        'https://jsonplaceholder.typicode.com/users/1',
        fetcher
    );

    if (error) return <div>Failed to load</div>;
    if (isLoading) return <div>Loading...</div>;

    if (!data) return <div>No user data found.</div>;

    return (
        <div className="flex flex-col items-start py-10 px-14 bg-white border-2 border-blue-100 rounded-2xl shadow-xl space-y-8 w-lg mx-auto transform transition-all duration-300 hover:shadow-2xl hover:border-blue-200">
            <h2 className="text-2xl font-extrabold text-blue-900 tracking-tight text-center">
                Profil Pengguna
            </h2>
            <div className="text-lg text-gray-700 space-y-4 text-left w-fit">
                <p className="text-base">
                    <span className="font-semibold text-gray-900">Nama: </span>
                    <span className="text-blue-600 font-medium">{data.name}</span>
                </p>
                <p className="text-base">
                    <span className="font-semibold text-gray-900">Email: </span>
                    <span className="text-blue-600 font-medium">{data.email}</span>
                </p>
                {data.phone && (
                    <p className="text-base">
                        <span className="font-semibold text-gray-900">Telepon: </span>
                        <span className="text-blue-600 font-medium">{data.phone}</span>
                    </p>
                )}
                {data.website && (
                    <p className="text-base">
                        <span className="font-semibold text-gray-900">Situs Web: </span>
                        <a href={`http://${data.website}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">
                            {data.website}
                        </a>
                    </p>
                )}
                {data.address && (
                    <p className="text-base leading-relaxed">
                        <span className="font-semibold text-gray-900">Alamat: </span>
                        <span className="text-blue-600 font-medium block mt-1 text-justify">
                            {data.address.street}, {data.address.suite}
                            {data.address.city}, {data.address.zipcode}
                        </span>
                    </p>
                )}
                {data.company && (
                    <p className="text-base">
                        <span className="font-semibold text-gray-900">Perusahaan: </span>
                        <span className="text-blue-600 font-medium">{data.company.name}</span>
                    </p>
                )}
            </div>
        </div>
    );
}