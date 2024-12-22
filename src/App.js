import React, { useState } from "react";
import { createGlobalStyle } from "styled-components";
import Appbackground from "./img/denim.png";
import { Chrono } from "react-chrono";
import Jour from "./Jour";
import buildAllItems from "./data";

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

  const [allItems, setItems] = useState(buildAllItems());

  return (
    <>
      <GlobalStyle />
      <header>
        <h1>Calendrier de l'avant-retraite</h1>
        <h4>Vivement l'acquis !</h4>
        {console.log(allItems)}
      </header>
      <div className="calendrier">
        <Chrono mode="HORIZONTAL" items={allItems} enableDarkToggle titleDateFormat="DD.MM.YYYY" cardWidth={500} cardHeight={500} timelinePointShape="circle" timelinePointDimension={30} highlightCardsOnHover >
           <div className="chrono-icons">
              {allItems.map((jour) => <strong>{jour.num}</strong>)}
            </div>
            {/* {allItems.map(jour => <Jour item={jour} key={jour.num}/>)} */}
        </Chrono>
      </div>

    </>
  );
}

export default App;
