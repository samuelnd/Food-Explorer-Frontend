import { Container } from "./style";

import { FaCircle } from 'react-icons/fa'


export const OrderStatus = ({status}) => {

  const whatIsTheColor = () => {
    switch(status){
      case 'pending':
        return 'red'
      case 'readying':
        return 'yellow'
      case 'delivered':
        return 'green'
    }
  }

  const whatIsTheTitle = () => {
    switch(status){
      case 'pending':
        return 'Pendente'
      case 'readying':
        return 'Preparando'
      case 'delivered':
        return 'Entregue'
    }
  }

  return(
    <Container>
      <FaCircle
        color={whatIsTheColor()}
        size={10}
      />
      {whatIsTheTitle()}
    </Container>
  )
}