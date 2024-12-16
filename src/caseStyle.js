import styled from "styled-components";
import caseBackdrop from "./img/yaaay.png";

export const StyledCase = styled.div`
  padding-top: 100%;
  position: relative;
  cursor: pointer;
  .front {
    background: center / cover url(${props => props.background});
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    p {
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: "Trebuchet MS";
      color: #fff;
      padding: 0px;
      width: 100%;
      height: 100%;
      border-radius: 20px;
      background: rgba(0, 0, 0, 0.9);
      font-weight: 700;
      font-size: 4rem;
    }
    &.open {
      transform: rotateY(180deg);
    }
  }
  .back {
    position: absolute;
    background: center / cover url(${caseBackdrop});
    top: 0px;
    left: 0px;
    z-index: 1;
    transform: rotateY(180deg);
    p {
      font-family: "Trebuchet MS";
      color: #000;
      padding: 10px;
      font-size: 1.4rem;
      text-align: center;
    }
    &.open {
      z-index: 2;
      transform: rotateY(0deg);
    }
  }
  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    transition: all 0.5s;
    transform-style: preserve-3d;
    border-radius: 20px;
    border: 1px solid #fff;
    box-sizing: border-box;
  }
`;