import React from 'react';
import styled , { css } from 'styled-components';
import './Login.css';
import Button from '../Button';
import SocialButton from '../SocialButton';
import FormField from '../FormField';
import logo from '../../assets/valorant-logo.png';
import IconLarge from '../Button/IconLarge';
import useForm from '../../hooks/useForm';
import { AiFillQuestionCircle } from 'react-icons/ai';

const Input =  styled.input`
  
  ${({ hasValue }) => hasValue && css`
    &:not([type="color"]) + span {
      transform: scale(.6) translateY(-10px);
    }
  `}

`;

function Login() {
  //remember to create another icon component
  /*const { handleChange, values } = useForm({
    titulo: '',
    url: '',
    categoria: '',
  });*/  
  //const hasValue = Boolean(value.length);
  const { handleChange, values } = useForm({
    login: '',
    senha: '',
    nhenha: '',
  });
  return (
    <div className="Login">
      <div className="loginWrapper">
        <div className="help">
          <AiFillQuestionCircle />
        </div>
        
        <header className="App-header">
            <img src={logo} className="logo" alt="logo" />
        </header>
        <h1>Sign in</h1>
        <Input  type="text" placeholder="USERNAME"  />
        <Input  type="password"  placeholder="PASSWORD" />
        <FormField label="Categoria" onChange={handleChange} value={values.nhenha}/>
        <div className="socialLogin">
          <SocialButton color="blue" social="facebook" />
          <SocialButton color="white" social="google" />
          <SocialButton color="black" social="apple" />
        </div>
        <label>
            <input type="checkbox" />
            Stay signed in
        </label>
        <div className="signIn">
          <Button>
            <IconLarge />
          </Button>
        </div>
        <div className="secondary">
          <b>CAN'T SIGN IN?</b>
          <b>CREATE ACCOUNT</b>
        </div>
        <small><b>V26.0.3</b></small>
      </div>
      
    </div>
  );
}

export default Login;
