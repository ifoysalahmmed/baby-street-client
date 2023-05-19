import { Link, useLocation, useNavigate } from "react-router-dom";
import signInImg from "../../assets/login/signIn.png";
import { useContext, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import { updateProfile } from "firebase/auth";
import useTitle from "../../Hooks/useTitle";

const SignUp = () => {
  useTitle("Sign Up");

  const { auth, createUser } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const [error, setError] = useState("");

  const handleSignUp = (event) => {
    event.preventDefault();

    const form = event.target;

    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    console.log(name, photo, email, password);

    if (!/(?=.{8,})/.test(password)) {
      setError("Password must be at least 8 characters");
      return;
    }

    createUser(email, password)
      .then((result) => {
        const createdUser = result.user;
        updateProfileInfo(name, photo);
        form.reset();
        setError("");
        console.log(createdUser);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const updateProfileInfo = (name, photo) => {
    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    })
      .then(() => {})
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div className="hero min-h-screen bg-green-200 mt-8">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="w-1/2 ml-12 space-y-8 text-center">
          <h1 className="text-5xl font-bold w-full">Sign Up now!</h1>
          <img src={signInImg} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSignUp} className="card-body">
            {error && <p className="text-center text-red-700">{error}</p>}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Your Name"
                name="name"
                required
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="url"
                placeholder="Photo URL"
                name="photo"
                required
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Your Email"
                name="email"
                required
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Your Password"
                name="password"
                required
                className="input input-bordered"
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Sign Up</button>
            </div>
            <p className="my-4 text-center">
              Already have an account?{" "}
              <Link to="/login" className="text-green-600 font-bold">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
