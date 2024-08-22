import { Box, Button, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
export default function Home() {
  const navigate = useNavigate();
  return (
    <>
      <Container
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box textAlign="center">
          <Typography>Tela do cliente</Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            style={{ width: "100%" }}
            onClick={() => navigate("/")}
          >
            voltar
          </Button>
        </Box>
      </Container>
    </>
  );
}
