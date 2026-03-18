import React from "react";

export const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="/">
            FinanceManager
          </a>

          <div className="ms-auto d-flex gap-2">
            {/* Botón Login */}
            <button
              className="btn btn-outline-light"
              data-bs-toggle="modal"
              data-bs-target="#loginModal"
            >
              Login
            </button>

            {/* Botón Register */}
            <button
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#registerModal"
            >
              Register
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};
