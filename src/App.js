

// import A from "./Components/ContextAPI-1/A";
import { useContext } from "react";
import { AuthContext } from "./Components/Context-API-3/Context";

import Login from "./Components/Context-API-3/Login";
import Home from "./Components/Context-API-3/Home";
import { Navigate,  Route, Routes } from "react-router-dom";
import Product from "./Components/Router/Product";
import Contact from "./Components/Router/Contact";
import Protect from "./Components/Router/Protect";



function App() {
  const { isloggedin } = useContext(AuthContext);
  return (
    <div className="App">
     
      <Routes>
      <Route path={'/'} element={<Login/>}></Route>
      <Route  path={'Home'} element={isloggedin?<Home/>:<Login/>}></Route>
      <Route  path={'Product'} element={isloggedin?<Product/>:<Login/>}></Route>
      <Route  path={'Contact'} element={isloggedin?<Contact/>:<Navigate to="/"/>}/>
      <Route  path={'Protect'} element={isloggedin?<Protect/>:<Login/>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;