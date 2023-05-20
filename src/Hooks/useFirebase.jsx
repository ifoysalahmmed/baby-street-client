import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import { GoogleAuthProvider } from "firebase/auth";

const useFirebase = () => {
  const { providerLogin } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const googleProvider = new GoogleAuthProvider();

  const handleGoogleLogin = () => {
    providerLogin(googleProvider)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return handleGoogleLogin;
};

export default useFirebase;
