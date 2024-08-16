import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { SiGithub } from "react-icons/si";

const SocailLogin = () => {
  const handleSocailLogin = (provider) => {
    console.log(provider);
  };

  return (
    <div className="space-x-6 flex justify-center text-3xl">
      {/* google */}
      <button type="button" onClick={() => handleSocailLogin("google")}>
        <FcGoogle />
      </button>

      {/* github */}
      <button type="button" onClick={() => handleSocailLogin("github")}>
        <SiGithub />
      </button>

      {/* facebook */}
      <button type="button" onClick={() => handleSocailLogin("facebook")}>
        <FaFacebook className="text-[#1976D2]" />
      </button>
    </div>
  );
};

export default SocailLogin;
