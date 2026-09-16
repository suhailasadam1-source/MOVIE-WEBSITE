import { useRef } from 'react';
import MovieCard from '../MovieCard/MovieCard.jsx';
import './MovieRow.css';

function MovieRow({ title, subtitle, movies, filters }) {
  const trackRef = useRef(null);

  const scrollByAmount = (direction) => {
    const track = trackRef.current;
    if (!track) return;
    const amount = track.clientWidth * 0.8 * direction;
    track.scrollBy({ left: amount, behavior: 'smooth' });
  };

  return (
    <section className="section movie-row">
      <div className="container">
        <div className="section-heading">
          <div className="section-heading__text">
            <h2>{title}</h2>
            {subtitle && <p>{subtitle}</p>}
          </div>

          {filters ? (
            <div className="movie-row__filters">
              {filters.map((filter, i) => (
                <button key={filter} className={`movie-row__filter ${i === 0 ? 'is-active' : ''}`}>
                  {filter}
                </button>
              ))}
            </div>
          ) : (
            <div className="row-controls">
              <button aria-label={`Scroll ${title} left`} onClick={() => scrollByAmount(-1)}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button aria-label={`Scroll ${title} right`} onClick={() => scrollByAmount(1)}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          )}
        </div>

        <ul className="movie-row__track" ref={trackRef}>
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default MovieRow;
