import Banner from "@/components/Banner";
import Cards from "@/components/Cards";
import bannerImage from "@/assets/homepage-banner.jpg";
import { useHousings } from "@/hooks/useHousings";

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
      <Cards housings={housings} />
    </main>
  );
};

export default Home;
