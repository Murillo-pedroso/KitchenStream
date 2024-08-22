import { Box, Button, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
export default function Home() {
  const navigate = useNavigate();
  return (
    <>
      <Container
        maxWidth="sm"
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box textAlign="center">
          <Button
            variant="contained"
            color="primary"
            size="large"
            style={{ marginBottom: "20px", width: "100%" }}
            onClick={() => navigate("/client")}
          >
            Sou cliente
          </Button>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            style={{ width: "100%" }}
            onClick={() => navigate("/kitchen")}
          >
            Sou cozinheiro
          </Button>
        </Box>
      </Container>
    </>
  );
}
