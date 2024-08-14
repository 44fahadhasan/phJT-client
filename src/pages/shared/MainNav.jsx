import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";
import Button from "../../components/Button";
import Logo from "../../components/Logo";
import { menuItems } from "../../data/data";

const MainNav = () => {
  const [toggleMenuIcon, setToggleMenuIcon] = useState(true);

  const user = !true;

  const handelToggleMenu = () => {
    setToggleMenuIcon(!toggleMenuIcon);
  };

  const handleLogOut = () => {};

  const userProfile = (
    <div className="w-10 rounded-full">
      <img
        className="object-cover"
        alt="Profile"
        src={
          user?.photoURL ||
          "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_640.png"
        }
      />
    </div>
  );

  const userToggle = (
    <div>
      {user ? (
        <button
          onClick={() => {
            handleLogOut();
            setToggleMenuIcon(!toggleMenuIcon);
          }}
        >
          <Button
            text="LOGOUT"
            textColor="text-[#000000]"
            bg="bg-[#FFBB38]"
            hoverBg="hover:bg-[#000000]"
            hoverTextColor="hover:text-[#D1D5BC]"
          />
        </button>
      ) : (
        <div className="flex">
          <div className="-mr-[35px] z-10 py-2 rounded-[30px]">
            <Link
              to="/Login"
              onClick={() => setToggleMenuIcon(!toggleMenuIcon)}
            >
              <Button
                text="LOGIN"
                bg="bg-[#001B38]"
                hoverBg="hover:bg-[#FFBB38]"
                textColor="text-[#D1D5BC]"
                hoverTextColor="hover:text-[#000000]"
              />
            </Link>
          </div>
          <div className=" bg-primary hover:bg-secondary transition-all duration-500 pl-[21px] py-2 rounded-[30px]">
            <Link
              to="/Register"
              onClick={() => setToggleMenuIcon(!toggleMenuIcon)}
            >
              <Button
                text="REGISTER"
                textColor="text-[#D1D5BC]"
                bg="bg-[#000000]"
                hoverBg="hover:bg-[#FFBB38]"
                hoverTextColor="hover:text-[#000000]"
              />
            </Link>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <div className="bg-[#001B38]">
      <div className="poppins flex justify-between items-center py-5 w-[95%] lg:w-auto mx-auto container ">
        {/* logo */}
        <Logo />

        {/* menu for large device */}
        <div className="hidden md:block text-center">
          <ul className="flex gap-7 font-medium text-lg">
            {menuItems?.map(({ label, path }) => (
              <li key={label}>
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    isActive ? "text-[#FFBB38]" : "text-[#D1D5BC]"
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* login & logout button for large device */}
        <div className="hidden md:flex items-center space-x-4 ">
          {user && userProfile}
          {userToggle}
        </div>

        {/* menu icon for mobile device */}
        <div className="md:hidden text-2xl text-primary hover:text-secondary text-[#FFBB38]">
          {toggleMenuIcon ? (
            <AiOutlineMenu onClick={handelToggleMenu} title="show menu" />
          ) : (
            <AiOutlineClose onClick={handelToggleMenu} title="close menu" />
          )}
        </div>
      </div>

      {/* menu for mobile device */}
      <div
        className={`bg-[#001B38] md:hidden absolute w-full mx-auto h-min bg-base-100 py-6 font-medium z-[900] border-t border-gray-500 ${
          toggleMenuIcon && "hidden"
        }`}
      >
        <ul className="flex flex-col gap-2 text-center">
          {menuItems?.map(({ label, path }) => (
            <li key={label}>
              <NavLink
                onClick={() => setToggleMenuIcon(!toggleMenuIcon)}
                to={path}
                className={({ isActive }) =>
                  isActive ? "text-[#FFBB38]" : "text-[#D1D5BC]"
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* login & logout button for small device */}
        <div className="md:hidden flex justify-center items-center space-x-4 mt-9">
          {user && userProfile}
          {userToggle}
        </div>
      </div>
    </div>
  );
};

export default MainNav;
