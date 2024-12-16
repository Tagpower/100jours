import React from "react";
import { StyledCase } from "./caseStyle";

const Case = ({ caseData: { id, nr, text, day, img, media, open }, handleClick }) => (
  <StyledCase background={img} onClick={() => handleClick(id)}>
    <div className={open ? "front open" : "front"}>
      <p>{nr}</p>
    </div>
    <div className={open ? "back open" : "back"}>
      <div>
        <p>{text}</p>
      </div>
    </div>
  </StyledCase>
);

export default Case;