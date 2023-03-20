import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footerWrapper">
          <div className="left">
            <div className="fHead">About</div>
            <div className="fText">
              <ul>
                <li>About Centura Health</li>
                <li>Our ecosysytem</li>
                <li>Our support</li>
                <li>Stories and newsroom</li>
              </ul>
            </div>
          </div>
          <div className="middle">
            <div className="fHead">Patient Tools</div>
            <div className="fText">
              <ul>
                <li>patient portal</li>
                <li>billing and financial</li>
                <li>medical records</li>
              </ul>
            </div>
          </div>
          <div className="right">
            <div className="fHead">Developers</div>
            <div className="fText">
              <ul>
                <li>premgameworld@gmail.com</li>
                <li>deepakkumarkasyap12@gmail.com</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="copy">COPYRIGHT &COPY; CHIKITSA</div>
      </div>
    </>
  );
};

export default Footer;
