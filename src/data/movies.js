// Mock data layer. Replace with real API calls (e.g. TMDB) when a backend is connected.
// Posters use picsum.photos seeded placeholders so every image resolves reliably.

const poster = (seed, w = 300, h = 440) =>
  `https://picsum.photos/seed/${seed}/${w}/${h}`;

export const trendingMovies = [
  { id: 't1', title: 'Solitude', year: 2024, genre: 'Sci-Fi', rating: 8.1, poster: poster('solitude-cinemax') },
  { id: 't2', title: 'Inception', year: 2010, genre: 'Thriller', rating: 8.8, poster: poster('inception-cinemax') },
  { id: 't3', title: 'The Dark Knight', year: 2008, genre: 'Action', rating: 9.0, poster: poster('darkknight-cinemax') },
  { id: 't4', title: 'Every Man', year: 2023, genre: 'Drama', rating: 7.4, poster: poster('everyman-cinemax') },
  { id: 't5', title: 'Kryostasis', year: 2025, genre: 'Sci-Fi', rating: 7.9, poster: poster('kryostasis-cinemax') },
];

export const popularMovies = [
  { id: 'p1', title: 'Blade Runner 2049', year: 2017, genre: 'Sci-Fi', rating: 8.0, poster: poster('bladerunner-cinemax') },
  { id: 'p2', title: 'Gladiator II', year: 2024, genre: 'Action', rating: 7.6, poster: poster('gladiator-cinemax') },
  { id: 'p3', title: 'Spider-Play 2', year: 2023, genre: 'Animation', rating: 8.3, poster: poster('spiderplay-cinemax') },
  { id: 'p4', title: 'Parasite', year: 2019, genre: 'Thriller', rating: 8.6, poster: poster('parasite-cinemax') },
  { id: 'p5', title: 'Astral', year: 2024, genre: 'Fantasy', rating: 7.2, poster: poster('astral-cinemax') },
  { id: 'p6', title: 'The Ember', year: 2022, genre: 'Drama', rating: 7.8, poster: poster('ember-cinemax') },
];

export const relatedMovies = [
  { id: 'r1', title: 'First Man', year: 2018, genre: 'Biography', rating: 7.8, poster: poster('firstman-cinemax') },
  { id: 'r2', title: 'Gemini 9', year: 2021, genre: 'Sci-Fi', rating: 7.1, poster: poster('gemini9-cinemax') },
  { id: 'r3', title: '2001: A Space Odyssey', year: 1968, genre: 'Sci-Fi', rating: 8.3, poster: poster('2001-cinemax') },
  { id: 'r4', title: 'Gravity', year: 2013, genre: 'Thriller', rating: 7.7, poster: poster('gravity-cinemax') },
  { id: 'r5', title: 'Ad Astra', year: 2019, genre: 'Drama', rating: 6.5, poster: poster('adastra-cinemax') },
];

export const genres = [
  { id: 'g1', name: 'Action', count: '2,145 titles', image: poster('genre-action-cinemax', 400, 260) },
  { id: 'g2', name: 'Drama', count: '3,082 titles', image: poster('genre-drama-cinemax', 400, 260) },
  { id: 'g3', name: 'Sci-Fi', count: '1,290 titles', image: poster('genre-scifi-cinemax', 400, 260) },
  { id: 'g4', name: 'Drama', count: '1,764 titles', image: poster('genre-drama2-cinemax', 400, 260) },
  { id: 'g5', name: 'Notorious', count: '918 titles', image: poster('genre-notorious-cinemax', 400, 260) },
];

export const cast = [
  { id: 'c1', name: 'Matthew M.', role: 'Cooper', avatar: poster('cast-matthew-cinemax', 120, 120) },
  { id: 'c2', name: 'Anne Hathaway', role: 'Brand', avatar: poster('cast-anne-cinemax', 120, 120) },
  { id: 'c3', name: 'Jessica Chastain', role: 'Murph', avatar: poster('cast-jessica-cinemax', 120, 120) },
  { id: 'c4', name: 'Michael Caine', role: 'Professor Brand', avatar: poster('cast-michael-cinemax', 120, 120) },
];

export const featuredMovie = {
  title: 'Interstellar',
  tagline: 'Mankind was born on Earth. It was never meant to die here.',
  rating: 8.7,
  year: 2014,
  genre: 'Sci-Fi',
  duration: '2h 49m',
  description:
    "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival. As Earth becomes uninhabitable, a former pilot leads a mission beyond our galaxy, racing against time to find a new home among the stars.",
  award: 'Best Visual Effects',
  awardNote: 'Nominated for 5 Academy Awards, won Best Visual Effects at the 87th ceremony.',
  director: 'Christopher Nolan',
  writer: 'Jonathan Nolan',
  releaseDate: 'Nov 7, 2014',
  studio: 'Paramount Pictures',
  backdrop: poster('interstellar-backdrop-cinemax', 1600, 900),
};
