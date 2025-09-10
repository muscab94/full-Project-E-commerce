import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import Header from "../components/Header"
export default function FormLogin() {


      const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()

    const handleLogin = () => {
        axios.post("http://localhost:7000/login/customer",
            {
                email: email,
                password: password
            }
        ).then((res) => {
            alert("thanks you're welcome")
            localStorage.setItem("customer", JSON.stringify(res))
            navigate("/")
        }).catch((error) => {
            alert("email or password are incorrect")
        })
    }







  return ( <div>
           <div>
            <Header/>
           </div>
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Login
        </h2>
        
        <form className="space-y-5">
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
            <label className="block text-gray-600 mb-2">Password</label>
            <input  value={password}
            onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>

          <button onClick={handleLogin}
            type="button"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Login
          </button>
        </form>

        <p className="text-sm text-gray-500 text-center mt-6">
          Don’t have an account?{" "}
          <a href="#" className="text-blue-500 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
     </div>
  );
}
