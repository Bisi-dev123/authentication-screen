const Login = () => {
  return (
    <div>
      <h3>Welcome back</h3>

      <div className="authentication-content">
        <div className="email-wrapper">
          <label htmlFor="">Email</label>
          <input type="text" value="" placeholder="Enter email" />
        </div>

        <div className="password-wrapper">
          <label htmlFor="">Password</label>
          <input
            className="password-input"
            type="password"
            value=""
            placeholder="*********"
          />
        </div>

        <div>
          <input type="checkbox" />
          <label htmlFor="">Remember me</label>
        </div>
        <p>Forgot password</p>
      </div>
    </div>
  );
};

export default Login;
