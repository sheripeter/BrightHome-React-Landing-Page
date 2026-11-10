
function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-brand">
          <h2>BrightHome</h2>
          <p>
            A Cleaner Home. A Happier Life.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>

          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>Email: brighthome-email@example.com</p>
          <p>Phone: +9012345678</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} BrightHome Services.
          All rights reserved.
        </p>
      </div>

    </footer>
  );
}

export default Footer;
