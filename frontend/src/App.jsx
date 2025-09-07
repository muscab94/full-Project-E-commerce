import Header from "./components/Header"
import PostData from "./components/postDatabase"
import SectionOne from "./components/sectionOne"
import {Routes,Route} from "react-router-dom"
import Dashboard from "./page/Dashboard"
import Product from "./page/Product"
import AddProduct from "./page/AddProduct"
import Update from "./page/UpdateProduct"
function App(){
  return <div>
    <div>
   
    </div>
    {/* <SectionOne/>
     <PostData/> */}
     <Routes>
       <Route path="/" element= {<SectionOne/>} />
       <Route path="/Dashboard" element= {<Dashboard/>}/>
       <Route path="/product" element= {<Product/>}/>
       <Route path="/AddProduct" element= {<AddProduct/>}/>
       <Route path="/UpdateProduct/:id" element= {<Update/>}/>
     </Routes>
  </div>
}

export default App