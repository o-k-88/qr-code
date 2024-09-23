import { QRCodeSVG } from "qrcode.react";
import { useState } from "react";
import { GENERATE_DATA } from "../../constants";
import { Box, TextField, Button, Typography, Alert } from "@mui/material";

export const QrCodeGenerator = () => {
  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState("");
  const [isInputEmpty, setIsInputEmpty] = useState(false);

  const onClickHandler = (e) => {
    if (inputValue.trim() === "") {
      setIsInputEmpty(true);
    } else {
      setIsInputEmpty(false);
      setResult(inputValue);
      setInputValue("");
      const prevData = JSON.parse(localStorage.getItem(GENERATE_DATA) || "[]");
      localStorage.setItem(GENERATE_DATA, JSON.stringify([...prevData, inputValue]));
      const input = document.querySelector("#generate-text");
      input.value = "";
    }
  };

  const onChangeHandler = (e) => {
    setInputValue(e.target.value);
    setResult("");
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "calc(100vh - 128px)",
        bgcolor: "#f5f5f5",
        p: 3,
      }}
    >
      <TextField
        id="generate-text"
        variant="outlined"
        label="Enter text"
        onChange={onChangeHandler}
        placeholder="Enter text..."
        fullWidth
        sx={{ mb: 2, maxWidth: 400 }}
      />
      <Button variant="contained" color="primary" onClick={onClickHandler} sx={{ mb: 2 }}>
        Generate QR code
      </Button>

      {isInputEmpty && (
        <Alert severity="error" sx={{ mb: 2 }}>
          Please enter some text before generating!
        </Alert>
      )}

      {result !== "" && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            mt: 2,
          }}
        >
          <QRCodeSVG value={result} size={200} />
          <Typography variant="h6" sx={{ mt: 2 }}>
            Your QR code is ready
          </Typography>
        </Box>
      )}
    </Box>
  );
};
