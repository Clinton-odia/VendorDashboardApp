import { Link, Route, Routes } from "react-router";
import "../styles/Navbar.css";
import HomePage from "../pages/HomePage";

import VendorDetail from "../pages/VendorDetail";
export default function NavBar() {
  return (
    <>
      <nav>
        <h1 className="logo">
          <Link to={"/"}>VendorDash </Link>
        </h1>

        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/dashboard"}>Dashboard</Link>
          </li>
        </ul>
        <div className="btn-container">
          <Link to={"/login"}>
            <button className="btn-primary">Login</button>
          </Link>
          <button className="btn-secondary">Logout</button>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/vendor/:id" element={<VendorDetail />}></Route>
      </Routes>
    </>
  );
}
