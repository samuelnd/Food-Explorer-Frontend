import { MenuSignIn } from "../../components/MenuSignIn"
import { Container, Content} from "./style"

import {BsHexagonFill} from 'react-icons/bs'


export const SignIn = () =>{
  return(
    <Container>
      <Content>
        <BsHexagonFill
          size={40}
          color='#065E7C'
        />
        <h1>Food explorer</h1>
      </Content>
      <MenuSignIn
        title='Faça login'
      />
    </Container>
  )
}