import './Hero.css';

function Hero({ movie }) {
  return (
    <section className="hero" id="home">
      <div className="hero__media" style={{ backgroundImage: `url(${movie.backdrop})` }} aria-hidden="true" />
      <div className="hero__scrim" aria-hidden="true" />

      <div className="hero__content container">
        <span className="hero__eyebrow">Featured this week</span>
        <h1 className="hero__title">{movie.title}</h1>

        <div className="hero__meta">
          <span className="hero__meta-item hero__rating">★ {movie.rating}</span>
          <span className="hero__meta-item">{movie.year}</span>
          <span className="hero__meta-item">{movie.genre}</span>
          <span className="hero__meta-item">{movie.duration}</span>
        </div>

        <p className="hero__description">{movie.description}</p>

        <div className="hero__actions">
          <button className="btn btn-primary">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
            Watch Trailer
          </button>
          <button className="btn btn-outline">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
            Add to My List
          </button>
        </div>
      </div>

      <div className="hero__pagination" aria-hidden="true">
        <span className="is-active" />
        <span />
        <span />
      </div>
    </section>
  );
}

export default Hero;
