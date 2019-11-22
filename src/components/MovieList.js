import React from "react";
import { getDiscoverMovies } from "../api/movies";
import styled from "@emotion/styled";

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

const Poster = styled.img`
  width: 150px;
  padding: 10px;
`;

export default function MovieList() {
  const [movies, setMovies] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [search, setSearch] = React.useState("");

  console.table(movies, loading, search);

  async function refreshMovies() {
    setLoading(true);
    const discoveredMovies = await getDiscoverMovies();
    setLoading(false);
    setMovies(discoveredMovies);
  }

  React.useEffect(() => {
    refreshMovies();
  }, []);

  return (
    <>
      <input value={search} onChange={event => setSearch(event.target.value)} />
      <button onClick={refreshMovies}>SEARCH</button>
      {loading && <div>LOADING!!!</div>}
      <List>
        {movies.map(movie => (
          <Poster
            key={movie.id}
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={movie.title}
          />
        ))}
      </List>
    </>
  );
}
