import useFirebase from "../../../Hooks/useFirebase";
import googleImg from "../../../assets/images/icons/google.svg";

const SocialLogin = () => {
  const handleGoogleLogin = useFirebase();

  return (
    <div className="text-center mt-4 space-y-3">
      <div className="divider">Or Sign in with</div>
      <button
        onClick={handleGoogleLogin}
        className="btn btn-circle btn-outline p-3"
      >
        <img src={googleImg} alt="" />
      </button>
    </div>
  );
};

export default SocialLogin;
