import { Link } from "react-router-dom";

const Toy = ({ toy }) => {
  const { _id, img, name, price, rating } = toy || {};

  return (
    <div className="card card-compact w-full bg-base-100 shadow-xl">
      <figure className="px-6 pt-6 h-full">
        <img src={img} alt="" className="rounded-xl h-full" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p className="text-left">Price: ${price}</p>
        <p className="text-left">Rating: {rating}</p>
        <div className="card-actions justify-end">
          <Link to={`toyDetails/${_id}`}>
            <button className="btn btn-primary">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Toy;
