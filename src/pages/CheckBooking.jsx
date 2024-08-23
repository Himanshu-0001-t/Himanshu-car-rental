import React, { useState } from 'react';
import axios from 'axios';
import { toast } from "react-hot-toast"
import BookingsTable from '../components/BookingsTable';

const EmailForm = () => {
    const [email, setEmail] = useState('');
    const [responseMessage, setResponseMessage] = useState('');
    const [error, setError] = useState('');
    const [booking, setBooking] = useState(null)
    const [carImage, setCarImage] = useState(null)

    const handleChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setResponseMessage('');

        try {
            const response = await axios.post('https://car-rental-backend-g8cq.onrender.com/api/show', { email });

            if (response.data.success) {
                setResponseMessage(response.data.message);
                setBooking(response.data.bookings)
                setCarImage(response.data.carImages)
            } else {
                setResponseMessage(response.data.message)
                toast.error(response.data.message)
            }
        } catch (err) {
            setError(err.response.data.error);
        }
    };

    return (
        <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-bold mb-6">Enter Your Email</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded-lg"
                        required
                    />
                </div>
                {error && <p className="text-red-500 mb-4">{error}</p>}
                {responseMessage && <p className="text-greeen-500 mb-4">{responseMessage}</p>}
                <button
                    type="submit"
                    className="bg-blue-500 text-white py-2 px-14 my-3 m-auto block rounded-lg hover:bg-blue-600"
                >
                    Submit
                </button>
            </form>

            {booking ? <BookingsTable bookings={booking} carImage={carImage} /> : ""}

        </div>
    );
};

export default EmailForm;
