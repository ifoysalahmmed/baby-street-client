import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import Swal from "sweetalert2";

const AllToysRow = ({ toy }) => {
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

  const { _id, seller_name, name, sub_category, price, quantity } = toy || {};

  return (
    <tr>
      <td>{seller_name}</td>
      <td>{name}</td>
      <td>{sub_category}</td>
      <td>${price}</td>
      <td>{quantity}</td>
      <th>
        <Link to={`/toyDetails/${_id}`}>
          <button onClick={handleViewDetails} className="btn btn-info btn-md">
            details
          </button>
        </Link>
      </th>
    </tr>
  );
};

export default AllToysRow;
