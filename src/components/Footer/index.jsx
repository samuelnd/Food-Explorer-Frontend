import { Container, Content } from "./style";

import {BsHexagonFill} from 'react-icons/bs'

export const Footer = () => {
  return(
    <Container>
      <Content>
        <div className="logo">
          <BsHexagonFill
            size={20}
            color='rgba(255, 255, 255, 0.3)'
            />
          <h2>food explorer</h2>

        </div>
        <span>&copy; 2022 - Todos os direitos reservados.</span>
      </Content>
    </Container>
  )
}