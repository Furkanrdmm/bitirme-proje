import React from "react";
import Header from "../components/Layout/Header/Header";
import Contact from "../components/Contact/Contact";

import Footer from "../components/Layout/Footer/Footer";

const ContactPage = () => {
  return (
    <React.Fragment>
      <Header />
      <Contact />

      <Footer />
    </React.Fragment>
  );
};

export default ContactPage;