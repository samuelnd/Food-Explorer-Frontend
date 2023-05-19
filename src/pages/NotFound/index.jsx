import { Container } from "./style"
import { TbError404 } from 'react-icons/tb'
import { useNavigate } from "react-router"


import { ButtonTransparrent } from "../../components/ButtonTransparent"

export const NotFound = () => {
  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate('/')
  }
  return(
    <Container>
      <h2>Page Not Found</h2>
      <ButtonTransparrent 
        Icon={TbError404}
        iconSize={30}
        title="Click here to back home"
        onClick={handleNavigate}
      />
    </Container>
  )
}