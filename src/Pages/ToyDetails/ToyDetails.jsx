import { useLoaderData } from "react-router-dom";
import { Rating, ThinStar } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const ToyDetails = () => {
  const toy = useLoaderData();

  const {
    img,
    name,
    seller_name,
    seller_email,
    price,
    rating,
    quantity,
    description,
  } = toy || {};

  return (
    <div className="card lg:card-side bg-green-200 shadow-xl mt-12">
      <figure className="w-1/3">
        <img src={img} alt="Album" className="h-full" />
      </figure>
      <div className="card-body w-2/3">
        <h2 className="card-title text-blue-600 text-2xl font-bold">{name}</h2>
        <p className="text-lg font-semibold text-rose-500">
          Seller Name: {seller_name}
        </p>
        <p className="text-lg font-semibold text-rose-500">
          Seller Email: {seller_email}
        </p>
        <p className="text-lg font-semibold text-rose-500">Price: ${price}</p>
        <div className="flex-grow flex text-lg">
          <span className="text-lg font-semibold text-rose-500 pr-2">
            Rating:{" "}
          </span>
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
          <span className="text-lg font-semibold text-rose-500 pl-2">
            {rating}
          </span>
        </div>
        <p className="text-lg font-semibold text-rose-500">
          Available Quantity: {quantity}
        </p>
        <p className="text-black text-sm">{description}</p>
      </div>
    </div>
  );
};

export default ToyDetails;
