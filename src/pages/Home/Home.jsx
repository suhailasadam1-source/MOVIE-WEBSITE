import Hero from '../../components/Hero/Hero.jsx';
import MovieRow from '../../components/MovieRow/MovieRow.jsx';
import GenreGrid from '../../components/GenreGrid/GenreGrid.jsx';
import FeaturedBanner from '../../components/FeaturedBanner/FeaturedBanner.jsx';
import MovieDetails from '../../components/MovieDetails/MovieDetails.jsx';
import Newsletter from '../../components/Newsletter/Newsletter.jsx';
import {
  trendingMovies,
  popularMovies,
  relatedMovies,
  genres,
  cast,
  featuredMovie,
} from '../../data/movies.js';

function Home() {
  return (
    <main>
      <Hero movie={featuredMovie} />

      <MovieRow title="Trending Now" subtitle="What audiences are streaming right now" movies={trendingMovies} />

      <MovieRow
        title="Popular Movies"
        subtitle="Handpicked hits, refreshed every week"
        movies={popularMovies}
        filters={['Latest', 'Top Rated']}
      />

      <GenreGrid genres={genres} />

      <FeaturedBanner movie={featuredMovie} />

      <MovieDetails movie={featuredMovie} cast={cast} />

      <MovieRow title="You May Also Like" subtitle="More space epics worth your time" movies={relatedMovies} />

      <Newsletter />
    </main>
  );
}

export default Home;
