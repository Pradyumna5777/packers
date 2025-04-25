// src/App.jsx
import React from "react";
import Navbar from "./components/Navbar";
import AppRoutes from "./routes/AppRoutes";
import Footer from "./components/Footer";
import SmartBot from "./components/SmartBot";
import { Helmet } from "react-helmet";


export default function App() {
  return (
    <>
      <Helmet>
        <title>Thermo Packers | Thermocol & EPS Packaging Solutions</title>
        <meta name="description" content="Leading manufacturer of thermocol packaging, insulation sheets, and EPS products for industrial and commercial use." />
        <link rel="canonical" href="https://www.thermopackers.com/" />
        <meta property="og:title" content="Thermo Packers" />
        <meta property="og:description" content="Premium Thermocol & EPS packaging and insulation." />
        <meta property="og:image" content="https://www.thermopackers.com/images/banner.jpg" />
        <meta property="og:url" content="https://www.thermopackers.com/" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

        <Navbar />
        <SmartBot />
        <AppRoutes />
        <Footer />
    </>
  );
}
