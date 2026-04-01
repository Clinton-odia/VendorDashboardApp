import { Link } from "react-router";
import "../styles/Navbar.css";

interface data {
  auth: boolean;
}

export default function NavBar({ auth }: data) {
  console.log(auth);
  return (
    <>
      <nav>
        <h1 className="logo">
          <Link to={"/"}>VendorDash </Link>
        </h1>
        {auth ? (
          <ul>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/dashboard"}>Dashboard</Link>
            </li>
          </ul>
        ) : (
          ""
        )}

        <div className="btn-container">
          <Link to={"/login"}>
            <button className="btn-primary">Login</button>
          </Link>
          <button className="btn-secondary">Logout</button>
        </div>
      </nav>
    </>
  );
}
