import { Scanner } from "@yudiel/react-qr-scanner";
import { useEffect, useState } from "react";
import { SCAN_DATA } from "../../constants";
import { Box, Typography, Paper, Button, Link } from "@mui/material";

export const QrCodeScanner = () => {
  const [scanned, setScanned] = useState(null);

  const scanHandler = (result) => {
    setScanned(result[0].rawValue);

    const prevData = JSON.parse(localStorage.getItem(SCAN_DATA) || "[]");

    localStorage.setItem(SCAN_DATA, JSON.stringify([...prevData, result[0].rawValue]));
  };

  const settings = {
    audio: false,
    finder: false,
  };

  return (
    <>
      <Box display="flex" flexDirection="column" alignItems="center" mt={3}>
        <Paper elevation={3} sx={{ padding: 2, width: "fit-content" }}>
          <Typography variant="h6" align="center" gutterBottom>
            QR Code Scanner
          </Typography>

          <Scanner
            onScan={scanHandler}
            components={settings}
            styles={{ container: { width: 300 } }}
          />
        </Paper>

        {scanned && (
          <Box mt={2} textAlign="center">
            <Typography variant="body1">Scanned Result:</Typography>
            <Link href={scanned} target="_blank" rel="noopener" underline="hover">
              {scanned}
            </Link>
            <Box mt={2}>
              <Button variant="contained" color="primary" onClick={() => setScanned(null)}>
                Scan Again
              </Button>
            </Box>
          </Box>
        )}
      </Box>
    </>
  );
};
