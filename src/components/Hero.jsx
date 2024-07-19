import React from 'react'
import image from "../../img/purple_nexon.jpg"
import { Link } from 'react-router-dom'

function Hero() {
    return (
        <section className="text-gray-400 bg-gray-900 body-font">
            <div className="container mx-auto flex px-5 py-16 md:flex-row flex-col items-center">
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
                    <img className="object-cover object-center rounded" alt="hero" src={image} />
                </div>
                <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                        “Driving Quality, Delivering Memories”

                    </h1>
                    <p className="mb-8 leading-relaxed max-h-52 overflow-auto">At our car rental website, we understand that your travel plans are unique and require a tailored solution. That’s why we offer a wide range of vehicles to suit every need, from compact cars to luxury sedans and SUVs. With our user-friendly booking system, you can reserve your ideal ride in just a few clicks. Our fleet is maintained to the highest standards, ensuring a safe and comfortable journey. Plus, with our flexible payment options and no hidden fees, you can focus on what matters most - exploring new destinations and making unforgettable memories. Whether you’re a business traveler, a family on vacation, or an adventure-seeker, our car rental services are designed to provide you with the ultimate driving experience.</p>
                    <div className="flex justify-center">
                        <Link to="/rent" className="inline-flex text-white bg-indigo-700 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Rent now</Link>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero