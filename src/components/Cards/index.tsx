import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "@/components/Card";
import { Housing } from "./types";

const Cards = () => {
  const [housings, setHousings] = useState<Housing[]>([]);

  useEffect(() => {
    fetch("housings.json")
      .then((result) => result.json())
      .then((housings) => setHousings(housings))
      .catch((error) => console.log("Error when fetching housings", error));
  }, []);

  return (
    <section className="cards__wrapper">
      {housings.map(({ id, title, cover }) => (
        <article key={id}>
          <Link to={`/housing/${id}`} className="card__wrapper">
            <Card cover={cover} title={title} />
          </Link>
        </article>
      ))}
    </section>
  );
};

export default Cards;
