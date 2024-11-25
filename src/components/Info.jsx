import { useEffect } from "react";
import civic from "../assets/home/civic.webp";
import tesla from "../assets/home/tesla.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";

const Info = () => {
  const navigate = useNavigate();
  const handleBooking = () => {
    navigate("/rent-car");
  };
  useEffect(() => {
    AOS.init({
      duration: 1000, // Default animation duration
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <div className="w-full bg-slate-200 py-10 px-4 sm:px-8">
      {/* Tesla Section */}
      <div
        className="flex flex-col sm:flex-row justify-center items-stretch sm:space-x-8 space-y-8 sm:space-y-0"
        data-aos="fade-right"
        data-aos-delay="600"
      >
        <div className="w-full sm:w-2/5">
          <img
            src={tesla}
            alt="tesla"
            className="w-full h-auto sm:h-full object-cover rounded-md"
          />
        </div>
        <div className="bg-white border-2 w-full sm:w-2/5 flex flex-col justify-between p-6 rounded-md">
          <h1 className="font-bold text-2xl sm:text-3xl text-center sm:text-left">
            Tesla Luxury
          </h1>
          <p className="py-4 text-justify sm:text-left">
            A 22-speaker, 960-watt audio system with Active Road Noise Reduction
            offers immersive listening and studio-grade sound quality. Instantly
            connect with multi-device Bluetooth. With front and rear trunks and
            fold-flat seats, you can fit your bike without taking the wheel
            off—and your luggage too.
          </p>
          <button
            onClick={handleBooking}
            className="rounded-md py-2 px-6 font-bold text-white bg-gradient-to-b from-red-800 to-gray-800 hover:bg-gradient-to-t transition duration-500 self-center sm:self-start"
          >
            More
          </button>
        </div>
      </div>

      {/* Civic Section */}
      <div
        className="flex flex-col sm:flex-row justify-center items-stretch sm:space-x-8 space-y-8 sm:space-y-0 mt-8"
        data-aos="fade-left"
        data-aos-delay="600"
      >
        <div className="bg-white border-2 w-full sm:w-2/5 flex flex-col justify-between p-6 rounded-md">
          <h1 className="font-bold text-2xl sm:text-3xl text-center sm:text-left">
            Honda Civic
          </h1>
          <p className="py-4 text-justify sm:text-left">
            The Honda Civic has 1 Diesel Engine and 1 Petrol Engine on offer.
            The Diesel engine is 1597 cc while the Petrol engine is 1799 cc. It
            is available with Manual & Automatic transmission. Depending upon
            the variant and fuel type, the Civic has a mileage of 16.5 to 26.8
            kmpl.
          </p>
          <button
            onClick={handleBooking}
            className="rounded-md py-2 px-6 font-bold text-white bg-gradient-to-b from-red-800 to-gray-800 hover:bg-gradient-to-t transition duration-500 self-center sm:self-start"
          >
            More
          </button>
        </div>
        <div className="w-full sm:w-2/5">
          <img
            src={civic}
            alt="civic"
            className="w-full h-auto sm:h-full object-cover rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Info;
