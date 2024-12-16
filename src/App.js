import React, { useState, useEffect } from "react";
import { createGlobalStyle } from "styled-components";
import { StyledApp } from "./AppStyles";
import { createCalendar } from "./helpers";
import Case from "./case";
import Appbackground from "./img/denim.png"

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

  const [doors, setDoors] = useState([]);
  const [openDoors, setOpenDoors] = useState([]);

  useEffect(() => {
    
    const calendar = localStorage.calendar
      ? JSON.parse(localStorage.calendar)
      : createCalendar();

    setDoors(calendar);
  }, []);

  // Store calendar in localStorage
  useEffect(() => {
    doors.length && localStorage.setItem("calendar", JSON.stringify(doors));
  }, [doors]);

    // Store calendar in localStorage
    useEffect(() => {
      openDoors.length && localStorage.setItem("openDoors", JSON.stringify(openDoors));
    }, [openDoors]);

  const handleFlipDoor = id => {
    const updatedDoors = doors.map(door =>
        door.id === id ? { ...door, open: !door.open } : door
    );
    setDoors(updatedDoors);
    setOpenDoors(updatedDoors.filter(d => d.open).map(d => d.nr))

  };


  return (
    <>
      <GlobalStyle />
      <header>
        <h1>Vivement l'acquis !</h1>
        </header>
      <StyledApp>
        {doors.map(door => (
          <Case
            key={door.id}
            caseData={door}
            open={openDoors.findIndex(d => d.id === door.id)}
            handleClick={handleFlipDoor}
          />
        ))}
      </StyledApp>
    </>
  );
}

export default App;
