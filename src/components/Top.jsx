import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Top() {

  return (
    <ContainerTop>
      <Link to="/">
        <p>TrackIt</p>
      </Link>
      <Image src="https://img.freepik.com/fotos-gratis/imagem-aproximada-da-cabeca-de-um-lindo-leao_181624-35855.jpg?w=2000" alt="User Image" />
    </ContainerTop>
  );
}

const ContainerTop= styled.div`
  width: 100vw;
  height: 70px;
  background: #126ba5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1;

  p {
    font-family: 'Playball', cursive;
    font-weight: 400;
    font-size: 39px;
    line-height: 49px;
    color: #ffffff;
    margin-left: 18px;
    text-decoration: none;
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