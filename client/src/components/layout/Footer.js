import React from "react";

function Footer() {
  return (
    <footer className="footer mt-auto py-5">
      <div className="container">
        <div className="text-muted text-center">
          &copy; Damjan Vučina, {new Date().getFullYear()}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
