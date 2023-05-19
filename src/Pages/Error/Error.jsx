import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <div className="px-20 py-10 bg-green-100 min-h-screen">
        <div className=" flex justify-center">
          <img
            className="w-2/3 h-96 shadow-lg"
            src="https://cdn-images-1.medium.com/v2/resize:fit:800/1*qdFdhbR00beEaIKDI_WDCw.gif"
            alt=""
          />
        </div>
        <div className="my-5">
          <p className=" text-center text-2xl text-red-600 font-serif font-extrabold">
            This Page Isn&apos;t Available
          </p>
          <p className=" text-center text-sm text-black font-serif font-bold">
            The link may be broken, or the page may have been removed. Check to
            see if the link you&apos;re trying to open is correct.
          </p>
        </div>
        <div className="text-center">
          <Link to="/">
            <button className="btn btn-success">Go Back to Home</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error;
