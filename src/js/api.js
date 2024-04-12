import axios from 'axios';
axios.defaults.headers.common['Authorization'] =
  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NjU0OGJiYzA3MmU1OWQ4ZmUwYzMzMmNlZTVhMTBkMiIsInN1YiI6IjY2MTc0ZTg5N2UxMmYwMDE2M2YxNWM4OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4rXGBSDbiKST6RdATvUUD3H6d71Aj46O4PLqxn27lVs';
const fetchTrendMovies = async url => {
  try {
    const fetchInfo = await axios.get(url, {
      accept: 'application/json',
    });
    const { data } = fetchInfo;
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

export { fetchTrendMovies };


/* 
api key
86548bbc072e59d8fe0c332cee5a10d2
token
eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NjU0OGJiYzA3MmU1OWQ4ZmUwYzMzMmNlZTVhMTBkMiIsInN1YiI6IjY2MTc0ZTg5N2UxMmYwMDE2M2YxNWM4OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4rXGBSDbiKST6RdATvUUD3H6d71Aj46O4PLqxn27lVs
 */