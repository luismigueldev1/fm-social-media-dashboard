import React from "react";
import CardLarge from "../CardLarge";
import "./styles.scss";

const cards = [
  {
    id: 1,
    socialNetwork: "facebook",
    nickname: "@nathanf",
    followers: 1987,
    today: 12,
  },
  {
    id: 2,
    socialNetwork: "twitter",
    nickname: "@nathanf",
    followers: 1044,
    today: 99,
  },
  {
    id: 3,
    socialNetwork: "instagram",
    nickname: "@realnathanf",
    followers: "11k",
    today: 1099,
  },
  {
    id: 4,
    socialNetwork: "youtube",
    nickname: "Nathan F",
    followers: 8239,
    today: -144,
  },
];

export default function CardLargeList() {
  return (
    <div className="cards-grid">
      {cards.map((card) => (
        <CardLarge key={card.id} {...card} />
      ))}
    </div>
  );
}
