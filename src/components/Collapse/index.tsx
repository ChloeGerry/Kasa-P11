import { useState } from "react";

type CollapseProps = {
  title: string;
  text: string | string[];
  size: "medium" | "large";
};

const Collapse = ({ title, text, size }: CollapseProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const collapseWrapperClass =
    size === "medium" ? "collapse__wrapper--medium" : "collapse__wrapper--large";
  const collapseIsOpenClass = isOpen && "open";
  const collapseTextWrapperClass =
    size === "medium" ? "collapse__text-wrapper-medium" : "collapse__text-wrapper-large";

  return (
    <article className={`collapse ${collapseWrapperClass} ${collapseIsOpenClass}`}>
      <div className="collapse__title-wrapper">
        <p className="collapse__title">{title}</p>
        <svg
          onClick={() => setIsOpen(!isOpen)}
          className={`collapse__arrow ${collapseIsOpenClass}`}
          width="25"
          height="15"
          viewBox="0 0 25 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.2103 13.8522C12.5409 14.5216 11.4538 14.5216 10.7843 13.8522L0.502064 3.56991C-0.167355 2.90049 -0.167355 1.81335 0.502064 1.14393C1.17148 0.474515 2.25862 0.474515 2.92804 1.14393L12 10.2159L21.072 1.14929C21.7414 0.479871 22.8285 0.479871 23.4979 1.14929C24.1674 1.81871 24.1674 2.90585 23.4979 3.57526L13.2157 13.8575L13.2103 13.8522Z"
            fill="white"
          />
        </svg>
      </div>
      <div className={`collapse__text-wrapper ${collapseIsOpenClass} ${collapseTextWrapperClass}`}>
        {Array.isArray(text) ? (
          text.map((equipment: string, index: number) => (
            <p className="collapse__text" key={`${index}-${equipment}`}>
              {equipment}
            </p>
          ))
        ) : (
          <p className="collapse__text">{text}</p>
        )}
      </div>
    </article>
  );
};

export default Collapse;
