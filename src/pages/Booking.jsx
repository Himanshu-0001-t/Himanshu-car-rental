import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { Link, useNavigate, useParams } from 'react-router-dom';

const BookingForm = () => {
    let { carId } = useParams()
    let navigate = useNavigate()

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

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const calculateTotalDays = () => {
        const start = new Date(formData.startDate);
        const end = new Date(formData.endDate);

        if (start && end && start <= end) {
            const differenceInTime = end - start;
            const differenceInDays = differenceInTime / (1000 * 3600 * 24) + 1;
            setTotalDays(differenceInDays);
            setError('');
        } else {
            setError('Please enter valid start and end dates.');
            setTotalDays(null);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        calculateTotalDays();

        if (!error && totalDays !== null) {
            try {
                const response = await axios.post('https://car-rental-backend-g8cq.onrender.com/api/book', formData);

                console.log(response.data.message)
                if (response.data.success) {
                    toast.success(`${response.data.message} and Your toal bil is ${response.data.Total}`)
                    navigate('/')
                } else {
                    toast.error(response.data.message)
                }

            } catch (err) {
                console.error('Booking failed:', err);

            }
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-bold mb-6">Book a Car</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">Name:</label>
                    <input
                        type="text"
                        name="Name"
                        value={formData.Name}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded-lg"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded-lg"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">Phone Number:</label>
                    <input
                        type="number"
                        name="phoneNo"
                        value={formData.phoneNo}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded-lg"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">Start Date:</label>
                    <input
                        type="date"
                        name="startDate"
                        value={formData.startDate}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded-lg"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">End Date:</label>
                    <input
                        type="date"
                        name="endDate"
                        value={formData.endDate}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded-lg"
                        required
                    />
                </div>
                {error && <p className="text-red-500 mb-4">{error}</p>}
                {totalDays !== null && (
                    <p className="text-green-500 mb-4">Total Days of Rental: {totalDays} you want to book</p>
                )}
                <div className='flex items-center justify-around'>
                    <Link className='bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"' to="/">Cancel</Link>
                    <button
                        type="submit"
                        className=" bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
                    >
                        Book Now
                    </button>
                </div>
            </form>
        </div>
    );
};

export default BookingForm;
