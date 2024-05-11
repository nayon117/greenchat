import { CgProfile } from "react-icons/cg";
import { FaCamera } from "react-icons/fa";
import { ImUsers } from "react-icons/im";
import { IoChatboxEllipsesSharp } from "react-icons/io5";
import { MdEditLocationAlt } from "react-icons/md";
import { NavLink } from "react-router-dom";

const Navber = () => {
  const navLinks = (
    <>
      <li className="font-medium text-base">
        
        <NavLink to="/"><IoChatboxEllipsesSharp />Chat</NavLink>
      </li>
      <li className="font-medium text-base">
        
        <NavLink to="/characters"><ImUsers />My Characters</NavLink>
      </li>
      <li className="font-medium text-base">  
        <NavLink to="/generate-image"><FaCamera />Generate Images</NavLink>
      </li>
      <li className="font-medium text-base">   
        <NavLink className="bg-first" to="/create-character"><MdEditLocationAlt />Create Characters</NavLink>
      </li>
    </>
  );

  return (
    <section className="section-container navbar bg-second text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Secret<span className="bg-first rounded-md">Desires</span>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        <a className="flex items-center gap-1" ><CgProfile />My Profile</a>
      </div>
    </section>
  );
};
export default Navber;
