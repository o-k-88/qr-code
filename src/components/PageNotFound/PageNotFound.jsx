import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        bgcolor: "#f5f5f5",
        textAlign: "center",
        p: 3,
      }}
    >
      <Typography variant="h1" color="primary" sx={{ fontWeight: "bold", mb: 2 }}>
        404
      </Typography>
      <Typography variant="h5" sx={{ mb: 2 }}>
        Oops! Page Not Found
      </Typography>
      <Typography variant="body1" color="textSecondary" sx={{ mb: 4 }}>
        The page you are looking for doesn't exist or has been moved.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        component={Link}
        to="/"
        sx={{ textTransform: "none", padding: "10px 20px" }}
      >
        Go Back Home
      </Button>
    </Box>
  );
};

export default PageNotFound;
