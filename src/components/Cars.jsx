import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import axios from "axios"
import { toast } from 'react-hot-toast'
import ProductSkeleton from './Skeleton'

function Cars() {
    const [cars, setCars] = useState([])
    const [isLoding, setIsLoding] = useState(false)

    useEffect(() => {
        const feachCar = async () => {
            try {
                setIsLoding(true)
                let response = await axios.get("https://car-rental-backend-g8cq.onrender.com/api/car?limit=8")

                if (response.data.success) {
                    setCars(response.data.cars)
                } else {
                    toast.error(response.data.message)
                }

            } catch (error) {
                console.log(error)
            } finally {
                setIsLoding(false)
            }
        }
        feachCar()
    }, [])

    return (
        <div className="container px-5 mx-auto pb-10">
            <div className="flex flex-wrap">

                {isLoding ? <ProductSkeleton /> : <>
                    {cars.map((car) => {
                        return (
                            <Link to={`/car/${car._id}`} key={car._id} className="lg:w-1/4 md:w-1/2 p-4 w-full">
                                <div className="block relative h-48 rounded overflow-hidden bg-gray-900">
                                    <img alt="car" className="object-cover object-center w-full h-full block" src={car.carImage} />
                                </div>
                                <h3 className="text-gray-500 title-font mb-1">{car.brand} {car.carName}</h3>
                                <h2 className="text-white title-font text-lg font-medium">{car.transmission}</h2>
                                <h2 className="text-white title-font text-sm font-medium">{car.fuel} </h2>
                                <p className="mt-1">{car.price}</p>
                            </Link>
                        )
                    })}
                </>
                }
            </div>
        </div>
    )
}

export default Cars