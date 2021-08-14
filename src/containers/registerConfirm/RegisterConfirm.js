import React from "react";
import Logo from "../../images/logo.png";
import FooterLogo from "../../images/white_footer_logo.png";
import "./registerconfirm.css";

function RegisterConfirm() {
  return (
    <>
      <div className="register-confirm" style={{ width: "100%" }}>
        {" "}
        <div className="register_confirm_header">
          <img src={Logo} alt="logo" />
        </div>
        <div className="text-center cmn-queries">
          <h2>
            Thank you for registering for the De Beers Forevermark Forum 2021
          </h2>
          <h2>We look forward to hosting you at the virtual Forum</h2>
        </div>
        <div className="bg-cont text-center ">
          <h2>Should you have any queries , kindly reach out to us at:</h2>
          <h2>
            <span>Email: </span>
            <a href="mailto: forum2021@forevermark.com">
              forum2021@forevermark.com
            </a>
          </h2>
          <h2>
            <span>Phone number: </span>
            <a href="tel:+91 7019433362">+91 7019433362</a>
          </h2>
        </div>
        <div className="text-center date-cont cmn-queries">
          <h2>
            Date: 24<sup>th</sup> ,25<sup>th</sup> ,26<sup>th</sup> August, 2021
          </h2>
        </div>
        <div className="text-center cmn-queries offerings">
          <h2>Discover our latest offerings at the Forum</h2>
          <ul>
            <li>Explore all the exciting zones of the Forum</li>
            <li>
              View the latest jewellery collections and marketing initiatives
            </li>
          </ul>
          <ul>
            <li>Interact with Forevermark manufactures and diamantaries</li>
            <li>Schedule appointments with our partners and team members</li>
          </ul>
        </div>
        <div className="text-center cmn-queries">
          <h2>
            Regards, <br />{" "}
            <span style={{ fontWeight: "600" }}>Team De Beers Forevermark</span>{" "}
          </h2>
        </div>
        <div className="text-center cmn-queries">
          * For best Forum experience, please use your laptop <br /> * Use{" "}
          <a href="https://www.google.com/">Google</a>,{" "}
          <a href="https://www.apple.com/in/safari/">Safari</a> or{" "}
          <a href="https://www.microsoft.com/en-us/edge">Microsoft Edge</a> for
          a wholesome experience{" "}
        </div>
        <div className="register_confirm_footer mt-4">
          <img src={FooterLogo} alt="logo" />
        </div>
      </div>
    </>
  );
}

export default RegisterConfirm;
