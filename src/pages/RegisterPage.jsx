import toast from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { MdEmail, MdOutlineDriveFileRenameOutline } from "react-icons/md";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Heading from "../components/Heading";
import InputFiled from "../components/InputFiled";
import useAuth from "../hooks/useAuth";

const RegisterPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // auth
  const { createNewUser } = useAuth();

  // const handle singup
  const handleSingup = async (event) => {
    event.preventDefault();

    const input = event.target;

    // const name = input.name.value;
    const email = input.email.value;
    const password = input.password.value;

    createNewUser(email, password)
      .then(() => {
        // user profile
        input.reset();
        toast.success("Account created successfully");
        navigate(`${location?.state ?? "/"}`);
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <form onSubmit={handleSingup} className="space-y-4">
      <div className="mb-8">
        <Heading title={"Register Now"} />
      </div>

      {/* name */}
      <InputFiled
        label={"Name"}
        name={"name"}
        type={"text"}
        required={true}
        placeholder={"Your Name"}
        icon={<MdOutlineDriveFileRenameOutline />}
      />

      {/* email */}
      <InputFiled
        label={"Eamil"}
        name={"email"}
        type={"eamil"}
        required={true}
        placeholder={"Your Eamil"}
        icon={<MdEmail />}
      />

      {/* password */}
      <InputFiled
        label={"Password"}
        name={"password"}
        type={"password"}
        required={true}
        placeholder={"Your Password"}
        openIcon={<FaEye />}
        closeIcon={<FaEyeSlash />}
      />

      <div className="!mt-8">
        <button>
          <Button text={"Register"} />
        </button>
      </div>

      <p className="text-sm !mt-8 text-center text-[#444]">
        You have an account{" "}
        <Link
          to="/Login"
          className="text-[#FFBB38] font-semibold hover:underline ml-1 whitespace-nowrap"
        >
          Login here
        </Link>
      </p>
    </form>
  );
};

export default RegisterPage;
