import { useEffect, useState } from "react";
import AllToysRow from "./AllToysRow";

const AllToys = () => {
  const [allToys, setAllToys] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/allToys")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAllToys(data);
      });
  }, []);

  return (
    <div className="overflow-x-auto w-full rounded-md text-center mt-12">
      <table className="table-normal w-full ">
        <thead className="bg-green-400">
          <th></th>
          <th>Seller Name</th>
          <th>Toy Name</th>
          <th>Category</th>
          <th>Price</th>
          <th>Available Quantity</th>
          <th></th>
        </thead>
        <tbody className="bg-green-200 text-black">
          {allToys?.map((toy) => (
            <AllToysRow key={toy._id} toy={toy}></AllToysRow>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllToys;
