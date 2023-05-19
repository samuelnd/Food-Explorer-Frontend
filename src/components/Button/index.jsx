import { useAuth } from "../../hooks/auth";
import { Container } from "./style";


export const Button= ({title,Icon = false, ...rest}) => {
  const {loading} = useAuth()
  return(
    <Container 
      type="button" 
      disabled={loading === true ? true : false}
      loading={loading === true ? true : false}
      {...rest}
    >
      {Icon && <Icon size={20}/>}
      {loading === true ? 'AGUARDE' : title}
    </Container>
  )
}