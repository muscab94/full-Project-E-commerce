import Header from "./components/Header"
import PostData from "./components/postDatabase"
import SectionOne from "./components/sectionOne"
import {Routes,Route} from "react-router-dom"
import Dashboard from "./page/Dashboard"
import Product from "./page/Product"
import AddProduct from "./page/AddProduct"
import Update from "./page/UpdateProduct"
import Cart from "./page/cart"
import FormLogin from "./page/formLogin"
import FormRegistration from "./page/formRegistration"
import ProtectedRouter from "./page/protectedRouter"
function App(){
  return <div>
    <div>
   
    </div>
    {/* <SectionOne/>
     <PostData/> */}
     <Routes>
       <Route path="/" element= {<SectionOne/>} />
       {/* <Route path="/Dashboard" element= {<Dashboard/>}/> */}
               <Route
          path="/Dashboard"
          element={
            <ProtectedRouter>
              <Dashboard />
            </ProtectedRouter>
          }
        />

       {/* <Route path="/product" element= {<Product/>}/> */}
        <Route
          path="/product"
          element={
            <ProtectedRouter>
              <Product />
            </ProtectedRouter>
          }
        />
       <Route path="/AddProduct" element= {<AddProduct/>}/>
       <Route path="/UpdateProduct/:id" element= {<Update/>}/>
       <Route path="/cart" element= {<Cart/>}/>
       <Route path="/form" element= {<FormLogin/>}/>
       <Route path="/Registration" element= {<FormRegistration/>}/>
     </Routes>
  </div>
}

export default App