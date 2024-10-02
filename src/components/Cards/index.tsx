import { Link } from "react-router-dom";
import Card from "@/components/Card";
import { HousingType } from "@/hooks/types";

type CardsProps = {
  housings: HousingType[] | null;
};

const Cards = ({ housings }: CardsProps) => {
  return (
    <section className="cards__wrapper">
      {!housings && <p>Il n'y a pas de logements à afficher</p>}
      {housings &&
        housings.map(({ id, title, cover }) => (
          <article key={id} className="card">
            <Link to={`/housing/${id}`} className="card__wrapper">
              <Card cover={cover} title={title} />
            </Link>
          </article>
        ))}
    </section>
  );
};

export default Cards;
