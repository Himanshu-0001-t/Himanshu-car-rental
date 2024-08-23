import React from 'react';
import { Link } from 'react-router-dom';

const RentalSuccess = () => {
    return (
        <section className="text-gray-400 bg-gray-900 body-font min-h-screen flex items-center justify-center">
            <div className="container px-5 py-24 mx-auto text-center">
                <div className="flex flex-col items-center justify-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-20 h-20 text-green-500 mb-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 12l2 2 4-4m5 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>
                    <h1 className="text-4xl font-bold text-white mb-4">
                        Your Car Rental is Confirmed!
                    </h1>
                    <p className="leading-relaxed text-lg text-gray-300 mb-8">
                        Thank you for choosing our service. Your car is now reserved, and we’re excited to help make your journey smooth and enjoyable.
                    </p>
                    <div className="flex justify-center">
                        <Link
                            to="/"
                            className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg transition duration-200"
                        >
                            Back to Home
                        </Link>
                        <Link
                            to="/bookings"
                            className="ml-4 text-indigo-500 bg-gray-800 border border-indigo-500 py-2 px-8 focus:outline-none hover:bg-indigo-500 hover:text-white rounded text-lg transition duration-200"
                        >
                            View My Bookings
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RentalSuccess;
