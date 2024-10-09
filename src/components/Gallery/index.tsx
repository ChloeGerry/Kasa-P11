import { useState } from "react";

type GalleryProps = {
  hostPictures: string[];
};

const Gallery = ({ hostPictures }: GalleryProps) => {
  const [index, setIndex] = useState(0);
  let currentIndex = null;

  const previousPicture = () => {
    currentIndex = index - 1;
    setIndex(currentIndex < 0 ? hostPictures.length - 1 : currentIndex);
  };

  const nextPicture = () => {
    currentIndex = index + 1;
    setIndex(currentIndex >= hostPictures.length ? 0 : currentIndex);
  };

  return (
    <section className="gallery">
      {hostPictures.length > 1 && (
        <>
          <svg
            onClick={() => previousPicture()}
            className="gallery__arrows gallery__arrow--left"
            width="48"
            height="80"
            viewBox="0 0 48 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M47.04 7.78312L39.92 0.703125L0.359985 40.3031L39.96 79.9031L47.04 72.8231L14.52 40.3031L47.04 7.78312Z"
              fill="white"
            />
          </svg>
          <svg
            onClick={() => nextPicture()}
            className="gallery__arrows gallery__arrow--right"
            width="48"
            height="80"
            viewBox="0 0 48 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.960022 72.3458L8.04002 79.4258L47.64 39.8258L8.04002 0.22583L0.960022 7.30583L33.48 39.8258L0.960022 72.3458Z"
              fill="white"
            />
          </svg>
          <p className="gallery__index">
            {index + 1}/{hostPictures.length}
          </p>
        </>
      )}
      <img
        className="gallery__picture"
        key={`${hostPictures[index]}-${index}`}
        src={hostPictures[index]}
        alt="housing"
      />
    </section>
  );
};

export default Gallery;
