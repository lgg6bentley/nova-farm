import React from "react";
import companyLogo from "./assets/company-logo.png";

const Header = () => {
  return (
    <header>
      <img src={companyLogo} alt="Company Logo" />
      <h1>Nova Scotia Agriculture</h1>
    </header>
  );
};

export default Header;