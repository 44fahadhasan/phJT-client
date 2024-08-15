import Category from "../components/HomePage/Category";
import HeroSection from "../components/HomePage/HeroSection";

const HomePage = () => {
  return (
    <>
      <HeroSection />

      <div className="container w-[87%] mx-auto py-16">
        <Category />
      </div>
    </>
  );
};

export default HomePage;
