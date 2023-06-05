import styled from "styled-components";
import axios from "axios";
import { useContext, useState} from "react";
import { ThreeDots } from "react-loader-spinner";
import { LoginContext } from "../context/LoginContext";


export default function CreateHabit ({display, setDisplay}) {

    const [name, setName] = useState("");
    const [days, setDays] = useState([]);
    const [disable, setDisable] = useState(false); 
    const { config } = useContext(LoginContext);
    const daySelect = ["D", "S", "T", "Q", "Q", "S", "S"];


    function formCreateHabit(e) {

        e.preventDefault();
        setDisable(true);
  
        const createNewHabit = { name: name, days: days };  
        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";
        const promiseCreate = axios.post(URL, createNewHabit, config);
  
        promiseCreate.then(() => {
        setDisable(false)
        location.reload()
    })
        promiseCreate.catch(() => {
          alert("Preencha todos os campos para criar um novo hábito!")
          setDisable(false);
          setName("");
          setDays("");
          setDisplay("flex");
        })
  }


  function chooseDay(button) {
    
    const newDay = days.includes(button)

      ? days.filter((dayNew) => dayNew !== button)
      : [...days, button];

    setDays(newDay);
  }

  
    return (
      <ContainerCreateHabit
      data-test="habit-create-container"
      display={display}
      setDisplay={setDisplay}>

        <input
        data-test="habit-name-input"
        placeholder="nome do hábito"
        type="text"
        disabled={disable}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <ButtonsDays>
      {daySelect.map((day, i) => {
          return (
            <Button
              data-test="habit-day"
              key={i}
              index={i}
              disabled={disable}
              onClick={() => chooseDay(i)}
              selected={days.includes(i)}
            >
              {day}
            </Button>
          );
        })}
      </ButtonsDays>

      <SaveCancel>
        
        <ButtonCancel
        data-test="habit-create-cancel-btn"
        disabled={disable}
        onClick={() => setDisplay("none")}>
            Cancelar
        </ButtonCancel>

        <form onSubmit={formCreateHabit}>
        <button
        data-test="habit-create-save-btn"
        disabled={disable} 
        type="submit"
        onClick={() => setDisplay("none")
      }
        >
            {disable 
            
            ? <ThreeDots 
              height="80"
              width="80" 
              radius="9"
              color="white"
           /> 
           
           : "Salvar"}
        </button>
        </form>

      </SaveCancel>   
      </ContainerCreateHabit>
    )
  }

const ContainerCreateHabit = styled.div `
display: ${(props) => props.display};
width: 90%;
height: 180px;
background: #FFFFFF;
border-radius: 5px;
align-items: center;
justify-content: center;
flex-direction: column;
margin-bottom: 29px;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

input{
  width: 90%;
  height: 45px;
  border: 1px solid #D5D5D5;
  border-radius: 5px;
  font-size: 20px;
  font-weight: 400;
  line-height: 25px;
  padding: 11px;
  margin-top: 18px;
  color: #666666;

  &::placeholder{
    color: #dbdbdb;
  }

  &:hover{
    background-color: lightgray;

    ::placeholder {
      color: gray;
    }
  }

  &:disabled{
    background-color: #f2f2f2;

    ::placeholder {
      color: #afafaf;
    }
  }
}
`;

const ButtonsDays = styled.div `
width: 60%;
height: 32px;
margin-right: 30%;
margin-top: 10px;
display: flex;
gap: 1%;
`;

const Button = styled.button `
width: 30px;
height: 30px;
display: flex;
background: #FFFFFF;
border: 1px solid #D5D5D5;
border-radius: 5px;
margin-right: 4px;
color: #DBDBDB;
font-weight: 400;
font-size: 20px;
line-height: 25px;
background: ${(props) => (!props.selected ? "#ffffff" : "#cfcfcf")};
border: 1px solid ${(props) => (!props.selected ? "#d5d5d5" : "#cfcfcf")};
color: ${(props) => (!props.selected ? "#dbdbdb" : "#ffffff")};

    &:hover{
        background-color: lightgray;
        color: gray;
      }

    &:disabled{
        background-color: #f2f2f2;
    
        ::placeholder {
          color: #afafaf;
        }
      }
`;

const SaveCancel = styled.div `
width: 100%;
margin-top: 32px;
height: 35px;
display: flex;
margin-right: 15px;
align-items: center;
justify-content: right;

button {
    width: 110px;
    height: 35px;
    background: #52B6FF;
    border-radius: 5px;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    color: #FFFFFF;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover{
        background-color: #00fa9a;    
        }

    &:disabled{
        background-color: lightblue;
        }
    }
`;

const ButtonCancel = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #52b6ff;
  margin-right:23px;
  text-decoration: none;

  &:hover{
  color: #00fa9a; 
  cursor: pointer;   
  }

  &:disabled{
      background-color: lightblue;
    }
}

`;