
import axios from "axios";
import DashboardSidebar from "./Dashboard";
import { Edit, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Product() {
  const [product, setProduct] = useState([]);

  const handleReadProduct = () => {
    axios.get("http://localhost:7000/read/product").then((res) => {
      setProduct(res.data);
    });
  };

  const handledelete = (id) => {
    const confirmDelete = window.confirm("Ma hubtaa inaad tirtirto product-kan?");
    if (!confirmDelete) return;

    axios.delete(`http://localhost:7000/delete/product/${id}`).then(() => {
      alert("Product deleted successfully");
      handleReadProduct(); // refresh table
    });
  };

  useEffect(() => {
    handleReadProduct();
  }, []);

  return (
    <div className="flex">
      <DashboardSidebar />

      <div className="ml-64 flex-1 p-10 bg-gray-50 min-h-screen">
        <h1 className="text-2xl font-bold mb-6">Products Table</h1>

        <div className="overflow-x-auto bg-white shadow-md rounded-lg">
          <table className="w-full text-left border-collapse">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="py-3 px-4">Id</th>
                <th className="py-3 px-4">Image</th>
                <th className="py-3 px-4">Product Name</th>
                <th className="py-3 px-4">Quantity</th>
                <th className="py-3 px-4">Price</th>
                <th className="py-3 px-4">Desc</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4">Action</th>
              </tr>
            </thead>

            <tbody>

              {product.map((item, index) => (


                <tr key={index + 1} className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4">{item.prId}</td>
                  <td className="py-3 px-4">
                    <img
                      src={`http://localhost:7000/allimages/${item.prImage}`}
                      alt="Product"
                      className="w-12 h-12 object-cover rounded"
                    />
                  </td>
                  <td className="py-3 px-4 font-medium">{item.name}</td>
                  <td className="py-3 px-4">{item.quantity}</td>
                  <td className="py-3 px-4 text-blue-600 font-semibold">
                    ${item.price}
                  </td>
                  <td className="py-3 px-4">{item.desc}</td>
                  <td className="py-3 px-4">
                    <span className={ `px-3 py-1 rounded-full text-sm bg-green-100  ${item.status === "Available" ? "text-green-600 bg-green-200 " : "text-red-800 bg-red-200"  }   `}>
                      {item.status}
                    </span>
                    {/* <span
                      className={`px-3 py-1 rounded-full text-sm font-medium 
                     ${item.status === "Available"
                          ? "bg-green-100 text-green-600"
                          : "bg-red-100 text-red-600"
                        }`}
                    >
                      h
                    </span> */}

                  </td>
                  <td className="py-3 px-4 flex gap-3">
                    <Link to={`/UpdateProduct/${item._id}`} ><button className="text-blue-600 hover:text-blue-800">
                      <Edit size={18} />
                    </button> </Link>
                    <button
                      onClick={() => handledelete(item._id)}
                      className="text-red-600 hover:text-red-800"
                    >
                      <Trash2 size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

}

export default Product;
