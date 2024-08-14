import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "./shared/Footer";
import MainNav from "./shared/MainNav";

const LandingPage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      document.title = "ShopO - Home";
      return;
    }
    document.title = `ShopO - ${location.pathname
      .replaceAll("/", " - ")
      .replaceAll("-", " ")}`;
  }, [location]);

  return (
    <>
      {/* header */}
      <header>
        <nav>
          <MainNav />
        </nav>
      </header>

      {/* main */}
      <main className="min-h-[calc(100vh-285px)] container w-[87%] mx-auto">
        <Outlet />
      </main>

      {/* footer */}
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default LandingPage;
