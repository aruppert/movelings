import React from "react";
import GlobalStyles from "./GlobalStyles";
import Header from "./components/Header";
import MovieList from "./components/MovieList";

function App() {
  return (
    <>
      <GlobalStyles />

      <Header />

      <main>Movie-Cards</main>
    </>
  );
}

export default App;
