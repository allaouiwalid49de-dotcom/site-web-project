import Header from "./components/Header";
import React from "react";
import './App.css';
import Home from './components/Home';
import Footer from "./components/Footer";

function App() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      
        <Header />

      <Footer />
  

    </div>
  );
}

export default App;
