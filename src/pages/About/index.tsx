import Banner from "@/components/Banner";
import Collapse from "@/components/Collapse";
import { additionnalInformations } from "@/services/additionnalInformations";
import bannerImage from "@/assets/about-banner.jpg";

const About = () => {
  return (
    <main>
      <Banner margin="medium" image={bannerImage} filter="enlighten" />
      <section className="collapses__wrapper">
        {additionnalInformations.map(({ size, title, text }) => {
          return <Collapse key={title} size={size} title={title} text={text} />;
        })}
      </section>
    </main>
  );
};

export default About;
