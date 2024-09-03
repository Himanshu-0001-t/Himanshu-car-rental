import React, { useEffect, useState } from 'react'
import { Link, useParams } from "react-router-dom"
import { toast } from 'react-hot-toast'
import axios from 'axios'

function Car() {
    const [car, setCar] = useState(null)
    let { id } = useParams()

    useEffect(() => {
        const feachCar = async () => {
            try {
                let response = await axios.get(`https://carrentalbackend-vpfgiypn.b4a.run/api/car/${id}`)

                if (response.data.success) {
                    setCar(response.data.car)
                } else {
                    toast.error(response.data.message)
                }

            } catch (error) {
                toast.error(error)
            }
        }
        feachCar()

    }, [])

    return (
        <section className="text-gray-400 bg-gray-900 body-font overflow-hidden min-h-screen flex items-center justify-center">
            <div className="container px-5 py-12 mx-auto">
                <div className="lg:w-4/5 mx-auto flex flex-wrap shadow-lg rounded-lg bg-gray-800 overflow-hidden">

                    <img
                        alt="ecommerce"
                        className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center"
                        src={`${car?.carImage}`}
                    />
                    <div className="lg:w-1/2 w-full lg:pl-10 lg:py-10 p-6 flex flex-col justify-between">
                        <div>
                            <h2 className="text-sm title-font text-indigo-400 tracking-widest uppercase">
                                {car?.brand} {car?.carName}
                            </h2>
                            <h1 className="text-white text-3xl title-font font-bold mt-1">
                                {car?.fuel} / {car?.transmission}
                            </h1>
                            <div className="flex items-center mt-4 mb-2">
                                <span className="text-gray-300">Seats {car?.seat}</span>
                                <span className="flex ml-4 space-x-3 text-gray-500">
                                    <a href="#" className="hover:text-indigo-400 transition duration-200">
                                        <svg
                                            fill="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            className="w-6 h-6"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                        </svg>
                                    </a>
                                    <a href="#" className="hover:text-indigo-400 transition duration-200">
                                        <svg
                                            fill="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            className="w-6 h-6"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                        </svg>
                                    </a>
                                    <a href="#" className="hover:text-indigo-400 transition duration-200">
                                        <svg
                                            fill="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            className="w-6 h-6"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                        </svg>
                                    </a>
                                </span>
                            </div>
                            <p className="leading-relaxed text-gray-300 mb-4">
                                Discover our compact car rental, perfect for city driving and short trips.
                                This car offers excellent fuel efficiency, easy maneuverability, and
                                comfortable seating for up to four passengers. Equipped with modern amenities,
                                it's an ideal choice for both solo travelers and small families. Book now to enjoy
                                a smooth and economical ride!
                            </p>
                            <p className="text-lg text-indigo-400 italic mb-6">
                                "Your journey begins here – drive the experience you deserve."
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-4 items-center justify-between">
                            <span className="title-font font-medium text-2xl text-white">
                                {car?.price} / day
                            </span>
                            {car?.booked ? (
                                <Link
                                    to="/"
                                    className="text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded transition duration-200"
                                >
                                    Back
                                </Link>
                            ) : (
                                <Link
                                    to={`/book/${car?._id}`}
                                    state={car}
                                    className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded transition duration-200"
                                >
                                    Book Now
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Car