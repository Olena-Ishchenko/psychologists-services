import { NavLink } from "react-router-dom";

const AppBar = () => {
  return (
    <div>
      <nav>
        <NavLink to="/">Home</NavLink>

        <NavLink to="/psychologists">Psychologists</NavLink>

        <NavLink to="/favorites">Favorites</NavLink>
      </nav>
    </div>
  );
};

export default AppBar;
