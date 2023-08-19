  import  React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter  ,Routes, Route } from "react-router-dom";
import Home  from "./components/pages/Home";
import SignUp from "./components/signup";
import Login from "./components/login";
import Layout from "./components/Layout.js"

function App() {
  return (
    <>
      <BrowserRouter>
        
        <Routes>
          <Route path="/" Component={<Layout />} >
          <Route path="signup" Component={<SignUp />} />
          <Route path="login" Component={<Login />} />
          <Route index Component={<Home />} />
  </Route>
 </Routes>
      </BrowserRouter>
    </>
  )
}


export default App;
