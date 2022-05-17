export interface Movie {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: Rating[];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
  Response: string;
  Error?: string;
}

export interface Rating {
  Source: string;
  Value: string;
}

interface Input {
  query: string;
}

const buildURL = (query: Input["query"]): string =>
  `http://www.omdbapi.com/?i=${query}&apikey=${process.env.NEXT_PUBLIC_API_KEY}`;

const fetchData = async ({ query }: Input): Promise<Movie> => {
  const url = buildURL(query);
  return await fetch(url).then((res) => res.json());
};

export default fetchData;
