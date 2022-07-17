import { useAuthStore } from "../../hooks";
import "./Navbar.css";

export const Navbar = () => {

  const { startLogout, user } = useAuthStore();

  return (
    <div className="navbar navbar-dark bg-dark mb-4 px-4 divNav">
      <span>
        <i className="fas fa-calendar-alt"></i>
        &nbsp;
        { user.name }
      </span>

      <button
        className="btn btn-outline-danger"
        onClick={ startLogout }
      >
          <i className="fas fa-sign-out-alt"></i>
          &nbsp;
          <span>Salir</span>
      </button>
    </div>
  );
};
