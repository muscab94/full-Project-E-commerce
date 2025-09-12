
import axios from "axios";
import { useEffect, useState } from "react";

function Cart() {
     
  const[productsData, setProducts] = useState([])
   

  useEffect(() => {
    const getData = JSON.parse(localStorage.getItem("products")) || []
    const update = getData.map(item => ({
      ...item, quantity:1, maxQuantity: item.quantity
    }))
    setProducts(update)
  },[])


   const getCustomer = localStorage.getItem("customer")

   let customerOrder = ""
    // 
   if(getCustomer){
    customerOrder = JSON.parse(getCustomer).data.customer.name
   }

    

   const handleOrder = () => {
    console.log(productsData)
  axios.post("http://localhost:7000/create/order", {
    "customer": customerOrder,
    "products": Array.isArray(productsData) ? productsData.map(item => ({
      "productId": item._id,
      "quantity": item.quantity
    })) : []
  })
  .then(() => {
    alert("success order...")
  })
  .catch(err => {
    console.log("Order error:", err.response?.data || err.message)
  })
}

  // 
  //  const handleOrder = () => {
  //   console.log(productsData)
  //   axios.post("http://localhost:7000/create/order", {
  //     "customer": customerOrder,
  //     "products": productsData.map(Item => ({
  //         "productId": Item._id,
  //         "quantity": Item.quantity
  //     })).then(() => {
  //       alert("sucess order...")
  //     })
  //   })
  //  }

  // const handleOrder = () => {
  //   axios.post("http://localhost:7000/create/order",{
  //     "customer": customerOrder,
  //       "products": productsData.map(item => ({
  //       "productId": item._id,
  //       "quantity": item.quantity
  //     })).then(() => {
  //       alert("success order...")
  //     })
  //   })
  // }


  const handledelete = (id) => {
    const removeItem = productsData.filter((item) => item._id !== id)
    localStorage.setItem("products", JSON.stringify(removeItem))
    setProducts(removeItem)
  }


    // total price
    const TotalPrice = productsData.reduce((sum,item) => sum + (Number(item.price) *Number(item.quantity) ), 0)

        //  
        const handleIncreament = (id) => {
          setProducts(prd => prd.map(
            item => item._id === id ? {...item, quantity: item.quantity < item.maxQuantity ? item.quantity +1 :item.quantity   } : item
          ))
        }  
        // dec
        const handleDec = (id) => {
          setProducts(prd => prd.map(
            item => item._id === id ? {...item, quantity: item.quantity > 1? item.quantity -1 : item.quantity} : item
          ))
        }  

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-2">
        
        {/* Left: Shopping Cart */}
        <div className="lg:col-span-2   s rounded-lg p-6">
          <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>

          <table className="w-full  text-left">
            <thead>
              <tr className="border-b">
                <th className="pb-3">PRODUCT DETAILS</th>
                <th className="pb-3">QUANTITY</th>
                <th className="pb-3">PRICE</th>
                <th className="pb-3">TOTAL</th>
              </tr>
            </thead>
            
              {/* Item Row 1 */}

                   {
                    productsData.map((item) => {
                      return   <tbody>
                          <tr className="border-b">
                <td className="py-4 flex items-center gap-4">
                  <img
                    src= {`http://localhost:7000/allimages/${item.prImage}`}
                    alt="Iphone 16"
                    className="w-20 h-16 object-cover rounded"
                  />
                  <div>
                    <h2 className="font-bold">{item.name}</h2>
                    <p className="text-sm text-purple-600">categaroy </p>
                    {/* <p className="text-sm text-purple-600">phone </p> */}
                    <button onClick={() => handledelete(item._id)} className="text-red-500 text-sm hover:underline">
                      Remove
                    </button>
                  </div>
                </td>
                <td>
                  <div className="flex items-center gap-2">
                    <button onClick={() => handleDec(item._id)} className="px-2 py-1 bg-gray-200 rounded">-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => handleIncreament(item._id)} className="px-2 py-1 bg-gray-200 rounded">+</button>
                  </div>
                </td>
                <td className="font-medium">${item.price * item.quantity}</td>
                <td className="font-medium">$2111</td>
              </tr>
               </tbody>
                    })
                   }


             

          </table>
        </div>

        {/* Right: Order Summary */}
        <div className="bg-gray-200 mt-16 shadow-md rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4">Order Summary</h2>

          <div className="flex justify-between mb-3">
            <span>ITEMS</span>
            <span>{productsData.length}</span>
          </div>

          <div className="mb-4">
            <label className="block mb-1">SHIPPING</label>
            <select className="w-full border rounded px-3 py-2">
              <option>Choose delivery option</option>
              <option>Standard - $10</option>
              <option>Express - $20</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block mb-1">PROMO CODE</label>
            <div className="flex">
              <input
                type="text"
                placeholder="Enter your code"
                className="flex-1 border rounded-l px-3 py-2"
              />
              <button className="bg-red-500 text-white px-4 rounded-r">APPLY</button>
            </div>
          </div>

          <div className="flex justify-between font-bold text-lg mb-4">
            <span>TOTAL COST</span>
            <span>${TotalPrice}</span>
          </div>

          <button onClick={handleOrder} className="w-full py-3 bg-purple-600 text-white font-semibold rounded hover:bg-purple-700">
            CHECKOUT
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;

























