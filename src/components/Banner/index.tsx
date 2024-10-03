type BannerProps = {
  title?: string;
  image: string;
  margin: "large" | "medium";
  filter: "enlighten" | "darken";
};

const Banner = ({ title, image, margin, filter }: BannerProps) => {
  const bannerWrapperClass: string =
    margin === "large" ? "banner__section--large" : "banner__section--medium";

  const bannerImageClass: string =
    filter === "darken" ? "banner__image--darken" : "banner__image--enlighten";

  return (
    <section className={`banner ${bannerWrapperClass}`}>
      <div className="banner__wrapper">
        <img src={image} alt="banner" className={`banner__image ${bannerImageClass}`} />
        {title && <h1 className="banner__title">{title}</h1>}
      </div>
    </section>
  );
};

export default Banner;
