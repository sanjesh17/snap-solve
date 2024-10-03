import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ImageUpload from "./components/ImageUpload";
import Home from "./components/Home";
import Conversation from "./components/Conversation";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/upload' element={<ImageUpload />}/>
          <Route path='/conversation' element={<Conversation />}/>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
