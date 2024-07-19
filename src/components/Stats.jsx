import React from 'react'
import { CiCreditCard1 } from "react-icons/ci";
import { CiDiscount1 } from "react-icons/ci";
import { FaCar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";

function Stats() {
    return (
        <section className="text-gray-400 bg-gray-900 body-font py-16">
            <div className="container px-5  mx-auto">
                <div className="text-center mb-20">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font text-white mb-4">
                        "Drive Your Dreams: Where Every Journey Begins"</h1>
                    <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-400 text-opacity-80">
                        "Unlock Your Adventure with Himanshu_car_rental – Your Key to Seamless Travel!"</p>
                    <div className="flex mt-6 justify-center">
                        <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
                    </div>
                </div>
                <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">

                    <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-5 flex-shrink-0 text-5xl">
                            <CiCreditCard1 />
                        </div>
                        <div className="flex-grow">
                            <h2 className="text-white text-lg title-font font-medium mb-3">Accept all cards</h2>
                            <p className="leading-relaxed text-base">At our car rental agency, we accept all major credit and debit cards for payment. Whether you’re renting a car for a short trip or a long-term stay, we have a variety of payment options to suit your needs. Our fleet of vehicles is available for rent at most of our locations, and we accept debit cards at specific locations depending on your location and the type of vehicle.</p>
                            <a className="mt-3 text-indigo-400 inline-flex items-center">Learn More
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-5 flex-shrink-0 text-5xl">
                            <CiDiscount1 />
                        </div>
                        <div className="flex-grow">
                            <h2 className="text-white text-lg title-font font-medium mb-3">15% off for new customer</h2>
                            <p className="leading-relaxed text-base">
                                Welcome to Himanshu_car_rental As a token of appreciation for choosing us for your car rental needs, we're delighted to offer you a special discount of 10% on your first rental with us. Whether you're exploring the city or embarking on a road trip, we're here to make your journey smooth and enjoyable.</p>
                            <a className="mt-3 text-indigo-400 inline-flex items-center">Learn More
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-5 flex-shrink-0 text-5xl">
                            <CiDiscount1 />
                        </div>
                        <div className="flex-grow">
                            <h2 className="text-white text-lg title-font font-medium mb-3">10% off for book more than 5 days</h2>
                            <p className="leading-relaxed text-base">Experience more and save with our special offer: get 10% off your rental when you book a car for five days or more. Whether you're planning a long weekend getaway or an extended road trip, we've got the perfect vehicle to suit your needs. Take advantage of this discount and enjoy the freedom of exploring at your own pace with Himanshu_car_rental. Book now and embark on your next adventure with confidence!</p>
                            <a className="mt-3 text-indigo-400 inline-flex items-center">Learn More
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </a>
                        </div>
                    </div>

                </div>
            </div>

            <section className="text-gray-400 bg-gray-900 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-20">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">Featured</h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">

                            Discover why Himanshu_car_rental is a top choice for travelers worldwide. With a fleet of meticulously maintained vehicles and a commitment to exceptional customer service, we ensure every journey is smooth and memorable. Whether you're traveling for business or pleasure, our flexible rental options and competitive rates cater to your specific needs. Experience convenience and reliability with  Himanshu_car_rental , where your satisfaction is our priority.</p>
                    </div>
                    <div className="flex flex-wrap -m-4 text-center">
                        <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                            <div className="border-2 border-gray-800 px-4 py-6 rounded-lg">
                                <div fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-indigo-400 text-5xl inline-block">
                                    <FaRegStar />
                                </div>
                                <h2 className="title-font font-medium text-3xl text-white">4</h2>
                                <p className="leading-relaxed">Rating</p>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                            <div className="border-2 border-gray-800 px-4 py-6 rounded-lg">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-indigo-400 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                                    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
                                    <circle cx="9" cy="7" r="4"></circle>
                                    <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
                                </svg>
                                <h2 className="title-font font-medium text-3xl text-white">2K</h2>
                                <p className="leading-relaxed">Customers</p>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                            <div className="border-2 border-gray-800 px-4 py-6 rounded-lg">
                                <div fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-indigo-400 text-5xl inline-block" >
                                    <FaCar />
                                </div>
                                <h2 className="title-font font-medium text-3xl text-white">150</h2>
                                <p className="leading-relaxed">Cars</p>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                            <div className="border-2 border-gray-800 px-4 py-6 rounded-lg">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-indigo-400 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                                </svg>
                                <h2 className="title-font font-medium text-3xl text-white">8</h2>
                                <p className="leading-relaxed">Places</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default Stats