import Callout from "@/components/Callout";

const UnvailableHousing = () => {
  return (
    <div className="housing__callout--wrapper">
      <Callout
        hasRedirection={true}
        text="Logement indisponible...."
        color="#61c2cb"
        linkText="Retourner sur la page d'accueil"
      />
    </div>
  );
};

export default UnvailableHousing;
