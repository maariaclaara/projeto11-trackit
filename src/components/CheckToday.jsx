import checkImage from "../assets/check.svg"
import styled from "styled-components"
import { useContext } from "react";
import { LoginContext } from "../context/LoginContext";
import axios from "axios";

export default function CheckToday ({status, setStatus, name, id, check, currentSequence, highestSequence}){

    const { config } = useContext(LoginContext);


    function checkHabit() {
        
        const URL = check
          ? `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`
          : `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`
    
        const promiseCheck = axios.post(URL, null, config)

        promiseCheck.then(() => {
            setStatus(status + 1);
          })

          promiseCheck.catch(() => {
            alert("OPS! Ocorreu um erro inesperado, tente novamente!");
            location.reload();
          });
      }

return(
    <ContainerCheck data-test="today-habit-container" status={check}>

        <ListHabit>
            <div>
                <h3 data-test="today-habit-name">{name}</h3> 

                <Paragraph1 data-test="today-habit-sequence" statusColor={check}>Sequência atual: {currentSequence} dias. </Paragraph1>

                <Paragraph2 data-test="today-habit-record" 
                statusColor={check} 
                currentSequence={currentSequence} 
                highestSequence={highestSequence}>Seu recorde: {highestSequence} dias.
                </Paragraph2>
            </div>

            <Button data-test="today-habit-check-btn" onClick={checkHabit}>
                <img src={checkImage}></img>
            </Button>

        </ListHabit>

</ContainerCheck>
 );
}

const ContainerCheck = styled.div `
width: 100%;
height: 94px;
background: #FFFFFF;
border-radius: 5px;
align-items: center;
justify-content: center;
flex-direction: column;
margin-bottom: 10px;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
margin-top: 28px;
`;
    
const ListHabit = styled.div `
width: 100%;
height: auto;
border-radius: 5px;
display: flex;

div{
  width: 223px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-left: 13px;
  margin-top: 13px;

  h3{
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
    color: #666666;
    margin-bottom: 7px;
  }
}
`;

const Button = styled.button `
width: 69px;
height: 69px;
border: none;
margin-top: 13px;
margin-left: 13px;
border-radius: 5px;
background: ${(props) => (props.status ? "#8fc549" : "#ebebeb")};


img{
width: 68px;
height: 68px; 

    &:hover{
        cursor: pointer;
    }
}
`;

const Paragraph1 = styled.p`
font-weight: 400;
font-size: 13px;
line-height: 16px;
color: ${(props) => (props.statusColor ? "#8fc549" : "#666666")};
`;

const Paragraph2 = styled.p`
font-weight: 400;
font-size: 13px;
line-height: 16px;
${(props) => props.statusColor && props.currentSequence === props.highestSequence
      ? "#8fc549"
      : "#666666"};
`;