import "../styles/Login.css";

export default function LoginComponent() {
  return (
    <form className="form">
      <p>Sign in to your account</p>
      <div className="input-container">
        <input
          type="email"
          className="email"
          id="email"
          placeholder="Enter email"
          required
        />

        <input
          type="password"
          className="password"
          id="password"
          placeholder="Enter password"
          required
        />
      </div>
      <button type="submit" className="submit">
        Sign in
      </button>
    </form>
  );
}
