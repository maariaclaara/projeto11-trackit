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
  margin-left: 15px;
  padding: 70px;

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
