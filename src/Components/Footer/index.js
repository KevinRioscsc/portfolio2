import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="pad">
      <footer>
        <p className="copyright gray">
          © 2022 Kevin Rios. All Rights Reserved.
        </p>
        <div className="info">
          <p className="contactme">
            <span className="gray">Email:</span> rioskevin89@gmail.com
          </p>
          <p className="contactme">
            <span className="gray">Nmb:</span> 562-355-2256
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
