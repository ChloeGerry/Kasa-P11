import Banner from "@/components/Banner";
import bannerImage from "@/assets/homepage-banner.jpg";

const Home = () => {
  return (
    <main>
      <Banner margin="large" title="Chez vous, partout et ailleurs" image={bannerImage} />
    </main>
  );
};

export default Home;
