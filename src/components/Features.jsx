import { useEffect } from "react";
import { FiSlack } from "react-icons/fi";
import { IoIosPricetag } from "react-icons/io";
import { FaUserCheck } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const Features = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Default animation duration
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <div className="w-full bg-gray-900 py-10">
      {/* Container */}
      <div className="flex flex-col gap-8 w-11/12 max-w-6xl mx-auto">
        {/* Feature 1 */}
        <div
          className="w-full bg-gray-400 flex flex-col items-center text-center p-6 rounded-lg shadow-lg"
          data-aos="fade-right"
          data-aos-delay="500"
        >
          <FiSlack size={42} />
          <h1 className="font-bold text-lg sm:text-xl pt-2">Quality Features</h1>
          <p className="text-sm sm:text-base lg:text-lg pt-2">
            The importance of these must-have features can be so strong that it takes precedence over
            reliability, cost, brand loyalty or your better judgment; sure, the car has 200,000 miles and
            no service history.
          </p>
        </div>

        {/* Feature 2 */}
        <div
          className="w-full bg-red-600 flex flex-col items-center text-center p-6 rounded-lg shadow-lg"
          data-aos="fade-left"
          data-aos-delay="500"
        >
          <IoIosPricetag size={42} />
          <h1 className="font-bold text-lg sm:text-xl pt-2">Less Price</h1>
          <p className="text-sm sm:text-base lg:text-lg pt-2">
            Dropping a Budget car off is reasonably quick and easy. Customers say Budget cars are fairly clean. Our customers said Budget are reasonably easy to find.
          </p>
        </div>

        {/* Feature 3 */}
        <div
          className="w-full bg-gray-400 flex flex-col items-center text-center p-6 rounded-lg shadow-lg"
          data-aos="fade-right"
          data-aos-delay="500"
        >
          <FaUserCheck size={42} />
          <h1 className="font-bold text-lg sm:text-xl pt-2">Experience</h1>
          <p className="text-sm sm:text-base lg:text-lg pt-2">
            Car rental companies are in a transformative stage, and are looking to provide an experience that
            will place their customers first and maintain a long-term relationship with them.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
