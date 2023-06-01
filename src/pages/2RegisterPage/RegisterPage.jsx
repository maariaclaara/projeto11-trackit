import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import styled from "styled-components";


export default function RegisterPage() {
  return (
    <ContainerRegister>
      <Logo src={logo} alt="Logo TrackIt" />

      <FormRegister>
      <input
        placeholder="email"
        type="email"
        required
      />

      <input
        placeholder="senha"
        type="password"
        required
      />

      <input
        placeholder="nome"
        type="text"
        required
      />

      <input
        placeholder="foto"
        type="URL"
        required
      />

      <ButtonRegister>

      <button type="submit">
        Cadastrar
      </button>

      </ButtonRegister>
    </FormRegister>
    
      <Link to="/cadastro" data-test="login-btn">
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
  }
`;

const ButtonRegister = styled.div`
  width: 100%;

  button {
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
  }
`;

const Logo = styled.img`
  padding: 20px;
  width: 180px;
  height: 174px;
  margin-top: 68px;
`;