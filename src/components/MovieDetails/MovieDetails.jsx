import './MovieDetails.css';

function MovieDetails({ movie, cast }) {
  return (
    <section className="section movie-details">
      <div className="container movie-details__grid">
        <div className="movie-details__main">
          <h2 className="movie-details__title">{movie.title}</h2>

          <div className="movie-details__tags">
            <span className="movie-details__tag">{movie.genre}</span>
            <span className="movie-details__tag">{movie.duration}</span>
            <span className="movie-details__tag movie-details__tag--rating">★ {movie.rating}</span>
          </div>

          <p className="movie-details__description">{movie.description}</p>

          <div className="movie-details__cast">
            <h3>Full Cast</h3>
            <ul className="movie-details__cast-list">
              {cast.map((person) => (
                <li key={person.id} className="cast-chip">
                  <img src={person.avatar} alt="" />
                  <div>
                    <p className="cast-chip__name">{person.name}</p>
                    <p className="cast-chip__role">{person.role}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <aside className="movie-details__aside">
          <div className="award-card">
            <span className="award-card__badge">Award-winning</span>
            <h3>{movie.award}</h3>
            <p>{movie.awardNote}</p>
          </div>

          <dl className="info-list">
            <div>
              <dt>Director</dt>
              <dd>{movie.director}</dd>
            </div>
            <div>
              <dt>Writer</dt>
              <dd>{movie.writer}</dd>
            </div>
            <div>
              <dt>Release date</dt>
              <dd>{movie.releaseDate}</dd>
            </div>
            <div>
              <dt>Studio</dt>
              <dd>{movie.studio}</dd>
            </div>
          </dl>

          <button className="btn btn-primary movie-details__stream-btn">Start Streaming Now</button>
          <a href="#home" className="movie-details__imdb-link">
            Also watch on IMDb
          </a>
        </aside>
      </div>
    </section>
  );
}

export default MovieDetails;
