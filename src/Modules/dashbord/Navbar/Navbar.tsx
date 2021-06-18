import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <a href="/" className="logo_Logistica">
          {" "}
          Logistica{" "}
        </a>
        <ul>
          <a href="/"
           className="button_navbar"
           >Home </a>
          {!localStorage.getItem("token") && (
            <a href="/Auth/SignUpUserOrDriver"
            className="button_navbar">Sign-up </a>
          )}

          {!localStorage.getItem("token") && (
            <a href="/Auth/Signin"
            className="button_navbar"
            >Sign-in </a>
          )}

          {localStorage.getItem("token") && (
            <a>{localStorage.getItem("userName")} </a>
          )}
          
          {localStorage.getItem("token") && (
            <button
            className="button_disconnection"
              onClick={() => {
                localStorage.clear();
                window.location.replace("/");
              }}
            >
              disconnection
            </button>
          )}
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
