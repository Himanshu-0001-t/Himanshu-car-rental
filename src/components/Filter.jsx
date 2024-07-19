import React, { useState } from 'react';

const CarFilter = ({ onFilter, makes, transmissions, fuels, types, prices }) => {

    const [filters, setFilters] = useState({
        make: '',
        transmission: '',
        fuel: '',
        type: '',
        price: ''

    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFilters({
            ...filters,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onFilter(filters);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4 p-4 border rounded-md bg-white shadow-lg">
            <div>
                <label htmlFor="make" className="block text-sm font-medium text-gray-700">Make</label>
                <select
                    name="make"
                    id="make"
                    value={filters.make}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                    <option value="">Any</option>
                    {makes.map((make) => (
                        <option key={make} value={make}>{make}</option>
                    ))}
                </select>
            </div>

            <div>
                <label htmlFor="types" className="block text-sm font-medium text-gray-700">Types</label>
                <select
                    name="type"
                    id="type"
                    value={filters.type}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                    <option value="">Any</option>
                    {types.map((type) => (
                        <option key={type} value={type}>{type}</option>
                    ))}
                </select>
            </div>

            <div>
                <label htmlFor="price" className="block text-sm font-medium text-gray-700">prices</label>
                <select
                    name="price"
                    id="price"
                    value={filters.price}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                    <option value="">Any</option>
                    {prices.map((price) => (
                        <option key={price} value={price}>{price} and below</option>
                    ))}
                </select>
            </div>

            <div>
                <label htmlFor="transmission" className="block text-sm font-medium text-gray-700">Transmission</label>
                <select
                    name="transmission"
                    id="transmission"
                    value={filters.transmission}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                    <option value="">Any</option>
                    {transmissions.map((transmission) => (
                        <option key={transmission} value={transmission}>{transmission}</option>
                    ))}
                </select>
            </div>
            <div>
                <label htmlFor="fuel" className="block text-sm font-medium text-gray-700">Fuel</label>
                <select
                    name="fuel"
                    id="fuel"
                    value={filters.fuel}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                    <option value="">Any</option>
                    {fuels.map((fuel) => (
                        <option key={fuel} value={fuel}>{fuel}</option>
                    ))}
                </select>
            </div>
            <div>
                <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Apply Filters
                </button>
            </div>
        </form>
    );
};

export default CarFilter;
