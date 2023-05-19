import { Link } from "react-router-dom";

const AllToysRow = ({ toy }) => {
  const { _id, seller_name, name, sub_category, price, quantity } = toy || {};
  return (
    <tr>
      <td>{seller_name}</td>
      <td>{name}</td>
      <td>{sub_category}</td>
      <td>{price}</td>
      <td>{quantity}</td>
      <th>
        <Link to={`/toyDetails/${_id}`}>
          <button className="btn btn-info btn-md">details</button>
        </Link>
      </th>
    </tr>
  );
};

export default AllToysRow;
