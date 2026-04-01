import { Link } from "react-router";
import "../styles/Navbar.css";

interface data {
  auth: boolean;
  logger: any;
}

export default function NavBar({ auth, logger }: data) {
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
          {auth ? (
            <button className="btn-secondary" onClick={logger}>
              Logout
            </button>
          ) : (
            <Link to={"/login"}>
              <button className="btn-primary">Login</button>
            </Link>
          )}
        </div>
      </nav>
    </>
  );
}
