import { useState } from "react";
import "../styles/Login.css";

export default function LoginComponent({ isLogin }) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Form Data Submitted:", formData);
    if (formData.email === "admin@test.com" && formData.password === "123456") {
      isLogin();
    }
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <p>Sign in to your account</p>
      <div className="input-container">
        <input
          type="email"
          className="email"
          id="email"
          placeholder="Enter email"
          required
          name="email"
          value={formData.email}
          onChange={handleChange}
        />

        <input
          type="password"
          className="password"
          id="password"
          placeholder="Enter password"
          required
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </div>
      <button type="submit" className="submit">
        Sign in
      </button>
    </form>
  );
}
