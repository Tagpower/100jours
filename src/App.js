import React, { useState } from "react";
import { createGlobalStyle } from "styled-components";
import Appbackground from "./img/denim.png";
import { Chrono } from "react-chrono";
import Jour from "./Jour";
import buildAllItems from "./data";

const GlobalStyle = createGlobalStyle`
  body {
    background: center fixed url(${Appbackground});
    margin: 1em;
  }
  header {
    display: flex,
    align-items: center;
    justify-content: center;
    text-align: center;
    color: white;
    flex-direction: column;
    font-size: calc(10px + 2vmin);
  }
`;

function App() {

  const [allItems, setItems] = useState(buildAllItems());

  const daysLeft = allItems.find((item) => item.locked).num + 1;
  console.log("daysLeft", daysLeft);

  return (
    <>
      <GlobalStyle />
      <header>
        <h1>Calendrier de l'avant-retraite</h1>
        <h4>Vivement l'acquis !</h4>
      </header>
      <div className="calendrier">
        <Chrono mode="HORIZONTAL" items={allItems} allowDynamicUpdate focusActiveItemOnLoad 
        enableBreakPoint enableDarkToggle timelinePointShape="circle" timelinePointDimension={30} highlightCardsOnHover activeItemIndex={0} parseDetailsAsHTML
        theme={{secondary: 'blue', titleColorActive: 'white'}}
        titleDateFormat="DD.MM.YYYY" cardWidth={625} cardHeight={500} mediaSettings={{ align: 'center', fit: 'cover' }} >
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
