import logo from "../../assets/logo.png";
import { ThreeDots } from "react-loader-spinner";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
import axios from "axios";


export default function RegisterPage() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");
  const [disable, setDisable] = useState(false);
  const navigate = useNavigate();

  
  function formRegister(e) {

    e.preventDefault();
    setDisable(true);

    const registerPage = {email: email, name: name, image: photo, password: password};
    const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up";
    const promiseRegister = axios.post(URL, registerPage);

    promiseRegister.then((response) => {
      console.log (response.data)
      setDisable(false);
      navigate("/");
})
    promiseRegister.catch((error) => {
      alert(`${error.response.data.message}`)
      setDisable(false);
      setEmail("");
      setPassword("");
      setPhoto("");
      setName("");
    })
}

  return (
    <ContainerRegister>
      <Logo src={logo} alt="Logo TrackIt" />

      <FormRegister>
      <form onSubmit={formRegister}>
      <input
        data-test="email-input"
        placeholder="email"
        type="email"
        disabled={disable}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <input
        data-test="password-input"
        placeholder="senha"
        type="password"
        disabled={disable}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      <input
        data-test="user-name-input"
        placeholder="nome"
        type="text"
        disabled={disable}
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <input
        data-test="user-image-input"
        placeholder="foto"
        id="foto"
        type="URL"
        disabled={disable}
        value={photo}
        onChange={(e) => setPhoto(e.target.value)}
        required
      />

      <button 
      data-test="signup-btn"
      disabled={disable} 
      type="submit">

      {disable 
      
      ? <ThreeDots 
        height="80"
        width="80" 
        radius="9"
        color="white"
     /> 
     
     : "Cadastrar"}
        
      </button>
    </form>
    </FormRegister>
    
      <Link to="/" data-test="login-link">
        <p>Já tem uma conta? Faça login!</p>
      </Link>
    </ContainerRegister>
  );
}

const ContainerRegister = styled.div`
  font-family: 'Lexend Deca';
  background-color: #FFFFFF;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    margin-top: 25px;
    font-weight: 400;
    font-size: 13px;
    line-height: 17px;
    text-align: center;
    text-decoration-line: underline;  
    color: #52b6ff;
  }
`;

const FormRegister = styled.div`
  width: 303px;
  heidht: 147px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 32px;

  input{
    width: 100%;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    height: 45px;
    line-height: 25px;
    font-size: 20px;
    padding: 11px;
    margin-bottom: 6px;

    &::placeholder{
      color: #dbdbdb;
    }

    &:disabled{
      background-color: #f2f2f2;

      ::placeholder {
        color: #afafaf;
      }
    }
  }


button {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 400;
    font-size: 21px;
    line-height: 26px;
    text-align: center;
    color: #FFFFFF;
    background-color: #52B6FF;
    height: 45px;
    width: 100%;
    border-radius: 5px;
    border: none;

    &:disabled {
      background-color: lightblue;
  }
}
`;

const Logo = styled.img`
  padding: 20px;
  width: 180px;
  height: 174px;
  margin-top: 68px;
`;