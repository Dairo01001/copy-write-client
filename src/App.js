import React from "react";
import List from "./components/List";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="container-fluid bg-dark" style={{ minHeight: '100vh' }}>
      <NavBar />
      <List />
    </div>
  );
}

export default App;
