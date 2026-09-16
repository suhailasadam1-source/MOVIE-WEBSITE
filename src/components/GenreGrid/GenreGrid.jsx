import './GenreGrid.css';

function GenreGrid({ genres }) {
  return (
    <section className="section genre-grid">
      <div className="container">
        <div className="section-heading">
          <div className="section-heading__text">
            <h2>Explore by Genre</h2>
            <p>Find stories that match your mood</p>
          </div>
        </div>

        <ul className="genre-grid__list">
          {genres.map((genre) => (
            <li key={genre.id} className="genre-card">
              <a href="#home" className="genre-card__link">
                <img className="genre-card__image" src={genre.image} alt="" loading="lazy" />
                <div className="genre-card__scrim" aria-hidden="true" />
                <div className="genre-card__text">
                  <h3>{genre.name}</h3>
                  <span>{genre.count}</span>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default GenreGrid;
