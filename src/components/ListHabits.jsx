import trash from "../assets/trash.svg";
import styled from "styled-components";
import {  useContext } from "react";
import { LoginContext } from "../context/LoginContext";
import axios from "axios";

export default function ListHabits ({visibility, setVisibility, name, days, index}) {

    const chosenDays = ["D", "S", "T", "Q", "Q", "S", "S"];
    const { config } = useContext(LoginContext);


    function deleteHabit() {

      if (window.confirm('Você tem certeza que deseja deletar este hábito?') === true) {

      const URL =`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${index}`;
      const promiseDelete = axios.delete(URL, config);
  
      promiseDelete.then( () => {
      setVisibility((visibility += 1))
      alert('Este hábito será deletado da sua lista!') 
      })
      
      promiseDelete.catch(error => {
        alert(error.response.data.message)
      }) 
    }       
  }

    return (
        <ContainerListHabit>
        <div data-test="habit-container">

        <ListHabit>
          <p data-test="habit-name">{name}</p>

          <img
            data-test="habit-delete-btn"
            onClick={deleteHabit}
            src={trash}
          />
        
       </ListHabit>

          <ButtonsDays>
          {chosenDays.map((day, i) => (
          <Days data-test="habit-day" key={i} index={i} days={days}>
            {day}
          </Days>
        ))}
          </ButtonsDays>
          
        </div>
        </ContainerListHabit>
      );
    }
  
const ContainerListHabit = styled.div `
width: 90%;
height: 91px;
background: #FFFFFF;
border-radius: 5px;
align-items: center;
justify-content: center;
flex-direction: column;
margin-bottom: 10px;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
    
const ListHabit = styled.div `
width: 100%;
height: auto;
background: #FFFFFF;
border-radius: 5px;
display: flex;
align-items: center;
justify-content: space-between;

p{
    margin-left: 17px;
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
    color: #666666;
    margin-top: 13px;
}

img{
    color: #666666;
    width: 20px;
    height: 20px;
    margin-top: 11px;
    margin-right: 11px;

    &:hover{
      cursor: pointer;
    }
}
`;

const ButtonsDays = styled.div `
width: 238px;
height: 32px;
margin-left: 19px;
margin-right: 87px;
margin-top: 10px;
display: flex;

div {
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    width: 30px;
    height: 30px;
    color: #DBDBDB;
    margin-right: 4px;
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
    text-align: center;
    }
`;

const Days = styled.button`
width: 30px;
height: 30px;
display: flex;
border-radius: 5px;
margin-right: 4px;
font-weight: 400;
font-size: 20px;
line-height: 25px;
background: ${(props) =>!props.days.includes(props.index) ? "#ffffff" : "#cfcfcf"};
border: 1px solid ${(props) => (!props.days.includes(props.index) ? "#d5d5d5" : "#cfcfcf")};
color: ${(props) => !props.days.includes(props.index) ? "#dbdbdb" : "#ffffff"};

&:hover{
    cursor: default;
}
`;