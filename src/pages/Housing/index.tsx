import { useParams } from "react-router-dom";
import Callout from "@/components/Callout";
import Slideshow from "@/components/Slideshow";
import Tag from "@/components/Tag";
import Star from "@/components/Star";
import Collapse from "@/components/Collapse";
import { useHousings } from "@/hooks/useHousings";
import { HousingType } from "@/hooks/types";
import { primaryColor, secondaryColor } from "@/services/constants";

const Housing = () => {
  const hostId = useParams();
  const housings: HousingType[] | null = useHousings();

  if (!housings || !housings.length) {
    return (
      <div className="housing__callout--wrapper">
        <Callout hasRedirection={true} text="Il semble y avoir un problème..." />
      </div>
    );
  }

  const housing = housings.find((host) => {
    return host.id === hostId.id;
  });

  if (!housing) {
    return (
      <div className="housing__callout--wrapper">
        <Callout hasRedirection={true} text="Il semble y avoir un problème..." />
      </div>
    );
  }

  const hostRating = Number(housing.rating);
  let ratings = Array(5).fill(null);

  ratings.forEach((_, index) => {
    ratings[index] = index + 1;
  });

  if (
    !housing.pictures ||
    !housing.tags ||
    !housing.host ||
    !housing.equipments ||
    !housing.description
  ) {
    return (
      <div className="housing__callout--wrapper">
        <Callout hasRedirection={true} text="Il semble y avoir un problème..." />
      </div>
    );
  }

  return (
    <main>
      <Slideshow hostPictures={housing.pictures} />
      <section className="housing">
        <div className="housing__informations">
          <div>
            <h1 className="housing__title">{housing.title}</h1>
            <p className="housing__location">{housing.location}</p>
            <div className="housing__tags--wrapper">
              {housing.tags.map((tagLabel) => (
                <Tag key={tagLabel} tagLabel={tagLabel} />
              ))}
            </div>
          </div>
          <div className="housing__hostAndRating--wrapper">
            <div className="housing__host">
              <p className="housing__host--name">{housing.host.name}</p>
              <img className="housing__host--picture" src={housing.host.picture} alt="host" />
            </div>
            <div className="housing__stars--wrapper">
              {ratings.map((rate) => (
                <Star key={rate} color={rate <= hostRating ? primaryColor : secondaryColor} />
              ))}
            </div>
          </div>
        </div>
        <div className="housing__collapse--wrapper">
          <Collapse size="medium" title="Description" text={housing.description} />
          <Collapse size="medium" title="Équipements" text={housing.equipments} />
        </div>
      </section>
    </main>
  );
};

export default Housing;
