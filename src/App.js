import React, { useState } from "react";
import { createGlobalStyle } from "styled-components";
import Appbackground from "./img/denim.png";
import { Chrono } from "react-chrono";
import Jour from "./Jour";
import buildAllItems from "./data";
import buildAllAvailableItems from "./data";

const GlobalStyle = createGlobalStyle`
  body {
    background: center fixed url(${Appbackground});
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

  const [allItems, setItems] = useState(buildAllAvailableItems());

  const daysLeft = allItems.find((item) => item.locked).num + 1;
  const latestItem = allItems.findIndex((item) => item.locked) - 1;
  console.log("daysLeft", daysLeft);
  console.log("latestItem", latestItem);

  return (
    <>
      <GlobalStyle />
      <header>
        <h1>Calendrier de l'avant-retraite</h1>
        <h4>Vivement l'acquis !</h4>
      </header>
      <div className="calendrier">
        <Chrono mode="HORIZONTAL" items={allItems} allowDynamicUpdate focusActiveItemOnLoad 
        enableBreakPoint enableDarkToggle timelinePointShape="circle" timelinePointDimension={30} highlightCardsOnHover activeItemIndex={latestItem} parseDetailsAsHTML
        theme={{secondary: 'blue', titleColorActive: 'white'}}
        titleDateFormat="DD.MM.YYYY" cardWidth={625} cardHeight={500} mediaHeight={500} mediaSettings={{ align: 'center', fit:'cover' }} >
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
