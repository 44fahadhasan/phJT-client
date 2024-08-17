import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const SocailLogin = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // auth
  const { loginWithGoogle } = useAuth();

  // handle social login
  const handleSocailLogin = (socialLogin, provider) => {
    socialLogin()
      .then(() => {
        toast.success(`Login successful by ${provider}`);
        navigate(`${location?.state ?? "/"}`);
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="space-x-6 flex justify-center text-3xl">
      {/* google */}
      <button
        type="button"
        onClick={() => handleSocailLogin(loginWithGoogle, "google")}
      >
        <FcGoogle />
      </button>
    </div>
  );
};

export default SocailLogin;
