import React, { useState } from 'react';
import axios from "axios"
import { toast } from "react-hot-toast"

const CarForm = () => {
    const [formData, setFormData] = useState({
        carName: '',
        transmission: '',
        fuel: '',
        carType: '',
        carColor: '',
        price: '',
        stock: '',
        brand: '',
        seat: '',
    });

    const [carImage, setCarImage] = useState(null)
    const [isLoding, setIsLoding] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleImageChange = (e) => {
        setCarImage(e.target.files[0])
    };

    const data = new FormData();
    data.append('carName', formData.carName);
    data.append('transmission', formData.transmission);
    data.append('fuel', formData.fuel);
    data.append('Image', carImage);
    data.append('carType', formData.carType);
    data.append('carColor', formData.carColor);
    data.append('price', formData.price);
    data.append('stock', formData.stock);
    data.append('brand', formData.brand);
    data.append('seat', formData.seat);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setIsLoding(true)
            const response = await axios.post("https://car-rental-backend-g8cq.onrender.com/api/car", formData)

            if (response.data.success) {
                toast.success(response.data.message)
            } else {
                toast.error(response.data.message)
            }

        } catch (error) {
            console.error('Error submitting data:', error);
            toast.error('Error submitting data.');
        } finally {
            setIsLoding(false)
        }
    };

    return (
        <div className="lg:max-w-4xl m-auto px-10 my-10 text-white">
            <form onSubmit={handleSubmit} className="space-y-6" encType="multipart/form-data" >
                <h1 className='text-2xl text-center font-bold'>Add car </h1>
                <div>
                    <label htmlFor="carName" className="block text-sm font-medium text-gray-200">
                        carName
                    </label>
                    <input
                        type="text"
                        name="carName"
                        id="carName"
                        value={formData.carName}
                        onChange={handleChange}
                        className="mt-1 block w-full px-3 py-2 border text-black border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        required
                        placeholder='car name'
                    />
                </div>

                <div>
                    <label htmlFor="carType" className="block text-sm font-medium text-gray-200">
                        carType
                    </label>
                    <input
                        type="text"
                        name="carType"
                        id="carType"
                        value={formData.carType}
                        onChange={handleChange}
                        className="mt-1 block w-full px-3 py-2 border text-black border-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        required
                        placeholder='car type'

                    />
                </div>

                <div>
                    <label htmlFor="carColor" className="block text-sm font-medium text-gray-200">
                        carColor
                    </label>
                    <input
                        type="text"
                        name="carColor"
                        id="carColor"
                        value={formData.carColor}
                        onChange={handleChange}
                        className="mt-1 block w-full px-3 py-2 border text-black border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        required
                        placeholder='car color'
                    />
                </div>

                <div>
                    <label htmlFor="price" className="block text-sm font-medium text-gray-200">
                        price
                    </label>
                    <input
                        type="number"
                        name="price"
                        id="price"
                        value={formData.price}
                        onChange={handleChange}
                        className="mt-1 block w-full px-3 py-2 border text-black border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        required
                        placeholder='car price'
                    />
                </div>

                <div>
                    <label htmlFor="stock" className="block text-sm font-medium text-gray-200">
                        stock
                    </label>
                    <input
                        type="number"
                        name="stock"
                        id="stock"
                        value={formData.stock}
                        onChange={handleChange}
                        className="mt-1 block w-full px-3 py-2 border text-black border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        required
                        placeholder='car stock'
                    />
                </div>

                <div>
                    <label htmlFor="brand" className="block text-sm font-medium text-gray-200">
                        brand
                    </label>
                    <select
                        name="brand"
                        id="brand"
                        value={formData.brand}
                        onChange={handleChange}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 text-black rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        required
                    >
                        <option value="">Select brand</option>
                        <option value="Mahindra">Mahindra</option>
                        <option value="Maruti suzuki">Maruti suzuki</option>
                        <option value="Honda">Honda</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="seat" className="block text-sm font-medium text-gray-200">
                        seat
                    </label>
                    <input
                        type="number"
                        name="seat"
                        id="seat"
                        value={formData.seat}
                        onChange={handleChange}
                        className="mt-1 block w-full px-3 py-2 border text-black border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        required
                        placeholder='car seat'
                    />
                </div>

                <div>
                    <label htmlFor="transmission" className="block text-sm font-medium text-gray-200">
                        Transmission
                    </label>
                    <select
                        name="transmission"
                        id="transmission"
                        value={formData.transmission}
                        onChange={handleChange}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 text-black rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        required
                    >
                        <option value="">Select Transmission</option>
                        <option value="manual">Manual</option>
                        <option value="automatic">Automatic</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="fuel" className="block text-sm font-medium text-gray-200">
                        Fuel
                    </label>
                    <select
                        name="fuel"
                        id="fuel"
                        value={formData.fuel}
                        onChange={handleChange}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 text-black rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        required
                    >
                        <option value="">Select Fuel Type</option>
                        <option value="petrol">Petrol</option>
                        <option value="diesel">Diesel</option>
                        <option value="CNG">CNG</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="image" className="block text-sm font-medium text-gray-700">
                        Upload Image
                    </label>
                    <input
                        type="file"
                        name="Image"
                        id="Image"
                        onChange={handleImageChange}
                        className="mt-1 block p-2 w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
                        required
                    />
                </div>

                <div>
                    <button
                        type="submit"
                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        {isLoding ? "Adding...." : "Submit"}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CarForm;
