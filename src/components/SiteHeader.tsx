import { Link } from "react-router-dom";

export default function SiteHeader() {
  return (
    <nav className="pt-6 py-2 text-purple-600 border-b border-purple-600 flex items-center justify-between">
      <div>
        {/* Logo */}
        <Link to="/" className="  font-handjet text-2xl font-semibold">
          ReviewZ
        </Link>
      </div>

      {/* <ul className="flex space-x-4 mt-4">
        <li>
          <Link to="/" className=" ">
            Home
          </Link>
        </li>
        <li>
          <Link to="/category" className="">
            Categories
          </Link>
        </li>
      </ul> */}
    </nav>
  );
}
