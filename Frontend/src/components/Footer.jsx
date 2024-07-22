// import React from "react";

import KromaApps from "../assets/KromaApps.png";

const Footer = () => {
  return (
    <div className="fixed inset-x-0 bottom-0 flex md:justify-left justify-center p-4 bg-white shadow-lg">
      {" "}
      {/*remove the fixed from here when homepage is ready*/}
      <div>
        <img src={KromaApps} alt="Kroma Apps" className="h-8" />
      </div>
    </div>
  );
};

export default Footer;
