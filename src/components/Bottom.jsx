
import { Link } from "react-router-dom";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import styled from "styled-components";

export default function Footer() {

  return (
    <ContainerBottom>
      <Link to={"/habitos"}>
        <h1>Hábitos</h1>
      </Link>

      <CircularButton>
        <Link to="/hoje">
          <h1>Hoje</h1>
        </Link>
        
        <CircularProgressbar       
          background
          backgroundPadding={8}
          styles={buildStyles({
            strokeLinecap: "round",
            textSize: "18px",
            color: "#ffffff",
            trailColor: "transparent",
            backgroundColor: "#52B6FF"
          })}
        />
      </CircularButton>

      <Link to={"/historico"} data-test="history-link">
        <h1>Histórico</h1>
      </Link>
    </ContainerBottom>
  );
}

export const ContainerBottom = styled.div`
  background-color: #ffffff;
  width: 100vw;
  height: 70px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.50);
  position: fixed;
  z-index;1;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-decoration: none;

  a {
    padding: 25px;
    font-weight: 400;
    font-size: 18px;
    color: #52b6ff;
    text-decoration: none;
    cursor: pointer;
  }
`;

const CircularButton = styled.div`
  width: 91px;
  position: relative;
  margin-bottom: 100px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 65%;
    width: 100%;
    border-radius: 50%;
    position: absolute;
    top: 65%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin: 0;
    z-index: 2;
    color: #ffffff;
    font-size: 16px;
  }
`;