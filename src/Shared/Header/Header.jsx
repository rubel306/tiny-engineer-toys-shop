import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import userImg from "../../assets/user.jpg";
const Header = () => {
  const navItems = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "All Toys",
      path: "/all-toys",
    },
    {
      name: "My Toys",
      path: "/my-toys",
    },
    {
      name: "Add A Toy",
      path: "/add-toys",
    },
    {
      name: "Blogs",
      path: "/blogs",
    },
    {
      name: "Login",
      path: "/Login",
    },
  ];
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItems.map((nav) => (
                <li>
                  <Link to={nav.path}>{nav.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          {/* <a className="btn btn-ghost normal-case text-xl">daisyUI</a> */}
          <img width="120px" src={logo} alt="" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navItems.map((nav) => (
              <li>
                <Link
                  className="hover:bg-themeYellow hover:text-white"
                  to={nav.path}
                >
                  {nav.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="navbar-end">
          <div className="w-10 rounded-full">
            <img src={userImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
