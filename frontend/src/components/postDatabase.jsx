import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"

function PostData() {

    const [Data, setData] = useState([])

    const handleReadProduct = () => {
        axios.get("http://localhost:7000/read/product").then((res) => {
            setData(res.data)
        })
    }

    useEffect(() => {
        handleReadProduct()
    }, [])




    return (   
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-6 -ml-8">
          {
            Data.map((item, index) => {
                return    <div key={index} className="w-80 mt-20 ml-20 mb-20 bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition">   

            {/* Product Image */}
            <img
                className="w-full h-48 object-cover"
                src={`http://localhost:7000/allimages/${item.prImage}`}
                alt="Product"
            />

            {/* Product Info */}
            <div className="p-5 space-y-3">
                <div className="flex items-center justify-between">
                    <h1 className="text-lg font-semibold text-gray-800">{item.name}</h1>
                    <span className="text-sm font-medium text-green-600">{item.status}</span>
                </div>

                <div className="flex items-center justify-between">
                    <h1 className="text-xl font-bold text-blue-600">${item.price}</h1>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                        Add
                    </button>
                </div>
            </div>
        </div>
            })
          }
       
        </div>
    );
}

export default PostData;
