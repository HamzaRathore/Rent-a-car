import {useState} from 'react';
import { AiFillStar, AiOutlineHeart } from 'react-icons/ai';
import { BsPeople } from 'react-icons/bs';
import { GiGearStickPattern } from 'react-icons/gi';
import { FaGasPump } from 'react-icons/fa';
import { FiSearch } from 'react-icons/fi';
import { IoCarOutline } from 'react-icons/io5';
import { Link,useNavigate } from 'react-router-dom';
import rent1 from '../assets/cars/rent1.jpeg';
import rent2 from '../assets/cars/rent2.jpg';
import rent3 from '../assets/cars/rent3.jpg';
import rent4 from '../assets/cars/rent4.jpg';
import rent5 from '../assets/cars/rent5.jpg';
import rent6 from '../assets/cars/rent6.jpg';
import rent7 from '../assets/cars/rent7.jpeg';
import rent8 from '../assets/cars/rent8.jpeg';
import rent9 from '../assets/cars/rent9.webp';
import rent10 from '../assets/cars/rent11.jpg';

const CarCard = () => {

  const navigate=useNavigate();
  const handleClick=(car)=>{
    navigate('/car-booking',{state:{car}});
  }

    const [searchQuery, setSearchQuery] = useState('');
  const carDetail = [
    { id: 1, src: rent1, name: 'Toyota Corolla', price: 18, desc: 'White Toyota Corolla 2020' },
    { id: 2, src: rent2, name: 'Honda Civic', price: 20, desc: 'Black Honda Civic X' },
    { id: 3, src: rent3, name: 'Honda City', price: 15, desc: 'Gray Honda City 2010' },
    { id: 4, src: rent4, name: 'Suzuki Cultus', price: 10, desc: 'White Cultus Automatic' },
    { id: 5, src: rent5, name: 'Wagon R', price: 10, desc: 'Gray Wagon R' },
    { id: 6, src: rent6, name: 'Alsvin', price: 18, desc: 'Red Alsvin Automatic' },
    { id: 7, src: rent7, name: 'Suzuki Cultus', price: 8, desc: 'White Suzuki Cultus' },
    { id: 8, src: rent8, name: 'Suzuki Cultus', price: 8, desc: 'Gray Suzuki Cultus' },
    { id: 9, src: rent9, name: 'Honda Civic', price: 16, desc: 'Black Honda Civic Reborn' },
    { id: 10, src: rent10, name: 'Honda Civic', price: 16, desc: 'Black Honda Civic Reborn' },
  ];

  const filteredCars = carDetail.filter((car) =>
    car.name.toLowerCase().includes(searchQuery.toLowerCase())

  );

  return (
    <div className="w-full min-h-screen pt-20 mt-20 px-4">
      <div className="w-full flex flex-col items-center">
        <h1 className="text-3xl md:text-5xl font-bold text-center mt-8">Book Your Car From Here</h1>
        <div className="flex flex-col sm:flex-row items-center mt-8 space-y-4 sm:space-y-0 sm:space-x-6">
          <label className="text-xl md:text-2xl">Search Here</label>
          <div className="relative">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full sm:w-80 border-2 shadow-md h-10 px-10 py-2 rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-red-600"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <FiSearch className="absolute top-2.5 left-3 text-gray-500 text-xl" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-12 mb-8">
        {filteredCars.map((car) => (
          <div className="bg-white rounded-lg shadow-md p-4" key={car.id}>
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-2">
                <div className="flex items-center bg-gray-100 rounded-full px-2 py-1">
                  <AiFillStar className="text-yellow-400" />
                  <span className="text-sm">4.7</span>
                  <span className="text-gray-400 text-sm">(109)</span>
                </div>
                <span className="bg-green-100 text-green-600 text-sm px-2 py-1 rounded-full">
                  Available now
                </span>
              </div>
              <AiOutlineHeart className="text-gray-400 text-xl cursor-pointer" />
            </div>

            <div className="mb-4">
              <img
                src={car.src}
                alt={car.name}
                className="w-full h-40 object-cover rounded-md hover:scale-105 transition-transform cursor-pointer"
                onClick={() => handleClick(car)}
              />
            </div>

            <div className="space-y-2">
              <p className="text-gray-400 uppercase text-sm">{car.name}</p>
              <h2 className="text-xl font-semibold">{car.desc}</h2>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold">${car.price}</span>
                <span className="text-gray-400">/ hour</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

  );
};

export default CarCard;
