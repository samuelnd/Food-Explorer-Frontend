import { Container } from "./style";

export const Input = ({title, type, placeholder, name, value,...rest}) => {
  return(
    <Container {...rest}>
      <label htmlFor={name}>{title}</label>
      <input type={type} placeholder={placeholder} name={name} id={name}/>
    </Container>
  )
}