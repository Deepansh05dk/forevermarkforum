import React from "react";
import "./AfterRegister.css";

function AfterRegister() {
  return (
    <div>
      <div className="coming-soon-content text-center">
        {/* <img src={Logo} alt="logo" className="fullwidth" /> */}
        <p style={{ fontFamily: "Didot-HTF-L42" }} className="fullwidth thanks">
          Thank you for registering!
        </p>
        <p className="fullwidth">
          All details pertaining to the Form will be shared
          <br />
          on the registered email id.
        </p>
        <p
          className="fullwidth"
          style={{
            fontSize: "4vh",
          }}
        >
          See you on 24th August, 2021!
        </p>
        {/* <p className="coming-soon-white">Coming Soon</p> */}

        {/*
          <div className="mt-5 text-center footer-after-register">
            <ul className="footer-links">
              <li>
                <a
                  href="https://www.forevermark.com/en-in/privacy-policy/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Terms of Use
                </a>
              </li>
              <li>
                <a
                  href="https://www.forevermark.com/en-in/privacy-policy/"
                  target="_blank"
                  rel="noreferrer"
                  className="last"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
       
          */}
      </div>
    </div>
  );
}

export default AfterRegister;
