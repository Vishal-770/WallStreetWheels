// pages/CarDetail.js
import { useParams, useNavigate, NavLink } from "react-router-dom";
import luxuryCars from "../data/data";

const CarDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const car = luxuryCars.find((car) => car.id === parseInt(id));

  if (!car) {
    navigate("/not-found");
    return null;
  }

  return (
    <div className="min-h-screen bg-black pt-25 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="mb-8 flex items-center text-white hover:text-gray-300 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
              clipRule="evenodd"
            />
          </svg>
          Back to Gallery
        </button>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Image Section */}
          <div className="relative">
            <img
              src={`/${car.imageUrl}`}
              alt={`${car.make} ${car.model}`}
              className="w-full h-auto rounded-lg object-cover"
            />
          </div>

          {/* Details Section */}
          <div className="text-white">
            <h1 className="text-3xl sm:text-4xl font-bold mb-2">
              {car.make} {car.model}
            </h1>

            <p className="text-xl text-gray-400 mb-6">
              {car.year} • {car.transmission}
            </p>

            <div className="mb-8">
              <p className="text-4xl font-bold mb-4">
                ${car.price.toLocaleString()}
              </p>
              <NavLink to={"/contact"}>
                <button className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                  Contact Dealer
                </button>
              </NavLink>
            </div>

            {/* Specifications Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-gray-900 p-4 rounded-lg">
                <p className="text-gray-400 text-sm">Horsepower</p>
                <p className="text-2xl font-bold">{car.horsepower} HP</p>
              </div>

              <div className="bg-gray-900 p-4 rounded-lg">
                <p className="text-gray-400 text-sm">Acceleration</p>
                <p className="text-2xl font-bold">{car.acceleration}s (0-60)</p>
              </div>

              <div className="bg-gray-900 p-4 rounded-lg">
                <p className="text-gray-400 text-sm">Transmission</p>
                <p className="text-2xl font-bold">{car.transmission}</p>
              </div>

              <div className="bg-gray-900 p-4 rounded-lg">
                <p className="text-gray-400 text-sm">Drivetrain</p>
                <p className="text-2xl font-bold">{car.drivetrain}</p>
              </div>
            </div>

            {/* Description */}
            <div>
              <h3 className="text-xl font-bold mb-4">Vehicle Details</h3>
              <p className="text-gray-300 leading-relaxed">{car.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetail;
