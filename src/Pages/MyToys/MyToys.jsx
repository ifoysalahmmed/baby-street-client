import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import MyToysRow from "./MyToysRow";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/myToys/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setToys(data);
      });
  }, [user]);

  const handleDelete = (id) => {
    console.log(id);
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
