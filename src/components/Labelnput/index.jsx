import { Container } from "./style"


export const LabelInput = ({text, placeholder, id, type=text, ...rest}) => {
  return(
    <Container {...rest}>
      <label htmlFor={id}>{text}</label>
      <input type={type} placeholder={placeholder} id={id}/>
    </Container>
  )
}