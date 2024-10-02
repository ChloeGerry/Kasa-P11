import Banner from "@/components/Banner";
import Cards from "@/components/Cards";
import bannerImage from "@/assets/homepage-banner.jpg";
import { useHousings } from "@/hooks/useHousings";
import Callout from "@/components/Callout";

const Home = () => {
  const housings = useHousings();

  return (
    <main>
      <Banner
        margin="large"
        title="Chez vous, partout et ailleurs"
        image={bannerImage}
        filter="darken"
      />
      {housings ? (
        <Cards housings={housings} />
      ) : (
        <div className="housing__callout--wrapper">
          <Callout hasRedirection={false} text="Logements indisponible...." color="#61c2cb" />
        </div>
      )}
    </main>
  );
};

export default Home;
