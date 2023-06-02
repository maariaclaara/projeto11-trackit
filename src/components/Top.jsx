import { Link } from "react-router-dom";
import styled from "styled-components";
import { useContext } from "react";
import { LoginContext } from "../context/LoginContext";

export default function Top() {

  const { data } = useContext(LoginContext);

  return (
    <ContainerTop>
      <div data-test="header">

      <Link to="/">
        <p>TrackIt</p>
      </Link>

      <Image src={data.image} alt="UserImage" data-test="avatar"/>
      </div>
    </ContainerTop>
  );
}

const ContainerTop= styled.div`
  width: 100%;
  height: 70px;
  background: #126ba5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.50);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1;

  div {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    font-family: 'Playball', cursive;
    font-weight: 400;
    font-size: 39px;
    line-height: 49px;
    color: #ffffff;
    margin-left: 18px;
    text-decoration: none;
  }
}
`;

const Image = styled.img`
  margin-right: 20px;
  width: 51px;
  height: 51px;
  left: 306px;
  top: 9px;
  border-radius: 98.5px;
`;