import { Rating, ThinStar } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider";
import Swal from "sweetalert2";

const Toy = ({ toy }) => {
  const { user } = useContext(AuthContext);

  const handleViewDetails = () => {
    if (!user?.email) {
      Swal.fire({
        icon: "info",
        title: "You have to log in first to view details",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  const { _id, img, name, price, rating } = toy || {};

  return (
    <div className="card card-compact w-full bg-base-100 shadow-xl">
      <figure className="px-6 pt-6 h-full">
        <img src={img} alt="" className="rounded-xl h-full" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-black">{name}</h2>
        <p className="text-left text-lg font-semibold text-red-600">
          Price: <span className="font-bold">${price}</span>
        </p>
        <div className="flex justify-between items-center">
          <div className="flex-grow flex text-lg">
            <Rating
              style={{ maxWidth: 100 }}
              value={Math.round(rating || 0)}
              itemStyles={{
                itemShapes: ThinStar,
                activeFillColor: "#ffb700",
                inactiveFillColor: "#fbf1a9",
              }}
              readOnly
            />
            <span className="pl-2 font-semibold">{rating}</span>
          </div>
          <div>
            <Link to={`toyDetails/${_id}`}>
              <button
                onClick={handleViewDetails}
                className="btn btn-primary btn-outline"
              >
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Toy;
