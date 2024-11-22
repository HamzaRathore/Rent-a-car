import { useEffect } from "react";
import { useNavigate  } from "react-router-dom";
import car from "../assets/car.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Main = () => {

  const navigate=useNavigate();
  const handleCar=()=>{
    navigate('/rent-car');
  }

  useEffect(() => {
    AOS.init({
      duration: 1000, // Default animation duration
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <div className="w-full bg-black h-screen pt-20 font-raleway">
      <div className="container mx-auto min-h-[620px] flex px-4 lg:px-16 pt-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
          {/* Image Section */}
          <div
            data-aos="zoom-in"
            className="order-1 sm:order-2 flex justify-center"
          >
            <img
              src={car}
              alt="Car"
              className="sm:scale-125 max-h-[600px] drop-shadow-lg"
            />
          </div>

          {/* Content Section */}
          <div className="space-y-5 order-2 sm:order-1 text-center sm:text-left">
            <p
              data-aos="fade-up"
              className="text-white text-2xl font-serif"
            >
              Effortless
            </p>
            <h1
              data-aos="fade-up"
              data-aos-delay="600"
              className="text-4xl sm:text-5xl lg:text-7xl font-semibold font-serif text-white"
            >
              Car Rental
            </h1>
            <p
              data-aos="fade-up"
              data-aos-delay="1000"
              className="text-gray-600 font-raleway"
              
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              veritatis explicabo quibusdam quae reprehenderit ab.
            </p>
            <button
            onClick={handleCar}
              data-aos="fade-up"
              data-aos-delay="1500"
              className="rounded-md bg-white hover: transition duration-500 py-2 px-6 font-bold text-black bg-gradient-to-b from-gray-800 to to-white hover:hover:bg-gradient-to-t from-gray-750 to-red-750 "
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
