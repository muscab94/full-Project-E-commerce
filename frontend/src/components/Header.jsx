import { User, ShoppingCart } from "lucide-react";

function Header() {
  return (
    <header className="flex items-center justify-between px-8 py-4 shadow-md bg-white">
      {/* Left: Logo */}
      <div className="text-2xl font-bold text-blue-700">
        <h1>BookHeaven</h1>
      </div>

      {/* Middle: Navigation */}
      <nav>
        <ul className="flex gap-8 font-medium text-gray-700">
          <li className="hover:text-blue-600 cursor-pointer">Home</li>
          <li className="hover:text-blue-600 cursor-pointer">Categories</li>
          <li className="hover:text-blue-600 cursor-pointer">Best Sellers</li>
          <li className="hover:text-blue-600 cursor-pointer">Contacts</li>
        </ul>
      </nav>

      {/* Right: Actions */}
      <div className="flex items-center gap-4">
        {/* Login + Icon */}
        <div className="flex items-center gap-2 cursor-pointer hover:text-blue-600">
          <User size={22} />
          <h1 className="font-medium">Login</h1>
        </div>

        {/* Registration Button */}
        <button className="px-4 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition">
          Registration Customer
        </button>

        {/* Cart + Icon */}
        <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-100 hover:bg-gray-200 transition">
          <ShoppingCart size={20} />
          <span>Cart</span>
        </button>
      </div>
    </header>
  );
}

export default Header;
