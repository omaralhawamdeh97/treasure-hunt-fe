import { Logo, NavItem, ThemeButton, SignInButton } from "../styles";

import darkLogo from "../123.png";
import lightLogo from "../321.png";
import { useDispatch, useSelector } from "react-redux";
import { signout } from "../store/actions/authActions";
import { Link, useHistory } from "react-router-dom";

const NavBar = ({ currentTheme, toggleTheme }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.authReducer.user);
  console.log(user);
  return (
    <div
      className="navbar navbar-expand"
      style={{
        // color: "red",
        // borderStyle: "solid",
        justifyContent: "space-between",
      }}
    >
      <Logo className="navbar-brand" to="/">
        <img
          src={currentTheme === "light" ? lightLogo : darkLogo}
          alt="logo"
          style={{ borderRadius: "50%" }}
        />
      </Logo>
      <div style={{ marginRight: 20, alignItems: "center" }}>
        {user ? (
          <>
            <h4>Welcome, {user.username}</h4>
            <button onClick={() => dispatch(signout(history))}>Logout</button>
            <NavItem className="nav-item" to="/treasures">
              <SignInButton>Treasures</SignInButton>
            </NavItem>
          </>
        ) : (
          <>
            <Link to="/signin">
              <SignInButton>Sign In</SignInButton>
            </Link>
            <Link to="/signup">
              <SignInButton>Sign up</SignInButton>
            </Link>
          </>
        )}
        <NavItem className="nav-item" to="/">
          <SignInButton>Home</SignInButton>
        </NavItem>

        <ThemeButton className="nav-item" onClick={toggleTheme}>
          {currentTheme === "light" ? "Dark" : "Light"} Mode
        </ThemeButton>
      </div>
    </div>
  );
};

export default NavBar;
