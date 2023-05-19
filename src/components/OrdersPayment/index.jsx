import { Container, Image } from "./style";

import { useState } from "react";
import { api } from "../../services/api";


import { ButtonTransparrent } from "../ButtonTransparent";
import { Qrcode } from "../Qrcode";
import { Credit } from '../Credit'

import { MdOutlineAttachMoney, MdOutlineCreditCard} from 'react-icons/md'
import { AiOutlineCheckCircle, AiOutlineClockCircle } from 'react-icons/ai'
import { RiRestaurantLine } from 'react-icons/ri'
import { useNavigate } from "react-router-dom";




export const OrdersPayment = ({status, allOrders}) => {

  const  navigate = useNavigate()

  const [ paymentMethod, setPaymentMethod ] = useState(status)

  const changePayment = async () => {
    if(allOrders.length === 0 ){
      return alert('Não há itens no carrinho')
    }else {
      const data = localStorage.getItem("@foodexplorer:plates")
      const newData = JSON.parse(data).map(data => (
        {
          name: data.name,
          quantity: data.quantity
        }
      ))

      await api.post('/orders',{
        status,
        description: JSON.stringify(newData)
      })
      localStorage.removeItem("@foodexplorer:plates")
      setPaymentMethod('aproved')
      navigate('/')
      return alert('Pedido efetuado')
    }
  }


  const handlePayment = (statusReceive) => {
    switch(statusReceive){
      case 'pending':
        return (
          <div className="status-order">
            <AiOutlineClockCircle size={150} color='#c4c4cc'/>

            <div>
              <h3>Aguardando pagamento no caixa </h3>
              <p>Escolha uma forma de pagamento</p>
            </div>
          </div>
        )
      case 'pix':
        return <Qrcode/>
      case 'credit':
        return <Credit paymentMethod={changePayment} />
      case 'aproved':
        return(
          <div className="status-order">
            <AiOutlineCheckCircle size={150} color='#c4c4cc'/>
            <h3>Pagamento aprovado!</h3>
          </div>
        )
      case 'delivered':
        return(
          <div className="status-order">
            <RiRestaurantLine size={150} color='#c4c4cc'/>       
            <h3>Pedido entregue!</h3>
          </div>
          )

    }
  }

  return(
    <Container>

      <div className="pay" >
        <ButtonTransparrent
          Icon={MdOutlineAttachMoney} 
          iconSize={30}
          title='PIX'
          className={paymentMethod === 'pix' ? 'active' : ''}
          onClick={() => setPaymentMethod('pix')}
        />

        <ButtonTransparrent
          Icon={MdOutlineCreditCard}
          iconSize={30}
          title='Crédito'
          className={paymentMethod === 'credit' ? 'active' : ''}
          onClick={() => setPaymentMethod('credit')}

        />

      </div>

      <Image>
        {handlePayment(paymentMethod)}
      </Image>



    </Container>
  )
}