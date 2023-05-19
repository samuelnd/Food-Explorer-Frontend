import { Container } from "./style";

import qrdcode from '../../assets/qrcode/qrcode.svg'

export const Qrcode = () => {
  return(
    <Container>
      <img src={qrdcode} alt="qrcode image" />
    </Container>
  )
}