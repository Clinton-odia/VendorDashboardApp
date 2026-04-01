import { Link } from "react-router";
import "../styles/Navbar.css";

interface data {
  auth: boolean;
  logger: any;
}

export default function NavBar({ auth, logger }: data) {
  // console.log(auth);
  return (
    <>
      <nav>
        <h1 className="logo">
          <Link to={"/"} style={{ textDecoration: "none" }}>
            VendorDash{" "}
          </Link>
        </h1>
        {auth ? (
          <ul>
            <li>
              <Link to={"/"} style={{ textDecoration: "none" }}>
                Home
              </Link>
            </li>
            <li>
              <Link to={"/dashboard"} style={{ textDecoration: "none" }}>
                Dashboard
              </Link>
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
