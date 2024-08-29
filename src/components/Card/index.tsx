type CardProps = {
  title: string;
  cover: string;
};

const Card = ({ title, cover }: CardProps) => {
  return (
    <>
      <img src={cover} alt="housing" className="card__image" />
      {title && <h2 className="card__title">{title}</h2>}
    </>
  );
};

export default Card;
