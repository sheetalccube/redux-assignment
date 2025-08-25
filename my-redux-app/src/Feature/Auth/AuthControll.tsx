import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../Store/Store";
import { login, logout } from "./AuthSlice";
import { Button, Card, CardContent, Typography, Box } from "@mui/material";

function AuthControll() {
  const { isAuthenticated, user } = useSelector(
    (state: RootState) => state.auth
  );
  const dispatch = useDispatch();

  return (
    <Box display="flex" justifyContent="center" mt={5}>
      <Card
        sx={{ width: 400, textAlign: "center", boxShadow: 3, borderRadius: 3 }}
      >
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Authentication Control
          </Typography>

          <Typography variant="body1" color="text.secondary" mb={2}>
            {isAuthenticated
              ? `You are logged in as ${user?.name}`
              : "You are not logged in."}
          </Typography>

          <Box display="flex" justifyContent="space-around" mt={2}>
            <Button
              variant="contained"
              color="error"
              onClick={() => dispatch(logout())}
              disabled={!isAuthenticated}
            >
              Logout
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={() => dispatch(login({ name: "John Doe", age: 30 }))}
              disabled={isAuthenticated}
            >
              Login
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}

export default AuthControll;
