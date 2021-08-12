const API_KEY = process.env.API_KEY;

export default {
  fetchTrending: {
    title: 'Trending',
    url: `/trending/all/day?api_key=${API_KEY}&language=en-US`
  },
  fetchTopRated: {
    title: 'Top Rated',
    url: `/movie/top_rated?api_key=${API_KEY}&language=en-US`
  },
  fetchActionMovies: {
    title: 'Action',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=28`
  },
  fetchNowPlaying: {
    title: 'Now Playing',
    url: `/movie/now_playing?api_key=${API_KEY}&language=en-US`
  },
  fetchUpcomingMovies: {
    title: 'Upcoming',
    url: `/movie/upcoming?api_key=${API_KEY}&language=en-US`
  },
  // fetchLatest: {
  //   title: 'Latest Movies',
  //   url: `/movie/latest?api_key=${API_KEY}&language=en-US`
  // },
  // fetchMystery: {
  //   title: 'Mystery',
  //   url: `/movie/mystery?api_key=${API_KEY}&with_genres=9648`
  // },
  // fetchSciFi: {
  //   title: 'Sci-Fi',
  //   url: `/movie/scifi?api_key=${API_KEY}&language=en-US`
  // },
  // fetchWestern: {
  //   title: 'Western',
  //   url: `/movie/western?api_key=${API_KEY}&language=en-US`
  // },
  fetchLatestTV: {
    title: 'TV Top Rated',
    url: `/tv/top_rated?api_key=${API_KEY}&language=en-US`
  },
  fetchTV: {
    title: 'TV Today',
    url: `/tv/popular?api_key=${API_KEY}&language=en-US`
  },
}
