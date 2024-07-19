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
                let response = await axios.get(`https://car-rental-backend-g8cq.onrender.com/api/car/${id}`)

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
        <section className="text-gray-400 bg-gray-900 body-font overflow-hidden min-h-screen">
            <div className="container px-5 py-24 mx-auto">
                <div className="lg:w-4/5 mx-auto flex flex-wrap">
                    <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-contain object-center rounded" src={`${car?.carImage}`} />
                    <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                        <h2 className="text-sm title-font text-gray-300 tracking-widest">{car?.brand} {car?.carName}</h2>
                        <h1 className="text-white text-xl title-font font-medium mb-1"> {car?.fuel} / {car?.transmission}</h1>
                        <div className="flex mb-4">
                            <span className="flex items-center">
                                <span className="">Seats {car?.seat}</span>
                            </span>
                            <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-800 text-gray-500 space-x-2">
                                <a>
                                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                    </svg>
                                </a>
                                <a>
                                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                    </svg>
                                </a>
                                <a>
                                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                    </svg>
                                </a>
                            </span>
                        </div>
                        <p className="leading-relaxed">Welcome to our premier car rental website, where quality meets reliability. We pride ourselves on offering an extensive fleet of top-notch vehicles that cater to every need and preference. Whether you're planning a scenic road trip, a business excursion, or simply need a stylish ride for a special occasion, we've got you covered. Our cars are meticulously maintained to ensure peak performance and safety, providing you with the confidence to explore and enjoy your journey to the fullest. From sleek sedans to spacious SUVs and eco-friendly hybrids, each vehicle in our collection is chosen with your comfort and satisfaction in mind. Experience the difference with our exceptional cars and seamless rental service today.


                        </p>
                        <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-800 mb-5">
                        </div>
                        <div className="flex flex-wrap gap-4 items-center justify-between">
                            <span className="title-font font-medium text-2xl text-white">{car?.price} / day</span>
                            {car?.booked ? <Link to='/' className='text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded'>Back</Link> : <Link to={`/book/${car?._id}`} className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded ">Book Now</Link>}

                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Car