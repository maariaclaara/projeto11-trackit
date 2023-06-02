import Top from "../../components/Top";
import Bottom from "../../components/Bottom";
import styled from "styled-components";


export default function HistoricPage() {


  return (
    <>
      <Top/>
        <ContainerHistoric>

          <h1>Histórico</h1>
          <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>

          <input 
          type="date"
          placeholder="Escolha a data desejada" />

        </ContainerHistoric>    
      <Bottom />
    </>
  );
}

const ContainerHistoric = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
  padding-top: 70px;
  margin-left: 15px;

  h1 {
    color: #126ba5;
    font-weight: 400;
    margin-top: 28px;
    margin-bottom: 17px;
    font-size: 23px;
    line-height: 29px;
  }

  p {
    color: #666666;
    font-size: 18px;
    font-weight: 400;
  }
`;
