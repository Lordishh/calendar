import "./Navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar navbar-dark bg-dark mb-4 px-4 divNav">
      <span>
        <i className="fas fa-calendar-alt"></i>
        &nbsp; Enuel
      </span>

      <button className="btn btn-outline-danger">
        <i className="fas fa-sign-out-alt"></i>
        <span>Salir</span>
      </button>
    </div>
  );
};
