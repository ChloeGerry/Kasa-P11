type BannerProps = {
  title?: string;
  image: string;
  margin: "large" | "medium";
  filter: "enlighten" | "darken";
};

const Banner = ({ title, image, margin, filter }: BannerProps) => {
  return (
    <section
      className={`banner ${
        margin === "large" ? "banner__section--large" : "banner__section--medium"
      }`}
    >
      <div className="banner__wrapper">
        <img
          src={image}
          alt="banner"
          className={`banner__image ${
            filter === "darken" ? "banner__image--darken" : "banner__image--enlighten"
          }`}
        />
        {title && <h1 className="banner__title">{title}</h1>}
      </div>
    </section>
  );
};

export default Banner;
