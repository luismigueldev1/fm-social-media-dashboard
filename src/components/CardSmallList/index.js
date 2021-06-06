import React from "react";
import CardSmall from "../CardSmall";
import "./styles.scss";

const cards = [
  {
    id: 11,
    action: "Page Views",
    quantity: 87,
    socialNetwork: "facebook",
    total: 3,
  },
  {
    id: 12,
    action: "Likes",
    quantity: 52,
    socialNetwork: "facebook",
    total: -2,
  },
  {
    id: 13,
    action: "Likes",
    quantity: 5462,
    socialNetwork: "instagram",
    total: 2257,
  },

  {
    id: 14,
    action: "Profile Views",
    quantity: "52k",
    socialNetwork: "instagram",
    total: 1375,
  },

  {
    id: 15,
    action: "Retweets",
    quantity: 117,
    socialNetwork: "twitter",
    total: 303,
  },
  {
    id: 16,
    action: "Likes",
    quantity: 507,
    socialNetwork: "twitter",
    total: 553,
  },

  {
    id: 17,
    action: "Likes",
    quantity: 107,
    socialNetwork: "youtube",
    total: -19,
  },
  {
    id: 18,
    action: "Total Views",
    quantity: 1407,
    socialNetwork: "youtube",
    total: -12,
  },
];

export default function CardSmallList() {
  return (
    <>
      <h1 className="card-small-list_title"> Overview - Today</h1>
      <div className="cards-grid-small">
        {cards.map((card) => (
          <CardSmall key={card.id} {...card} />
        ))}
      </div>
    </>
  );
}
