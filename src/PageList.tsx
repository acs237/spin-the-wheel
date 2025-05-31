import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SpinTheWheel from "./pages/SpinTheWheel";
import BlogPost from "./pages/BlogPost";

const PageList = () => {
    return (
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/spinthewheel' element={<SpinTheWheel />} />
        <Route path="/blog/:id" element={<BlogPost />} />
      </Routes>
    )
  }
  
  export default PageList;
  