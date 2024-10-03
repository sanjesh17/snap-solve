import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ImageUpload from "./components/ImageUpload";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import SignIn from "./components/SignIn";

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/chat' element={<ImageUpload />}/>
          <Route path='/signin' element={<SignIn />}/>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
