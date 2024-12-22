import React from "react";
import { createGlobalStyle } from "styled-components";
import allItems from "./data";
import Appbackground from "./img/denim.png";
import { Chrono } from "react-chrono";
import Jour from "./Jour";

const GlobalStyle = createGlobalStyle`
  body {
    background: center fixed url(${Appbackground});
    margin: 0;
  }
  header {
    display: flex,
    align-items: center;
    justify-content: center;
    text-align: center;
    color: white

  }
`;

function App() {

  return (
    <>
      <GlobalStyle />
      <header>
        <h1>Calendrier de l'avant-retraite</h1>
        <h2>Vivement l'acquis !</h2>
      </header>
      <div className="calendrier">
        <Chrono mode="HORIZONTAL" items={allItems} enableDarkToggle cardWidth={600} cardHeight={480}>
           {/* <div className="chrono-icons">
              {allItems.map((jour) => <strong>{jour.num}</strong>)}
            </div> */}
            {/* {allItems.map(jour => <Jour item={jour} key={jour.num}/>)} */}
        </Chrono>
      </div>

    </>
  );
}

export default App;
