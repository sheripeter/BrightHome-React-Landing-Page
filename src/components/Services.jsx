function Services() {
  return (
    <section id="services" className="services">
        <span className="eyebrow">BRIGHTHOME OFFERS</span>
      <h2>Our Cleaning Services</h2>

      <p className="services-intro">
        Professional cleaning solutions for every home.
      </p>

      <div className="service-container">

        <div className="service-card">
          <img
            src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600"
            alt="Home cleaning"
          />
          <h3>Home Cleaning</h3>
          <p>
            Keep your home fresh, clean and comfortable.
          </p>
        </div>

        <div className="service-card">
          <img
            src="https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=600"
            alt="Deep cleaning"
          />
          <h3>Deep Cleaning</h3>
          <p>
            Detailed cleaning for every corner of your home.
          </p>
        </div>

        <div className="service-card">
          <img
            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=600"
            alt="Office cleaning"
          />
          <h3>Office Cleaning</h3>
          <p>
            Maintain a clean and productive workspace.
          </p>
        </div>

      </div>
    </section>
  );
}

export default Services;