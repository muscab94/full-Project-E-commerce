import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import Header from "../components/Header"
export default function FormRegistration()
{



   const [name,setName] = useState("")
  const [phone,setPhone] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

  const navigate = useNavigate()

  const handleRegister  = () => {
    axios.post("http://localhost:7000/create/customer",
      {
        name:name,
        phone:phone,
        email:email,
        password:password
      }
    ).then(() => {
      alert("thanks you're welcome")
      navigate("/form")
    }).catch((error) => {
      alert("email exisist before")
    })
  }


  return ( <div>
           <div>
            <Header/>
           </div>
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Create Account
        </h2>

        <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
          <div>
            <label className="block text-gray-600 mb-2">Full Name</label>
            <input value={name}
            onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Enter your full name"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-600 mb-2">Email</label>
            <input  value={email}
            onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-600 mb-2">Phone Number</label>
            <input value={phone}
            onChange={(e) => setPhone(e.target.value)}
              type="Number"
              placeholder="Enter your Number"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-600 mb-2"> Password</label>
            <input value={password}
            onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="enter your password"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>

          <button onClick={handleRegister}
            type="button"
            className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition"
          >
            Register
          </button>
        </form>

        <p className="text-sm text-gray-500 text-center mt-6">
          Already have an account?{" "}
          <a href="#" className="text-blue-500 hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
     </div>
  );
}
