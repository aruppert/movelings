import React from "react";
import GlobalStyles from "./GlobalStyles";
import MovieList from "./components/MovieList";

function App() {
  return (
    <>
      <GlobalStyles />
      <header>LOGO, Search, IConButton</header>
      <main>
        <MovieList />
      </main>
    </>
  );
}

export default App;
