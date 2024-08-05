import { Link } from "react-router-dom";

export function Navigate() {
  return (
    <nav className="h-[50px] flex justify-beetween px-5 bg-gray-500 items-center text-white">
      <span className="font-bold mr-2">Shop</span>
      <span>
        <Link to="/" className="mr-2">
          Products
        </Link>
        <Link to="/about">About shop</Link>
      </span>
    </nav>
  );
}
