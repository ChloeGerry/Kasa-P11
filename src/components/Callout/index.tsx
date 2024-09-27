import { Link } from "react-router-dom";

type CalloutProps = {
  text: string;
  hasRedirection: boolean;
};

const Callout = ({ text, hasRedirection }: CalloutProps) => {
  return (
    <div className="callout">
      <p className="callout__text">{text}</p>
      {hasRedirection && (
        <Link to="/" className="callout__link">
          Retourner sur la page d'accueil
        </Link>
      )}
    </div>
  );
};

export default Callout;
