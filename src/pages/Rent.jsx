import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { toast } from "react-hot-toast"
import CarFilter from '../components/Filter';
import { Link } from 'react-router-dom';
function Rent() {

    const makes = ['Toyota', 'Honda', 'Renault', 'Ford', 'Mahindra', 'Maruti Suzuki', 'TATA'];
    const transmissions = ['manual', 'automatic'];
    const fuels = ['petrol', 'diesel', 'cng'];
    const types = ['SUV', 'Hatchback', 'Sedan'];
    const prices = [1000, 1500, 2000, 2500, 3000];
    const [isHide, setIsHide] = useState(false)
    const [cars, setCars] = useState([])

    const feachCar = async (query) => {

        try {
            let response = await axios.get(`https://car-rental-backend-g8cq.onrender.com/api/car${query ? `${query}` : ""}`)

            if (response.data.success) {
                setCars(response.data.cars)
                setIsHide(true)
            } else {
                setCars([])
                toast.error(response.data.message)
            }

        } catch (error) {
            console.log(error.message)
        }
    }

    const [filteredCars, setFilteredCars] = useState([]);

    const handleFilter = (filters) => {

        let fuel = filters.fuel
        let transmission = filters.transmission
        let price = filters.price
        let brand = filters.make
        let type = filters.type

        let query = ""

        if (fuel) {
            if (query.length == 0) {
                query += `?fuel=${fuel}`
            } else {
                query += `&fuel=${fuel}`
            }
        }

        if (transmission) {
            if (query.length == 0) {
                query += `?transmission=${transmission}`
            } else {
                query += `&transmission=${transmission}`
            }
        }

        if (price) {
            if (query.length == 0) {
                query += `?price=${price}`
            } else {
                query += `&price=${price}`
            }
        }

        if (brand) {
            if (query.length == 0) {
                query += `?brand=${brand}`
            } else {
                query += `&brand=${brand}`
            }
        }

        if (type) {
            if (query.length == 0) {
                query += `?type=${type}`
            } else {
                query += `&type=${type}`
            }
        }

        try {
            feachCar(query)

        } catch (error) {
            console.log(error)
        }
    };

    const toggleFilter = () => {
        setIsHide((prev) => !prev)
    }

    useEffect(() => {
        feachCar()
    }, [])

    return (
        <section className="text-gray-600 body-font bg-gray-900 min-h-screen flex">

            <div className="px-5 py-24 w-full">

                <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
                    {cars.map((car) => {
                        return (
                            <Link to={`/${car._id}`} key={car._id} className="p-4 w-full">
                                <div className="block relative h-48 rounded overflow-hidden">
                                    <img alt="car" className="object-cover object-center w-full h-full block" src={car.carImage} />
                                </div>
                                <div className="mt-4">
                                    <h3 className="text-gray-300 tracking-widest title-font mb-1">{car.brand} {car.carName}</h3>
                                    <h3 className="text-gray-300 tracking-widest title-font mb-1">{car.fuel}</h3>
                                    <h3 className="text-gray-300 tracking-widest title-font mb-1">{car.transmission}</h3>
                                    <h2 className="text-gray-300 title-font text-lg font-medium">{car.price} Rs/day</h2>

                                </div>
                            </Link>

                        )
                    })}
                </div>

            </div>

            <div className="absolute right-0 w-72 p-4">
                <h1 className="text-2xl font-bold mb-4 text-white cursor-pointer text-center bg-indigo-700 py-1 rounded-md" onClick={toggleFilter}>Filter's</h1>
                <div className={`${isHide ? 'hidden' : ""}`}>

                    <CarFilter
                        onFilter={handleFilter}
                        makes={makes}
                        transmissions={transmissions}
                        fuels={fuels}
                        types={types}
                        prices={prices}
                    />

                </div>
            </div>
        </section >
    )
}

export default Rent