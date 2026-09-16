import './FeaturedBanner.css';

function FeaturedBanner({ movie }) {
  return (
    <section className="section featured-banner">
      <div className="container">
        <span className="featured-banner__eyebrow">Official trailer</span>
        <div className="featured-banner__frame">
          <img className="featured-banner__image" src={movie.backdrop} alt={`${movie.title} trailer thumbnail`} loading="lazy" />
          <div className="featured-banner__scrim" aria-hidden="true" />
          <button className="featured-banner__play" aria-label={`Play ${movie.title} trailer`}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>
          <p className="featured-banner__caption">{movie.title} — Official Trailer</p>
        </div>
      </div>
    </section>
  );
}

export default FeaturedBanner;
