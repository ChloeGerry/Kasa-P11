import { NavLink } from "react-router-dom";

const NavigationBar = () => {
  const navigationBarClass = ({ isActive }: { isActive: boolean }): string =>
    isActive ? "active" : "";

  return (
    <nav className="navigationBar">
      <NavLink to="/" className={navigationBarClass}>
        Accueil
      </NavLink>
      <NavLink to="/about" className={navigationBarClass}>
        À propos
      </NavLink>
    </nav>
  );
};

export default NavigationBar;
