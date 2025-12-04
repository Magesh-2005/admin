import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AdminList from "./components/AdminList";

function App() {
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark mb-4">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">Admin Service</span>
        </div>
      </nav>

      <AdminList />
    </div>
  );
}

export default App;
