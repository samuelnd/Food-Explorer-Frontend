import { Container } from "./style";


export const ButtonTransparrent = ({title='', onClick,Icon = false, iconSize = false,iconColor='',  ...rest}) =>{


  return(
    <Container  onClick={onClick} {...rest}>
      {Icon && <Icon size={iconSize} color={iconColor}/>}
      {title}
    </Container>
  )
}