import { useEffect, useState } from "react";
import AllToysRow from "./AllToysRow";
import useTitle from "../../Hooks/useTitle";

const AllToys = () => {
  useTitle("All Toys");

  const [allToys, setAllToys] = useState([]);
  const [searchName, setSearchName] = useState("");
  const [limit, setLimit] = useState(20);
  // const [sorting, setSorting] = useState(1);

  useEffect(() => {
    fetch(`https://baby-street-server.vercel.app/allToys?limit=${limit}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setAllToys(data);
      });
  }, [limit]);

  const handleSearch = () => {
    fetch(`https://baby-street-server.vercel.app/getToysByName/${searchName}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setAllToys(data);
      });
  };

  const handleLimit = () => {
    setLimit("");
  };

  // const handleAscending = () => {
  //   //
  // };

  // const handleDescending = () => {
  //   //
  // };

  return (
    <div>
      <div className="form-control mt-6">
        <div className="input-group justify-center">
          <input
            onChange={(e) => setSearchName(e.target.value)}
            type="text"
            placeholder="Search…"
            className="input input-bordered"
          />
          <button onClick={handleSearch} className="btn btn-square btn-success">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </div>
      {/* <div className="text-right">
        <button
          onClick={handleAscending}
          className="btn btn-sm btn-primary mr-2"
        >
          ascending
        </button>

        <button onClick={handleDescending} className="btn btn-sm btn-warning">
          descending
        </button>
      </div> */}
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
      <div className="text-center mt-6">
        <button onClick={handleLimit} className="btn btn-primary">
          Load More
        </button>
      </div>
    </div>
  );
};

export default AllToys;
