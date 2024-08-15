import Category from "../components/HomePage/Category";
import HeroSection from "../components/HomePage/HeroSection";
import JustForYou from "../components/HomePage/JustForYou";

const HomePage = () => {
  return (
    <>
      <HeroSection />

      <div className="container w-[87%] mx-auto py-20">
        <Category />

        <JustForYou />
      </div>
    </>
  );
};

export default HomePage;
