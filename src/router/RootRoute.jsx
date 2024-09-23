import { Routes, Route } from "react-router-dom";

import { QrCodeGenerator } from "../components/QrCodeGenerator/QrCodeGenerator";
import { QrCodeScanner } from "../components/QrCodeScanner/QrCodeScanner";
import { Layout } from "../components/Layout/Layout";

import { ScannerHistory } from "../components/ScannerHistory/ScannerHistory";
import { GenerateHistory } from "../components/GenerateHistory/GenerateHistory";

export const RootRoute = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<QrCodeGenerator />} />
        <Route path="/scanner" element={<QrCodeScanner />} />
        <Route path="/scanner-history" element={<ScannerHistory />} />
        <Route path="/generate-history" element={<GenerateHistory />} />
      </Route>
    </Routes>
  );
};
