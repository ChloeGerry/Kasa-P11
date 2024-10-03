import FooterLogo from "../Logo/FooterLogo";

const currentDate = new Date();
const currentYear = currentDate.getFullYear();

const Footer = () => {
  return (
    <footer className="footer">
      <FooterLogo />
      <p className="footer__copyright">© {currentYear} Kasa. All rights reserved</p>
    </footer>
  );
};

export default Footer;
