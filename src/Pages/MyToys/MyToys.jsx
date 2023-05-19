import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import MyToysRow from "./MyToysRow";
import Swal from "sweetalert2";
import useTitle from "../../Hooks/useTitle";

const MyToys = () => {
  useTitle("My Toys");

  const { user } = useContext(AuthContext);
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch(`https://baby-street-server.vercel.app/myToys/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setToys(data);
      });
  }, [user]);

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

  return (
    <div className="overflow-x-auto w-full rounded-md text-center mt-12">
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
  );
};

export default MyToys;
