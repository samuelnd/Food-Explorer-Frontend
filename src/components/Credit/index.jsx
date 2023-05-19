import { Container, OtherInformation } from "./style";

import { Button } from '../Button'

import { FaMoneyCheck} from 'react-icons/fa'


export const Credit = ({paymentMethod}) => {
  return(
    <Container>

      <div className="creditCardNumber">
        <label htmlFor="creditCardNumber">Número do Cartão de Crédito</label>
        <input type="text" name="creditCardNumber" id="creditCardNumber"  placeholder="0000 0000 0000 0000"/>
      </div>


      <OtherInformation>
        <div>
          <label htmlFor="valid">Validade</label>
          <input type="text" name="valid" id="valid" placeholder="06/29" />
        </div>
        <div>
          <label htmlFor="cvc">CVC</label>
          <input type="text" name="cvc" id="cvc"  placeholder="000"/>
        </div>
      </OtherInformation>

      <Button
        Icon={FaMoneyCheck}
        title='Finalizar pagamento'
        onClick={paymentMethod}
      />

    </Container>
  )
}