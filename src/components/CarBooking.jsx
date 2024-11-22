import { useState,useEffect } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { FaGasPump, FaCar, FaUsers, FaSuitcase } from 'react-icons/fa';
import { differenceInDays } from 'date-fns';
import { useNavigate,useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const CarBooking = () => {

 const location = useLocation();
  const navigate = useNavigate();
  const { car } = location.state || {};

 

  const handleBackToCar = () => {
    alert('Booking Done!');
    setTimeout(() => {
      navigate('/');
    }, 1500); // 2000 milliseconds = 2 seconds
  };
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    calculatePrice(startDate, endDate);
  }, [startDate, endDate]);

  const calculatePrice = () => {
    if (startDate && endDate && typeof car.price === 'number' && car.price > 0) {
      const days = Math.max(0, differenceInDays(endDate, startDate) + 1); // Ensure no negative days
      const calculatedPrice = days * car.price;
      setTotalPrice(calculatedPrice);
    } else {
      setTotalPrice(0); // Default to 0 if inputs are invalid
    }
  };


  const handleStartDateChange = (date) => {
    setStartDate(date);
    if (endDate) calculatePrice(date, endDate);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
    if (startDate) calculatePrice(startDate, date);
  };

  return (
    <div className="min-h-screen  py-12 px-4 sm:px-6 lg:px-8 mt-24 w-full">
        <Navbar/>
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Car Details Section */}
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img
              className="h-48 w-full ml-4 rounded-xl object-cover md:h-full md:w-96"
              src={car.src}
              alt={car.name}
            />
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              Premium Car
            </div>
            <h1 className="mt-2 text-3xl font-bold text-gray-900">{car.name}</h1>
            
            {/* Car Specifications */}
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-2">
                <FaGasPump className="text-gray-500" />
                <span>Petrol</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaCar className="text-gray-500" />
                <span>Automatic</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaUsers className="text-gray-500" />
                <span>5 Seats</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaSuitcase className="text-gray-500" />
                <span>3 Luggage</span>
              </div>
            </div>
          </div>
        </div>

        {/* Booking Section */}
        <div className="p-8 bg-gray-50">
          <h2 className="text-2xl font-semibold mb-6">Book Your Car</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Date Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Pick-up Date
              </label>
              <DatePicker
                selected={startDate}
                onChange={handleStartDateChange}
                selectsStart
                startDate={startDate}
                endDate={endDate}
                minDate={new Date()}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                placeholderText="Select start date"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Return Date
              </label>
              <DatePicker
                selected={endDate}
                onChange={handleEndDateChange}
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                minDate={startDate}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                placeholderText="Select end date"
              />
            </div>
          </div>

          {/* Price Calculation */}
          <div className="mt-8 p-6 bg-white rounded-lg shadow">
            <div className="flex justify-between items-center mb-4">
              <span className="text-gray-600">Daily Rate:</span>
              <span className="font-semibold">
                {car.price}/day
                
                </span>
            </div>
            {startDate && endDate && (
              <>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-gray-600">Duration:</span>
                  <span className="font-semibold">
                    {differenceInDays(endDate, startDate) + 1} days
                  </span>
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold">Total Price:</span>
                    <span className="text-2xl font-bold text-indigo-600">
                    ${totalPrice.toFixed(2)}
                    </span>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Book Now Button */}
          <button
            className="mt-6 w-full bg-indigo-600 text-white py-3 px-4 rounded-lg hover:bg-indigo-700 transition duration-200 font-semibold"
            onClick={handleBackToCar}
          >
            Book Now
          </button>
        </div>
      </div>
      <div className='w-screen -m-8 -mb-10 mt-10'>
      <Footer/>
      </div>
    </div>
  );
};

export default CarBooking;