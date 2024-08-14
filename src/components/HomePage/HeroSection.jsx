import { Link } from "react-router-dom";
import bannarImage from "../../assets/10.png";
import Button from "../Button";

const HeroSection = () => {
  return (
    <div className="bg-[#001B38] flex relative z-20 items-center overflow-hidden">
      <div className="container w-[87%] mx-auto px-6 flex relative py-16">
        <div className="sm:w-2/3 lg:w-2/5 flex flex-col relative z-20">
          <span className="w-20 h-2 bg-white mb-12"></span>

          <h1 className="font-bebas-neue uppercase text-6xl sm:text-8xl font-black flex flex-col leading-none text-white">
            Be on
            <span className="text-5xl sm:text-7xl">Time</span>
          </h1>

          <p className="text-sm sm:text-base text-[#D1D5BC] mt-2">
            Explore a wide range of products from top brands. Whether it&#39;s
            fashion, electronics, home essentials, or more, find everything you
            need in one place. Shop now for unbeatable deals and seamless
            shopping!
          </p>
          <div className="mt-8">
            <Link to={"/Products"}>
              <Button />
            </Link>
          </div>
        </div>
        <div className="hidden sm:block sm:w-1/3 lg:w-3/5 relative">
          <img src={bannarImage} className="max-w-xs md:max-w-sm m-auto" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
