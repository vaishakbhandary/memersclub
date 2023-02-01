import React from "react";

import NavBar from "./Navbar";
import HeroSection from "./HeroSection";
import AppSection from "./AppSection";
import CardSection from "./CardSection";
import ContentSection from "./ContentSection";
import Footer from "./Footer";
import ContactUs from "./ContactUs";
import "./App.css";

const App = () => {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <ContentSection />

      <CardSection />
      <ContactUs />
      {/* <AppSection /> */}
      <Footer />
    </div>
  );
};

export default App;
