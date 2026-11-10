function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <span className="eyebrow">
          A FRESHER HOME STARTS HERE
        </span>

        <h1>
          A Cleaner Home.
          <br />
          A Happier Life.
        </h1>

        <p>
          Professional home cleaning services designed
          to give you more time to enjoy the things
          that matter.
        </p>

        <a href="#contact" className="btn">
          Book a Service
        </a>
      </div>

      <div className="hero-image">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1000"
          alt="Beautiful clean and modern home interior"
        />
      </div>
    </section>
  );
}

export default Hero;