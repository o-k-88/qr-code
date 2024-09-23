import { useState, useEffect } from "react";
import { QRCodeSVG } from "qrcode.react";
import { Box, Typography, Paper, Grid } from "@mui/material";
import { GENERATE_DATA } from "../../constants";
import Loader from "../Loader/Loader";

export const GenerateHistory = () => {
  const [history, setHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    const localStorageHistory = JSON.parse(localStorage.getItem(GENERATE_DATA) || "[]");
    setHistory(localStorageHistory);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <Box
          sx={{
            textAlign: "center",
            p: 3,
          }}
        >
          {history.length ? (
            <>
              <Typography variant="h6" color="textSecondary">
                Your scanned items
              </Typography>
              <Grid container spacing={2}>
                {history.map((item, index) => (
                  <Grid item xs={12} sm={6} md={3} key={index}>
                    <Paper
                      elevation={3}
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        p: 2,
                        m: 2,
                      }}
                    >
                      <Typography
                        color="secondary"
                        variant="body1"
                        sx={{ mb: 1, wordBreak: "break-all" }}
                      >
                        {item}
                      </Typography>
                      <QRCodeSVG value={item} size={100} />
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </>
          ) : (
            <Typography variant="h6" color="textSecondary">
              There is no history to show...
            </Typography>
          )}
        </Box>
      )}
    </>
  );
};
