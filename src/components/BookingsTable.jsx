import axios from 'axios';
import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import DeleteConfirmation from "./Delete.jsx"

const BookingsTable = ({ bookings, carImage }) => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [bookingId, setBookingId] = useState(null);


    const handleDelete = () => {
        handleCancle(bookingId)
        setIsModalOpen(false);
    };


    const handleModal = (id) => {
        setBookingId(id)
        setIsModalOpen(true)
    }

    const navigate = useNavigate()

    const handleCancle = async (bookingId) => {

        try {
            let response = await axios.post("https://car-rental-backend-g8cq.onrender.com/api/cancel", { bookingId })

            if (response.data.success) {
                toast.success(response.data.message)
                navigate('/')

            } else {
                toast.error(response.data.message)
            }

        } catch (error) {
            console.log(error)
        }

    }

    return (
        <>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200">
                    <thead>
                        <tr>
                            <th className="px-4 py-2 border-b">Car</th>
                            <th className="px-4 py-2 border-b">Start Date</th>
                            <th className="px-4 py-2 border-b">End Date</th>
                            <th className="px-4 py-2 border-b">Total Days</th>
                            <th className="px-4 py-2 border-b">Total</th>
                            <th className="px-4 py-2 border-b">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookings.length > 0 ? (
                            bookings.map((booking, index) => (
                                <tr key={index} className="border-t">
                                    <td className="border-b h-28 w-40 lg:w-56 lg:h-40 block">
                                        <Link to={`/${booking.carId}`}>
                                            <img
                                                src={carImage[index]}
                                                alt="carImage"
                                                className="w-full h-full object-cover"
                                            />
                                        </Link>
                                    </td>
                                    <td className="px-4 py-2 border-b">
                                        {new Date(booking.startDate).toLocaleDateString()}
                                    </td>
                                    <td className="px-4 py-2 border-b">
                                        {new Date(booking.endDate).toLocaleDateString()}
                                    </td>
                                    <td className="px-4 py-2 border-b">
                                        {Math.ceil((new Date(booking.endDate) - new Date(booking.startDate)) / (1000 * 60 * 60 * 24))}
                                    </td>
                                    <td className="px-4 py-2 border-b">{booking.total}</td>
                                    <td className="px-4 py-2 border-b">
                                        <button
                                            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                                            onClick={() => handleModal(booking._id)}
                                        >
                                            Cancel
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="6" className="text-center py-4">No bookings found.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            <DeleteConfirmation
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onDelete={handleDelete}
            />

        </>

    );
};

export default BookingsTable;
