import { Link } from "react-router-dom";

type CalloutProps = {
  text: string;
  hasRedirection: boolean;
  color: string;
  linkText?: string;
};

const Callout = ({ text, hasRedirection, color, linkText }: CalloutProps) => {
  return (
    <div className="callout" color={color} style={{ backgroundColor: color }}>
      <p className="callout__text">{text}</p>
      {hasRedirection && (
        <Link to="/" className="callout__link">
          {linkText}
        </Link>
      )}
    </div>
  );
};

export default Callout;
