import { useEffect, useState } from "react";
import AllToysRow from "./AllToysRow";

const AllToys = () => {
  const [allToys, setAllToys] = useState([]);
  const [searchName, setSearchName] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/allToys")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setAllToys(data);
      });
  }, []);

  const handleSearch = () => {
    fetch(`http://localhost:5000/getToysByName/${searchName}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setAllToys(data);
      });
  };

  return (
    <div>
      <div className="sm:text-center mt-6 md:flex items-center justify-center gap-4">
        <input
          onChange={(e) => setSearchName(e.target.value)}
          type="text"
          placeholder="Toy Name"
          className="input w-full max-w-xs"
        />
        <button onClick={handleSearch} className="btn btn-success">
          Search
        </button>
      </div>
      <div className="overflow-x-auto w-full rounded-md text-center mt-6">
        <table className="table-normal w-full ">
          <thead className="bg-green-400">
            <tr>
              <th>Seller Name</th>
              <th>Toy Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Available Quantity</th>
              <th></th>
            </tr>
          </thead>
          <tbody className="bg-green-200 text-black">
            {allToys?.map((toy) => (
              <AllToysRow key={toy._id} toy={toy}></AllToysRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;
