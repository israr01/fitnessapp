/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx, Global } from "@emotion/react";
import { useState } from "react";


import Container from "./components/home/container";

function App() {

  return (
    <div
      className="App"
      css={css`
        background: #f0eff1;
        height: 100%;
        padding: 10px 0;
      `}
    >

      <Container
        
      />

      {/* <MenuItems
        items={MenuData}
        all={all}
        breakfast={breakfast}
        lunch={lunch}
        shakes={shakes}
      /> */}

      <Global
        styles={css`
          @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap");

          ::selection {
            background: #000;
            color: #f0eff1;
          }

          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: "Poppins", sans-serif;
            --webkit-tap-highlight-color: transparent;
          }

          body::-webkit-scrollbar {
            width: 12px; /* width of the entire scrollbar */
          }

          body::-webkit-scrollbar-track {
            background: #f0eff1; /* color of the tracking area */
          }

          body::-webkit-scrollbar-thumb {
            background-color: #444444; /* color of the scroll thumb */
            border-radius: 20px; /* roundness of the scroll thumb */
            border: 3px solid #f0eff1; /* creates padding around scroll thumb */
          }

          .container {
            width: 80%;
            margin: auto;
          }
        `}
      />
    </div>
  );
}

export default App;
