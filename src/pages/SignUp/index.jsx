import { MenuSignUp } from "../../components/MenuSignUp"
import { Container, Content} from "./style"

import {BsHexagonFill} from 'react-icons/bs'


export const SignUp = () =>{
  return(
    <Container>
      <Content>
        <BsHexagonFill
          size={40}
          color='#065E7C'
        />
        <h1>Food explorer</h1>
      </Content>
      <MenuSignUp
        title='Crie sua conta'
      />
    </Container>
  )
}