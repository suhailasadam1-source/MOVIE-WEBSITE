import { useState } from 'react';
import './MovieCard.css';

function MovieCard({ movie }) {
  // Hover doesn't exist on touch devices, so a tap toggles the same
  // overlay/zoom state that a mouse hover triggers on desktop.
  const [isActive, setIsActive] = useState(false);

  return (
    <li className={`movie-card ${isActive ? 'is-active' : ''}`}>
      <div
        className="movie-card__poster-wrap"
        onClick={() => setIsActive((v) => !v)}
        role="button"
        tabIndex={0}
        aria-label={`Preview ${movie.title}`}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setIsActive((v) => !v);
          }
        }}
      >
        <img className="movie-card__poster" src={movie.poster} alt={`${movie.title} poster`} loading="lazy" />
        <span className="movie-card__rating">★ {movie.rating}</span>
        <div className="movie-card__hover-actions">
          <button
            type="button"
            className="movie-card__play"
            aria-label={`Play ${movie.title} trailer`}
            onClick={(e) => e.stopPropagation()}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>
        </div>
      </div>
      <a href="#home" className="movie-card__link">
        <h3 className="movie-card__title">{movie.title}</h3>
        <p className="movie-card__meta">
          {movie.year} · {movie.genre}
        </p>
      </a>
    </li>
  );
}

export default MovieCard;
