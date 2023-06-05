import Top from "../../components/Top";
import Bottom from "../../components/Bottom";
import CheckToday from "../../components/CheckToday"
import styled from "styled-components";
import { useEffect, useState, useContext } from "react";
import { LoginContext } from "../../context/LoginContext";
import axios from "axios";
import dayjs from "dayjs";

export default function TodayPage() {

  const [todayHabit, setTodayHabit] = useState([]);
  const [markList, setmarkList] = useState([]);
  const [status, setStatus] = useState(0);
  const { percent, percentHabits, config } = useContext(LoginContext);
  const todayDay = dayjs();

  const weekDays = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta","Sábado"];
  const weekRender = weekDays[todayDay.day()];
  const formatDay = `${weekRender}, ${todayDay.format("DD/MM")}`;


  useEffect( () => {

    const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today';
    const promiseToday = axios.get(URL, config);

    promiseToday.then(response => {
      setTodayHabit(response.data)
      percentHabits(response.data)
      setmarkList(response.data.filter((j) => j.done));
    })
    
    promiseToday.catch(error => {
      alert(error.response.data.message)
    })       

}, [config, status, percentHabits]);

  
return (
  <ContainerToday>

    <Top />

    <h2 data-test="today">{formatDay}</h2>

    {todayHabit.length === 0 
    ? (
        <p data-test="today-counter">
          Nenhum hábito concluído ainda
        </p>
    ) : (
        <p data-test="today-counter">
          {markList.length === 0
                  ? "Nenhum hábito concluído ainda"
                  : `${percent}% dos hábitos concluídos`
          }
        </p>
    )}

          {todayHabit.map((a, b) => (
              <CheckToday
                id={a.id}
                key={b}
                name={a.name}
                check={a.done}
                status={status}
                setStatus={setStatus}
                currentSequence={a.currentSequence}
                highestSequence={a.highestSequence}
              />
            ))}

    <Bottom />

</ContainerToday>
);
}

const ContainerToday = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 70px;
  
    h2 {
      font-weight: 400;
      font-size: 23px;
      line-height: 29px;
      color: #126BA5;
      margin-top: 28px;
    }

    p {
      font-weight: 400;
      font-size: 17px;
      line-height: 22px;
      color: #BABABA;
    }
`;

