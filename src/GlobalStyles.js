import React from "react";
import { Global, css } from "@emotion/core";

export default function GlobalStyle() {
  return (
    <Global
      styles={css`
        *,
        *::before,
        *::after {
          box-sizing: border-box;
          margin: 0;
        }

        body {
          font-family: "Alata", sans-serif;
          background: lightgoldenrodyellow;
          margin: 0;
        }
      `}
    />
  );
}
