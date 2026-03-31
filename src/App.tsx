import { useState } from "react";
import "./App.css";
import NavBar from "./component/Navbar";
import LoginPage from "./pages/LoginPage";
import { Routes, Route } from "react-router";
import VendorList from "./pages/VendorList";

function App() {
  const [auth, setAuth] = useState(false);

  const handleAuth = () => setAuth(() => true);
  return (
    <>
      <NavBar />
      {auth ? (
        <h1>Invalid login credentials</h1>
      ) : (
        <Routes>
          <Route
            path="/login"
            element={<LoginPage isLogin={handleAuth} />}
          ></Route>
          <Route path="/dashboard" element={<VendorList />}></Route>
        </Routes>
      )}
    </>
  );
}

export default App;
