import {useEffect} from 'react';
import profile from '../assets/home/default.png';
import AOS from "aos";
import "aos/dist/aos.css";

const Review = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000, // Default animation duration
      once: true, // Whether animation should happen only once
    });
  }, []);
  return (
    <div className="min-h-screen w-full bg-gray-900 pt-8">
      <div className="flex flex-col items-center">
        <h1 className="font-bold text-4xl text-center text-white" data-aos="fade-up"
        data-aos-delay="400">
          What Our Client Say About Us...!
        </h1>
        <p className="pt-8 text-lg text-center mx-4 text-white" data-aos="fade-up"
        data-aos-delay="500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta illum
          tempora magnam laudantium impedit aperiam quae!
        </p>
      </div>

      <div className="flex flex-wrap justify-center mt-12 gap-8 px-4" data-aos="fade-up"
        data-aos-delay="600">
        {/* Card 1 */}
        <div className="h-auto w-full sm:w-96 flex flex-col items-center p-8 rounded-3xl shadow-xl bg-gradient-to-b from-red-800 to-gray-800 text-white hover:text-black hover:scale-105 duration-200">
          <img
            src={profile}
            alt="profile-default"
            className="rounded-full h-20"
          />
          <p className="pt-4 text-xl">⭐⭐⭐⭐</p>
          <p className="mx-6 pt-6 text-lg text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor
            provident repudiandae optio?
          </p>
          <h1 className="font-bold text-2xl pt-6 underline">Ahmad</h1>
        </div>

        {/* Card 2 */}
        <div className="h-auto w-full sm:w-96 flex flex-col items-center p-8 rounded-3xl shadow-xl bg-gradient-to-b from-red-800 to-gray-800 text-white hover:text-black hover:scale-105 duration-200" >
        
          <img
            src={profile}
            alt="profile-default"
            className="rounded-full h-20"
          />
          <p className="pt-4 text-xl">⭐⭐⭐</p>
          <p className="mx-6 pt-6 text-lg text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor
            provident repudiandae optio?
          </p>
          <h1 className="font-bold text-2xl pt-6 underline">Bilal</h1>
        </div>

        {/* Card 3 */}
        <div className="h-auto w-full sm:w-96 flex flex-col items-center p-8 rounded-3xl shadow-xl bg-gradient-to-b from-red-800 to-gray-800 text-white hover:text-black hover:scale-105 duration-200">
          <img
            src={profile}
            alt="profile-default"
            className="rounded-full h-20"
          />
          <p className="pt-4 text-xl">⭐⭐⭐⭐</p>
          <p className="mx-6 pt-6 text-lg text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor
            provident repudiandae optio?
          </p>
          <h1 className="font-bold text-2xl pt-6 underline">Ali</h1>
        </div>
      </div>
    </div>
  );
};

export default Review;
