import { Link } from "react-router-dom";
import Logo from "../../components/Logo";
import { menuItems } from "../../data/data";

const Footer = () => {
  return (
    <div className="bg-[#001B38] tracking-wide">
      <div className="py-12 container w-[87%] mx-auto">
        <div className="flex flex-wrap items-center sm:justify-between max-sm:flex-col gap-6">
          <Logo />

          <ul className="flex items-center justify-center flex-wrap gap-y-2 md:justify-end space-x-6">
            {menuItems?.map(({ label, path }) => (
              <li key={label}>
                <Link
                  to={path}
                  className="text-gray-300 hover:underline text-base"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <hr className="my-6 border-gray-500" />

        <p className="text-center text-gray-300 text-base">
          © ShopO. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
