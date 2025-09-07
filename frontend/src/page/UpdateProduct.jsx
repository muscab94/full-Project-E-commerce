
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import DashboardSidebar from "./Dashboard";
import axios from "axios";

function Update() {
  const [ID, setId] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [desc, setDesc] = useState("");
  const [quantity, setQuantity] = useState("");
  const [prImage, setPrImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const navigate = useNavigate();
  const { id } = useParams(); // id ka URL-ka

  // 1. Fetch single product
  useEffect(() => {
    axios
      .get(`http://localhost:7000/readSingle/product/${id}`)
      .then((res) => {
        const data = res.data[0]; // haddii backend array celinayo
        setId(data.id);
        setName(data.name);
        setPrice(data.price);
        setDesc(data.desc);
        setQuantity(data.quantity);
        setPreview(data.image); // sawirka jira
      })
      .catch((error) => console.log("Error fetching product:", error));
  }, [id]);

  // 2. Update product
  const handleUpdate = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", price);
    formData.append("desc", desc);
    formData.append("quantity", quantity);
    if (prImage) {
      formData.append("images", prImage);
    }

    axios
      .put(`http://localhost:7000/update/product/${id}`, formData)
      .then(() => {
        alert("✅ Product updated successfully");
        navigate("/Product");
      })
      .catch((err) => {
        console.error("Error updating product:", err);
        alert("❌ Update failed, check console");
      });
  };

  const handleClear = () => {
    setName("");
    setPrice("");
    setDesc("");
    setQuantity("");
    setPrImage(null);
    setPreview(null);
  };

  return (
    <div className="flex">
      <DashboardSidebar />

      <main className="ml-64 flex-1 p-10 bg-gray-50 min-h-screen">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Update Product</h1>

          <form onSubmit={handleUpdate} className="bg-white shadow-lg rounded-2xl p-8 space-y-6">
            {/* ID */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">ID</label>
              <input
                type="number"
                value={ID}
                readOnly
                className="w-full px-4 py-2 rounded-lg border border-gray-200 bg-gray-100"
              />
            </div>

            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Product name"
                className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-200"
              />
            </div>

            {/* Price + Quantity */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Price</label>
                <input
                  type="number"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  placeholder="e.g. 200"
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-200"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Quantity</label>
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  placeholder="e.g. 10"
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-200"
                />
              </div>
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
              <textarea
                rows="4"
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                placeholder="Short description about the product..."
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-200"
              />
            </div>

            {/* Image */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Image</label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files[0];
                  setPrImage(file); // set new image
                  if (file) {
                    setPreview(URL.createObjectURL(file)); // show preview immediately
                  }
                }}
                className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 
                           file:rounded-lg file:border-0 file:text-sm file:font-semibold 
                           file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
              />
              {preview && (
                <div className="mt-2 flex items-center gap-4">
                  <img src={preview} alt="Product Preview" className="w-32 h-32 object-cover rounded-lg" />
                  <button
                    type="button"
                    onClick={() => {
                      setPrImage(null); // remove selected file
                      setPreview(null); // remove preview
                    }}
                    className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                  >
                    Remove Image
                  </button>
                </div>
              )}
            </div>

            {/* Buttons */}
            <div className="flex items-center gap-4">
              <button
                type="submit"
                className="px-6 py-2 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition shadow"
              >
                Update
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

export default Update;



