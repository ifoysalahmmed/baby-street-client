import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const navItems = (
    <>
      <li className="font-semibold">
        <Link to="/">Home</Link>
      </li>
      <li className="font-semibold">
        <Link to="/allToys">All Toys</Link>
      </li>
      <li className="font-semibold">
        <Link to="/blogs">Blogs</Link>
      </li>
    </>
  );

  return (
    <div className="navbar bg-cyan-50 rounded-md">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItems}
            {user?.email && (
              <>
                <li className="font-semibold">
                  <Link to="/myToys">My Toys</Link>
                </li>
                <li className="font-semibold">
                  <Link to="/addToy">Add A Toy</Link>
                </li>
              </>
            )}
          </ul>
        </div>
        <Link className="btn btn-ghost normal-case text-xl h-full">
          <span className="mr-2">
            <img src="/logo.png" alt="" />
          </span>
          <span className="text-indigo-600">Baby Street</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navItems}
          {user?.email && (
            <>
              <li className="font-semibold">
                <Link to="/myToys">My Toys</Link>
              </li>
              <li className="font-semibold">
                <Link to="/addToy">Add A Toy</Link>
              </li>
            </>
          )}
        </ul>
      </div>
      <div className="navbar-end">
        {!user?.email && (
          <Link className="btn btn-success" to="/login">
            Login
          </Link>
        )}
        {user?.email && (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img title={user.displayName} src={user.photoURL} alt="" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
            >
              <li onClick={handleLogOut}>
                <button className="btn btn-warning">Logout</button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
