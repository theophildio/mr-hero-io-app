import { NavLink } from "react-router-dom";
import Git from "../../assets/github.png";
import Logo from "../../assets/logo.png";

const Navbar = () => {
  const links = [
    { name: "Home", path: "/" },
    { name: "Apps", path: "/apps" },
    { name: "Installation", path: "/installation" },
  ];

  const linkClass = ({ isActive }) =>
    `mr-4 px-3 py-1 rounded-md font-medium ${
      isActive ? "bg-transparent underline text-purple-600" : "text-gray-700 hover:text-purple-600 hover:bg-transparent hover:underline"
    }`;

  return (
    <nav>
      <div className="navbar bg-base-100 shadow-sm md:px-16 px-2">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden p-0 pr-2">
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
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links.map((link) => (
                <li key={link.name}>
                  <NavLink to={link.path} className={linkClass}>
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <img className="w-8" src={Logo} alt="Hero IO Logo" />
          <span className="text-lg md:text-xl uppercase ml-1">hero.io</span>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {links.map((link) => (
              <li key={link.name}>
                <NavLink to={link.path} className={linkClass}>
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="navbar-end">
          <a
            href="https://github.com/theophildio"
            target="_blank"
            rel="noopener noreferrer"
            className="btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white flex items-center gap-2"
          >
            <img src={Git} alt="GitHub icon" />
            Contribute
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
