import Car from './components/Car'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Rent from './pages/Rent'
import Header from './components/Header'
import CarForm from './pages/AddCar'
import BookingForm from './pages/Booking'
import EmailForm from './pages/CheckBooking'
import RentalSuccess from './pages/success'

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/car/:id' element={<Car />} />
          <Route path='/rent' element={<Rent />} />
          <Route path='/add' element={<CarForm />} />
          <Route path='/book/:carId' element={<BookingForm />} />
          <Route path='/bookings' element={<EmailForm />} />
          <Route path='/success-rent' element={<RentalSuccess />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
