import React from "react";
import "./styles.scss";
export default function CardLarge({
  socialNetwork = "facebook",
  nickname = "@nathanf",
  followers = 1987,
  today = 12,
}) {
  const isPositive = Math.sign(today) === 1 ? "positive" : "negative";
  const arrowIcon = Math.sign(today) === 1 ? "up" : "down";
  const arrow = `./assets/images/icon-${arrowIcon}.svg`;
  const socialNetworkImage = `./assets/images/icon-${socialNetwork}.svg`;
  return (
    <div className={`card-large ${socialNetwork}`}>
      <div className="card-large_header">
        <div>
          <img src={socialNetworkImage} alt={socialNetwork} />
        </div>
        <p>
          <strong> {nickname}</strong>
        </p>
      </div>

      <div className="card-large_body">
        <h1>{followers}</h1>
        <p>
          <span>
            {socialNetwork === "youtube" ? "SUSCRIBERS" : "FOLLOWERS"}
          </span>
        </p>
      </div>

      <div className="card-large_footer">
        <div>
          <img src={arrow} alt={arrowIcon} />
        </div>
        <p className={isPositive}>
          <strong>{today} Today</strong>
        </p>
      </div>
    </div>
  );
}
