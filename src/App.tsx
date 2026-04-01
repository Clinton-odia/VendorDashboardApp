import { useState } from "react";
import "./App.css";
import NavBar from "./component/Navbar";
import LoginPage from "./pages/LoginPage";
import { Routes, Route } from "react-router";
import VendorList from "./pages/VendorList";
import HomePage from "./pages/HomePage";
import VendorDetail from "./pages/VendorDetail";

function App() {
  const [auth, setAuth] = useState(false);

  const handleAuth = () => setAuth(() => true);
  const logger = () => setAuth(() => false);
  return (
    <>
      <NavBar auth={auth} logger={logger} />
      {auth ? (
        <Routes>
          <Route
            path="/login"
            element={<LoginPage isLogin={handleAuth} />}
          ></Route>
          <Route path="/dashboard" element={<VendorList />}></Route>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/vendor/:id" element={<VendorDetail />}></Route>
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage isLogin={handleAuth} />} />
        </Routes>
      )}
    </>
  );
}

export default App;
