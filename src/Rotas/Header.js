import React from "react";
import Home from "../Components/Home";
import Grifinoria from "../Components/Grifinoria";
import Sonserina from "../Components/Sonserina";
import Lufa from "../Components/Lufa";
import Corvinal from "../Components/Corvinal";
import Modal from "./Rotes";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


export default function App() {
  
  return (
    <Router>         
        <Modal indice1="Home" indice2="Gryffindor" indice3="Slytherin" indice4="Ravenclaw" indice5="Hufflepuff" />
      
    <Routes>
        <Route path="/" element={  <Home />}/>
        <Route path="/Gryffindor" element={  <Grifinoria />}/>
        <Route path="/Slytherin" element={  <Sonserina />}/>  
        <Route path="/Ravenclaw" element={  <Corvinal />}/> 
        <Route path="/Hufflepuff" element={  <Lufa />}/> 
        

    </Routes>
   
    </Router>
  );
}
