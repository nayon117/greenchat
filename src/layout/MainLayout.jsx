import { Outlet } from "react-router-dom";
import "../App.css";

const MainLayout = () => {
  return (
    <div>
      {/* <Navbar></Navbar> */}

      <div className="min-h-screen container mx-auto px-4 md:px-8 lg:px-16">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default MainLayout;
