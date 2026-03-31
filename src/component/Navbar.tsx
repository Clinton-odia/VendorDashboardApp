import "../styles/Navbar.css";
export default function NavBar() {
  return (
    <nav>
      <h1 className="logo">
        <a>VendorDash </a>
      </h1>

      <ul>
        <li>
          <a>Home</a>
        </li>
        <li>
          <a>Dashboard</a>
        </li>
      </ul>
      <div className="btn-container">
        <button className="btn-primary">Login</button>
        <button className="btn-secondary">Logout</button>
      </div>
    </nav>
  );
}
