import NavigationBar from "../NavigationBar";
import HeaderLogo from "../Logo/HeaderLogo";

const Header = () => {
  return (
    <header className="header">
      <HeaderLogo />
      <NavigationBar />
    </header>
  );
};

export default Header;
