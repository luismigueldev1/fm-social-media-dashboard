import React from "react";
import "./styles.scss";
export default function CardSmall({
  action = "Page Views",
  quantity = 87,
  socialNetwork = "facebook",
  total = 3,
}) {
  const isPositive = Math.sign(total) === 1 ? "positive" : "negative";
  const arrowIcon = Math.sign(total) === 1 ? "up" : "down";
  const arrow = `./assets/images/icon-${arrowIcon}.svg`;
  return (
    <div className="card-small">
      <div className="card-small_page-views">
        <h3>{action}</h3>
        <h1>{quantity}</h1>
      </div>

      <div className="card-small_network">
        <div className="card-small_network_box">
          <img
            src={`./assets/images/icon-${socialNetwork}.svg`}
            alt={socialNetwork}
          />
        </div>

        <div className="card-small_arrow_box">
          <div>
            <img src={arrow} alt={arrowIcon} />
          </div>
          <p className={isPositive}>
            <strong> {total}</strong>
          </p>
        </div>
      </div>
    </div>
  );
}
