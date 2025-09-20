import { Link } from "react-router-dom";

function Dashboard() {
  const handleLogout = () => {
    localStorage.removeItem("Admin")
  }
  return (
    <div className="flex">
      {/* Sidebar */}
      <aside className="w-64 h-screen bg-blue-700 text-white fixed left-0 top-0 flex flex-col">
        <div className="p-6 border-b border-blue-500">
          <h1 className="text-2xl font-bold">Dashboard</h1>
        </div>

        <nav className="flex-1 p-6">
          <ul className="space-y-4 text-lg">
            <Link to= "/product" ><li className="hover:bg-blue-600 p-2 rounded cursor-pointer">Product</li></Link>
            <Link to= "/AddProduct" ><li className="hover:bg-blue-600 p-2 rounded cursor-pointer">Add Product</li></Link>
            <li className="hover:bg-blue-600 p-2 rounded cursor-pointer">Customer</li>
            <li className="hover:bg-blue-600 p-2 rounded cursor-pointer">Order</li>
            <li className="hover:bg-blue-600 p-2 rounded cursor-pointer">Add Order</li>
            <li className="hover:bg-blue-600 p-2 rounded cursor-pointer">Reports</li>
            <li className="hover:bg-blue-600 p-2 rounded cursor-pointer">Setting</li>
            <Link to= "/form"><li onClick={handleLogout} className="hover:bg-blue-600 p-2 rounded cursor-pointer">LogOut</li></Link>
          </ul>
        </nav>
      </aside>
       
       
      
    </div>
  );
}

export default Dashboard;
