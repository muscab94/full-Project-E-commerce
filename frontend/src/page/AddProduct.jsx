
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DashboardSidebar from "./Dashboard";
import axios from "axios";

function AddProduct() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [desc, setDesc] = useState("");
  const [quantity, setQuantity] = useState("");
  const [prImage, setPrImage] = useState(null);

  const navigate = useNavigate();

  const handleCreateData = (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("name", name);
    formData.append("price", price);
    formData.append("desc", desc);
    formData.append("quantity", quantity);
    formData.append("images", prImage);

    axios.post("http://localhost:7000/create/product", formData).then(() => {
      alert("You Added new product");
      navigate("/Product");
    });
  };

  const handleClear = () => {
    setName("");
    setPrice("");
    setDesc("");
    setQuantity("");
    setPrImage(null);
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <DashboardSidebar />

      {/* Right Content */}
      <main className="ml-64 flex-1 p-10 bg-gray-50 min-h-screen">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Add Product</h1>

          <form
            onSubmit={handleCreateData}
            className="bg-white shadow-lg rounded-2xl p-8 space-y-6"
          >
            {/* Row: Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Product name"
                className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-200"
              />
            </div>

            {/* Row: Price + Quantity */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Price
                </label>
                <input
                  type="number"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  placeholder="e.g. 200"
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-200"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Quantity
                </label>
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  placeholder="e.g. 10"
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-200"
                />
              </div>
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Description
              </label>
              <textarea
                rows="4"
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                placeholder="Short description about the product..."
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-200"
              />
            </div>

            {/* Image Upload */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Image
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setPrImage(e.target.files[0])}
                className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 
                           file:rounded-lg file:border-0 file:text-sm file:font-semibold 
                           file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
              />
              <p className="text-xs text-gray-400 mt-2">
                PNG, JPG ama JPEG — Max size 2MB.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex items-center gap-4">
              <button    onClick={handleCreateData}
                type="submit"
                className="px-6 py-2 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition shadow"
              >
                Send
              </button>

              <button
                type="button"
                onClick={handleClear}
                className="px-5 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition"
              >
                Clear
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}

export default AddProduct;
