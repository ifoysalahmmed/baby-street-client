import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import MyToysRow from "./MyToysRow";
import Swal from "sweetalert2";
import useTitle from "../../Hooks/useTitle";

const MyToys = () => {
  useTitle("My Toys");

  const { user } = useContext(AuthContext);

  const [toys, setToys] = useState([]);
  const [selectedValue, setSelectedValue] = useState("Ascending");

  useEffect(() => {
    fetch(
      `https://baby-street-server.vercel.app/myToys/${user?.email}?sort=${selectedValue}`
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setToys(data);
      });
  }, [user, selectedValue]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://baby-street-server.vercel.app/myToys/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount === 1) {
              Swal.fire(
                "Deleted!",
                "Your Toy Info has been deleted.",
                "success"
              );
              const remaining = toys.filter((toy) => toy._id !== id);
              setToys(remaining);
            }
          });
      }
    });
  };

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div className="mt-8">
      <div className="text-right">
        <select
          value={selectedValue}
          onChange={handleSelectChange}
          className="select w-full max-w-xs"
        >
          <option disabled defaultValue>
            Sort By
          </option>
          <option value="Ascending">Ascending</option>
          <option value="Descending">Descending</option>
        </select>
      </div>
      <div className="overflow-x-auto w-full rounded-md text-center mt-4">
        <table className="table-normal w-full ">
          <thead className="bg-cyan-400">
            <tr>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Rating</th>
              <th>Available quantity</th>
              <th>Detail Description</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody className="bg-cyan-200 text-black">
            {toys.map((toy) => (
              <MyToysRow
                key={toy._id}
                toy={toy}
                handleDelete={handleDelete}
              ></MyToysRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToys;
