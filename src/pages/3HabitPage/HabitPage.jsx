import Top from "../../components/Top";
import Bottom from "../../components/Bottom";
import styled from "styled-components";
import CreateHabit from "../../components/CreateHabit";
import ListHabits from "../../components/ListHabits";
import { useState, useEffect, useContext } from "react";
import { LoginContext } from "../../context/LoginContext";
import axios from "axios";

export default function HabitsPage() {

  const [listHabits, setlistHabits] = useState([]);
  const [openBox, setOpenBox] = useState("none");
  const [reloadList, setReloadList] = useState(0);
  const { config } = useContext(LoginContext);
 

  useEffect( () => {

    const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits';
    const promiseListHabits = axios.get(URL, config);

    promiseListHabits.then(response => {
      setlistHabits(response.data)
    })
    
    promiseListHabits.catch(error => {
      alert(error.response.data.message)
    })       

}, [config, openBox, reloadList]);


  return (
    <ContainerHabit>

      <Top />

      <Title>
        <h1>Meus Hábitos</h1>

        <button data-test="habit-create-btn" onClick={() => setOpenBox("flex")}> + </button>
      </Title>

      <CreateHabit 
        display={openBox} 
        setDisplay={setOpenBox} />


        {listHabits.length > 0 ? (
        <ContainerListHabits>
          {listHabits.map((j, i) => (

            <ListHabits
              key={i}
              visibility={reloadList}
              setVisibility={setReloadList}
              index={j.id}
              name={j.name}
              days={j.days}
            />
          ))}

        </ContainerListHabits>
      ) : (
        <p>
          Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
          começar a trackear!
        </p>
      )}

      <Bottom />

    </ContainerHabit>
  );
}


const ContainerHabit = styled.div`
  display: ${(props) => props.displayMode};
  flex-direction: column;
  justify-content: center;
  margin-top:70px;
  margin-left: 15px;
  width: 100%;

  p {
    color: #666666;
    font-size: 17px;
    line-height: 22px;
    font-weight: 400;
  }
`;

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #e5e5e5;

  h1 {
    color: #126ba5;
    font-weight: 400;
    margin-top: 30px;
    margin-bottom: 18px;
    font-size: 22px;
    line-height: 30px;
  }

  button {
    margin-top: 15px;
    margin-right: 20px;
    width: 40px;
    height: 35px;
    background-color: #52b6ff;
    border-radius: 5px;
    color: #ffffff;
    border: none;
    font-weight: 400;
    font-size: 27px;

    &:hover{
      background-color: #00fa9a;
      cursor: pointer;   
      }
  }
`;

const ContainerListHabits = styled.div `
widht: 90%;
height: auto;
border-radius: 5px;
margin-bottom: 10px;
display: flex;
align-items: left;
justify-content: center;
flex-direction: column;
`;

