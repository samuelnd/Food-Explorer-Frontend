import { LabelInput } from "../Labelnput";
import { Container } from "./style";

import {useState} from 'react'
import { useNavigate } from "react-router-dom";

import { api } from "../../services/api";

import { Button } from "../Button";
import { ButtonTransparrent } from "../ButtonTransparent";
import { useAuth } from "../../hooks/auth";

export const MenuSignUp = ({title, ...rest}) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const {changeState} = useAuth()


  const navigate = useNavigate()

  const handleBack = () => {
    navigate('/')
  }



  async function handleSignUp() {
    if(!email || !name || !password){
      return alert('Preencha todos os campos')
    }
    if(password.length< 6){
      return alert('Revise suas informações')
    }
    try {
      changeState(true)
      await api.post('/users', {name, email, password : String(password)})
      alert('Usuário cadastrado com sucesso')
      changeState(false)
      handleBack()
    } catch (error) {
      if(error.response){
        changeState(true)
        alert(error.response.data.message)
        changeState(false)
      }else{
        changeState(true)
        alert('Nao foi possivel realizar o cadastro')
        changeState(false)
      }
    }
    
  }


  return(

    <Container {...rest}>
      <h1>
        {title}
      </h1>
      <LabelInput
        text='Seu nome'
        placeholder='Exemplo: Maria da Silva'
        id='name'
        type='text'
        onChange={(e)=>setName(e.target.value)}
      />

      <LabelInput
        text='Email'
        placeholder='Exemplo: exemplo@exemplo.com.br'
        id='email'
        type='text'
        onChange={(e)=>setEmail(e.target.value)}
      />

      <LabelInput
        text='Senha'
        placeholder='No mínimo 6 caracteres'
        id='password'
        type='password'
        onChange={(e)=>setPassword(e.target.value)}
      />

      <Button
        title='Criar conta'
        onClick={handleSignUp}
      />

      <ButtonTransparrent
        title='Já tenho uma conta'
        onClick={handleBack}
      />



    </Container>
  )
}