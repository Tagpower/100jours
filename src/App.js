import React, { useState } from "react";
import { createGlobalStyle } from "styled-components";
import Appbackground from "./img/denim.png";
import { Chrono } from "react-chrono";
import buildAllAvailableItems from "./data";

const GlobalStyle = createGlobalStyle`
  html {
    background: center fixed url(${Appbackground});
  }
  header {
    display: flex,
    align-items: center;
    justify-content: center;
    text-align: center;
    color: white;
    flex-direction: column;
    font-size: calc(10px + 1vmin);
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
        <h3>Encore {daysLeft} jour{daysLeft > 1 ? 's':''} : Vivement l'acquis !</h3>
      </header>
      <div className="calendrier">
        <Chrono mode="HORIZONTAL" items={allItems} allowDynamicUpdate focusActiveItemOnLoad /*disableToolbar*/
        parseDetailsAsHTML activeItemIndex={latestItem} highlightCardsOnHover
        enableDarkToggle lineWidth={6} timelinePointShape="circle" timelinePointDimension={50} 
        theme={{secondary: 'blue', titleColorActive: 'white'}} buttonTexts={{first: "Début", last: "Fin", next: "Suivant", previous: "Précédent"}}
        titleDateFormat="DD.MM.YYYY" contentDetailsHeight={300} mediaSettings={{ align: 'center', fit:'contain' }} >
          <div className="chrono-icons">
            {allItems.map((jour, key) => <strong className={(jour.num < daysLeft ? "locked" : "")}>{jour.num}</strong>)}
          </div>
        </Chrono>
      </div>

    </>
  );
}

export default App;
