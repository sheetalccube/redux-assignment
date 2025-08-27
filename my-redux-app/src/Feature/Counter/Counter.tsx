import { AppBar, Box, Button, Toolbar } from "@mui/material";
import CounterControll from "./CounterControll";
import CounterDisplay from "./CounterDisplay";
import { NavLink, useNavigate } from "react-router-dom";
import useHeaderStyle from "./HeaderStyle";

function Counter() {
  const navigate = useNavigate();
  const navItems = [
    { label: "Auth", path: "auth" },
    { label: "Users", path: "/users" },
    { label: "customers", path: "/customers" },
  ];
  const style = useHeaderStyle();

  return (
    <>
      <Box>
        <AppBar position="static" color="primary">
          <Toolbar sx={style.toolbar}>
            {navItems.map(({ label, path }) => (
              <NavLink
                key={path}
                to={path}
                style={({ isActive }) => style.navLink(isActive)}
              >
                {label}
              </NavLink>
            ))}

            <Box flexGrow={1} />

            <Button
              variant="outlined"
              color="inherit"
              onClick={() => navigate("/login")}
            >
              Login
            </Button>
          </Toolbar>
        </AppBar>
      </Box>

      <h1>Counter</h1>
      <CounterDisplay />
      <CounterControll />
    </>
  );
}

export default Counter;
