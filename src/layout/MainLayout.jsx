import { Outlet } from "react-router-dom";
import "../App.css";
import Navber from "../components/shared/Navber";

const MainLayout = () => {
  return (
    <div>
      <Navber></Navber>

      <div className="min-h-[90vh] bg-third section-container mx-auto px-4 md:px-8 lg:px-16 text-white">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default MainLayout;
