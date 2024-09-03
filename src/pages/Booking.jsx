import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const BookingForm = () => {
    let { carId } = useParams()
    let navigate = useNavigate()
    let location = useLocation()
    let car = location.state

    const [formData, setFormData] = useState({
        Name: '',
        email: '',
        phoneNo: '',
        startDate: '',
        endDate: '',
        carId: carId
    });
    const [totalDays, setTotalDays] = useState(null);
    const [error, setError] = useState('');
    const [totalPrice, setTotalPrice] = useState(0)
    const [loading, setLoading] = useState(false)

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };


    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function validateIndianMobileNumber(mobileNumber) {
        const mobileNumberRegex = /^[6-9]\d{9}$/;
        return mobileNumberRegex.test(mobileNumber);
    }


    const calculateTotalDays = () => {
        const start = new Date(formData.startDate);
        const end = new Date(formData.endDate);

        if (start && end && start <= end) {
            const differenceInTime = end - start;
            const differenceInDays = differenceInTime / (1000 * 3600 * 24);
            let total = differenceInDays * car.price
            setTotalPrice(total)
            setTotalDays(differenceInDays);
            setError('');
        } else {
            setError('Please enter valid start and end dates.');
            setTotalDays(null);
            setTotalPrice(0)
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (validateEmail(formData.email) || validateIndianMobileNumber(formData.phoneNo)) {
            calculateTotalDays();
            if (!error && totalDays !== null) {
                try {
                    setLoading(true)
                    const response = await axios.post('https://carrentalbackend-vpfgiypn.b4a.run/api/book', formData);

                    if (response.data.success) {
                        toast.success(`${response.data.message} and Your toal bil is ${response.data.Total}`)
                        navigate('/success-rent')
                    } else {
                        toast.error(response.data.message)
                    }

                } catch (err) {
                    console.error('Booking failed:', err);
                } finally {
                    setLoading(false)
                }
            }
        } else {
            setError("Invalid Email id or phone number")
            setLoading(false)
        }
    };

    return (
        <div className=" max-w-xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">

            <div className="mb-6">
                <div className="relative h-48 rounded-lg overflow-hidden shadow-md">
                    <img
                        alt="Car"
                        className="object-contain w-full h-full"
                        src={car?.carImage}
                    />
                </div>
                <div className="mt-4 text-center">
                    <h3 className="text-gray-700 text-xl font-bold">{car?.brand} {car?.carName}</h3>
                    <p className="text-gray-500 text-sm">{car?.fuel} | {car?.transmission}</p>
                    <h2 className="text-gray-900 text-lg font-semibold mt-2">{car?.price} Rs/day</h2>
                </div>
            </div>


            <h2 className="text-3xl font-extrabold text-center text-blue-600 mb-8">Book a Car</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 font-semibold mb-2">Name:</label>
                    <input
                        type="text"
                        name="Name"
                        value={formData.Name}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-semibold mb-2">Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-semibold mb-2">Phone Number:</label>
                    <input
                        type="text"
                        name="phoneNo"
                        value={formData.phoneNo}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-semibold mb-2">Start Date:</label>
                    <input
                        type="date"
                        name="startDate"
                        value={formData.startDate}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-semibold mb-2">End Date:</label>
                    <input
                        type="date"
                        name="endDate"
                        value={formData.endDate}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                        required
                    />
                </div>
                {error && <p className="text-red-500 mb-4">{error}</p>}
                {totalDays !== null && (
                    <p className="text-green-500 mb-4">Total Days of Rental: {totalDays} days aand total price is {totalPrice}</p>
                )}
                <div className="flex items-center justify-around">
                    <Link className="bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600" to="/">Cancel</Link>
                    <button
                        type="submit"
                        className="bg-blue-500 text-white py-2 px-4 rounded-lg disabled:bg-gray-400 hover:bg-blue-600" disabled={loading}
                    >
                        Book Now
                    </button>
                </div>
            </form>
        </div>

    );
};

export default BookingForm;
