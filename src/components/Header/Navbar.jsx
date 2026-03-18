import { Link } from "react-router";
import Git from "../../assets/github.png";
import Logo from "../../assets/logo.png";

const Navbar = () => {

    const links = <>
        <Link to="/" className="mr-4">Home</Link>
        <Link to="/app" className="mr-4">Apps</Link>
        <Link to="/installation" className="mr-0">Installation</Link>
    </>

  return (
    <nav>
      <div className="navbar bg-base-100 shadow-sm px-16">
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
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <img className="w-8" src={Logo} alt="Hero IO Logo" />
          <a className="text-xl uppercase ml-1">hero.io</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {links}
          </ul>
        </div>
        <div className="navbar-end">
          <Link to="https://github.com/theophildio" target="_blank" className="btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white"><img src={Git} alt="GitHub icon" />Contribute</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
