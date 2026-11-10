function About() {
  return (
    <section id="about" className="about">

      <div className="about-image">
        <img
          src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=900"
          alt="Beautiful and comfortable home interior"
        />
      </div>

      <div className="about-content">
        <span className="eyebrow">ABOUT BRIGHTHOME</span>

        <h2>A Cleaner Space, A Better Life</h2>

        <p>
          At BrightHome, we believe a clean home creates
          a happier and healthier environment.
          Our professional team is dedicated to making
          your spaces fresh, comfortable and welcoming.
        </p>

        <p>
          We focus on quality, reliability and customer
          satisfaction with every cleaning service.
        </p>

        <a href="#contact" className="btn">
          Get in Touch
        </a>
      </div>

    </section>
  );
}

export default About;