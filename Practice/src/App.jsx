import axios from "axios";
import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";


const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/about" element={<About/>} />
      </Routes>
    </div>
  );
};

export default App;
