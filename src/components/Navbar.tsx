// react-router-dom
import { Link } from "react-router-dom";
// icons
import { CartIcon, Roc8Icon, SearchIcon } from "../icons";

function Navbar() {
  return (
    <nav className="relative px-2 sm:px-8 py-4 flex justify-between items-center border-y-2 border-gray-200 shadow-sm">
      <Link
        to="/"
        className="text-3xl font-bold leading-none flex items-center space-x-4"
      >
        <span>
          <Roc8Icon />
        </span>
        <span className="text-gray-600 text-sm sm:text-xl">Roc8 Shop</span>
      </Link>
      <div className="relative tw-mx-4">
        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
          <SearchIcon />
        </span>
        <input
          type="text"
          className="py-2 pl-10 pr-4 text-sm text-gray-700 bg-gray-100 rounded-md focus:bg-white focus:text-gray-900 outline-none focus:outline focus:outline-[#ff473e]"
          placeholder="Search Products"
        />
      </div>
      <div>
        <Link
          to="/cart"
          className="flex rounded-md border border-[#ff473e] px-2 sm:px-4 py-1 sm:py-2 text-sm sm:text-base font-semibold leading-7 text-[#ff473e] hover:bg-red-50 "
        >
          <span className="pr-2">
            <CartIcon />
          </span>
          <span>Cart</span>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
