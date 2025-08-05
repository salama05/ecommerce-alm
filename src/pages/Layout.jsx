import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import TopHeader from "../components/TopHeader/TopHeader";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <div className="min-h-screen w-screen font-poppins">
      <TopHeader />
      <Header />

      <div className="md:px-0 container mx-auto px-5">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
