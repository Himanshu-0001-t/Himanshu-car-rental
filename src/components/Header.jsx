import React, { useState } from 'react';
import { Link } from "react-router-dom"

const Header = () => {

    return (
        <header className="text-gray-400 bg-gray-900 shadow-md py-4 px-6 flex flex-wrap gap-5 items-center justify-around">
            <h1 className='text-2xl font-bold'>H_car_rental</h1>
            <nav className='flex gap-10'>
                <Link to="/">Home</Link>
                <Link to="/rent">Rent</Link>
                <Link to="/bookings">Show booking</Link>
            </nav>
        </header>
    );
};

export default Header;
