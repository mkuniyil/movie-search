interface Input {
  query: string;
}

export interface Search {
  Search: Movie[];
  totalResults: string;
  Response: string;
}

export interface Movie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

const buildURL = (query: Input["query"]): string =>
  `http://www.omdbapi.com/?s=${query}&apikey=${process.env.NEXT_PUBLIC_API_KEY}`;

const fetchData = async ({ query }: Input): Promise<Search> => {
  const url = buildURL(query);
  return await fetch(url).then((res) => res.json());
};

export default fetchData;