// import { useEffect, useState } from "react";

// function Cart() {
//   const [cart, setCart] = useState([]);

//   // ✅ LocalStorage ka akhriso ("products")
//   useEffect(() => {
//     const storedCart = JSON.parse(localStorage.getItem("products")) || [];
//     setCart(storedCart);
//   }, []);

//   // ✅ Total qty & cost xisaabi
//   const totalItems = cart.length; // tirada products
//   const totalCost = cart.reduce((acc, item) => acc + item.price, 0);

//   return (
//     <div className="p-8 bg-gray-50 min-h-screen">
//       <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-2">
        
//         {/* Left: Shopping Cart */}
//         <div className="lg:col-span-2 bg-white shadow-md rounded-lg p-6">
//           <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>

//           <table className="w-full text-left">
//             <thead>
//               <tr className="border-b">
//                 <th className="pb-3">PRODUCT DETAILS</th>
//                 <th className="pb-3">PRICE</th>
//               </tr>
//             </thead>
//             <tbody>
//               {cart.map((item, index) => (
//                 <tr className="border-b" key={index}>
//                   <td className="py-4 flex items-center gap-4">
//                     <img
//                       src={`http://localhost:7000/allimages/${item.prImage}`}
//                       alt={item.name}
//                       className="w-20 h-16 object-cover rounded"
//                     />
//                     <div>
//                       <h2 className="font-bold">{item.name}</h2>
//                       <p className="text-sm text-purple-600">{item.category}</p>
//                       <button className="text-red-500 text-sm hover:underline">
//                         Remove
//                       </button>
//                     </div>
//                   </td>
//                   <td className="font-medium">${item.price}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>

//         {/* Right: Order Summary */}
//         <div className="bg-gray-200 shadow-md rounded-lg p-6">
//           <h2 className="text-xl font-bold mb-4">Order Summary</h2>

//           <div className="flex justify-between mb-3">
//             <span>ITEMS</span>
//             <span>{totalItems}</span>
//           </div>

//           <div className="mb-4">
//             <label className="block mb-1">SHIPPING</label>
//             <select className="w-full border rounded px-3 py-2">
//               <option>Choose delivery option</option>
//               <option>Standard - $10</option>
//               <option>Express - $20</option>
//             </select>
//           </div>

//           <div className="mb-4">
//             <label className="block mb-1">PROMO CODE</label>
//             <div className="flex">
//               <input
//                 type="text"
//                 placeholder="Enter your code"
//                 className="flex-1 border rounded-l px-3 py-2"
//               />
//               <button className="bg-red-500 text-white px-4 rounded-r">APPLY</button>
//             </div>
//           </div>

//           <div className="flex justify-between font-bold text-lg mb-4">
//             <span>TOTAL COST</span>
//             <span>${totalCost}</span>
//           </div>

//           <button className="w-full py-3 bg-purple-600 text-white font-semibold rounded hover:bg-purple-700">
//             CHECKOUT
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Cart;

