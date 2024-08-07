import React from "react";
import "../../styles/Payment.scss";
import InfiniteLooper from "../utils/InfiniteLooper";

interface PaymetProps {
  footer?: string;
}

function Payment({ footer }: PaymetProps) {
  return (
    <div>
      <div
        className="payContainer"
        style={
          footer === "yes"
            ? { backgroundColor: "#212121" }
            : { backgroundColor: "#0D7377" }
        }
      >
        <div className="payDiv">
          <InfiniteLooper speed={10} direction="left" publisher={false}>
            <img
              className="logo"
              loading="lazy"
              alt="payloado"
              src="https://solarops.s3.eu-west-1.amazonaws.com/sonnenspiele/images/en/pay_paylado-short-white.svg"
            ></img>
            <img
              className="logo"
              loading="lazy"
              alt="paypal"
              src="https://solarops.s3.eu-west-1.amazonaws.com/sonnenspiele/images/de/pay_paypal_white.svg"
            ></img>
            <img
              className="logo"
              loading="lazy"
              alt="sofort"
              src="https://solarops.s3.eu-west-1.amazonaws.com/sonnenspiele/images/de/03_pay_sofort-white.svg"
            ></img>
            <img
              className="logo"
              loading="lazy"
              alt="mastercard"
              src="https://solarops.s3.eu-west-1.amazonaws.com/sonnenspiele/images/de/pay_mastercard-long-white.svg"
            ></img>
            <img
              className="logo visa"
              loading="lazy"
              alt="visa"
              src="https://solarops.s3.eu-west-1.amazonaws.com/sonnenspiele/images/de/pay_visa-white.svg"
            ></img>
          </InfiniteLooper>
        </div>
      </div>
    </div>
  );
}

export default Payment;
