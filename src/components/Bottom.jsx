
import { Link } from "react-router-dom";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import styled from "styled-components";
import { useContext } from "react";
import { LoginContext } from "../context/LoginContext";

export default function Bottom() {

  const { percent } = useContext(LoginContext);

  return (
    <ContainerBottom>
      <div data-test="menu">

        <Link data-test="habit-link" to={"/habitos"}>
          <h1>Hábitos</h1>
        </Link>

        <CircularButton>
          <Link to="/hoje" data-test="today-link">
            <h1>Hoje</h1>
          </Link>
        
          <CircularProgressbar 
            value={percent}      
            background="#ffffff"
            backgroundPadding={8}

            styles={buildStyles({
            strokeLinecap: "round",
            textSize: "20px",
            pathColor:"#ffffff",
            textColor: "#ffffff",
            trailColor: "transparent",
            backgroundColor: "#52B6FF"
          })}
        />
        </CircularButton>

        <Link data-test="history-link" to={"/historico"}> 
          <h1>Histórico</h1>
        </Link>
        
        </div>
    </ContainerBottom>
  );
}

export const ContainerBottom = styled.div`
  background-color: #ffffff;
  width: 100%;
  height: 70px;
  position: fixed;
  z-index; 1;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-decoration: none;

  div {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 150px;

  a {
    padding: 25px;
    font-weight: 400;
    font-size: 18px;
    color: #52b6ff;
    text-decoration: none;
    cursor: pointer;

    &:hover{
      color: #00fa9a;    
      }
  }
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