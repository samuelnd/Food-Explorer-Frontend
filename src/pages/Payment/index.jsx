import { Container, Content } from "./style";

import { useEffect, useState } from "react";
import { useAuth } from '../../hooks/auth'
import { api } from "../../services/api";

import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'

import { OrdersPayment } from "../../components/OrdersPayment";
import { ButtonTransparrent } from "../../components/ButtonTransparent";



export const Payment = () => {
  const {user} = useAuth()
  
  // State to set total value of orders
  const [ value, setValue ] = useState(0)

  // State to save orders. It starts empty, but if it has data in localStorage it starts with that data
  const [ allOrders, setAllOrders ] = useState(() =>{
    const localData = localStorage.getItem("@foodexplorer:plates")
    return localData ? JSON.parse(localData) : []
  })

  //Remove plate using id to select the plate
  const removePlate = (id) => {

    //Create new array withou plate select
    const filteredAllOrders = allOrders.filter(plate => plate.id !== id)

    //Set the new array to array list
    setAllOrders(filteredAllOrders)

    //Set the new array to localStorage
    localStorage.setItem("@foodexplorer:plates", JSON.stringify(filteredAllOrders))
  }

  //Set total value of orders
  useEffect(()=> {
    let sum = 0
    allOrders.forEach(plate => {
      sum += Number(plate.quantity) * Number(plate.price.replace(',', '.'))
    });
    setValue(sum)
  },[allOrders])

  return(
    <Container>
      {user.admin ? <HeaderAdmin/> : <Header/>}
      <Content>
        
        <div className="orders">
          <h4>Meu pedido</h4>

          <div className="scroll">

          { allOrders &&
            allOrders.map(order => (
              <div key={order.id} className='foods'>
                <img src={`${api.defaults.baseURL}/plates/${order.img}`} alt="food img" />
                <div>
                  <div className="infos">
                    <span className="quantity">{order.quantity} x</span>
                    <span className="name">{order.name}</span>
                    <span className="value"> R$ {order.price}</span>
                  </div>

                  <ButtonTransparrent
                    title='Excluir'
                    onClick={() => removePlate(order.id)}
                  />
                </div>
            </div>
            ))
          }

          </div>


          <h5>Total: R$ {value} </h5> {/* */}
        </div>
        
        <div className="payments">
          <h4>Pagamentos</h4>

          <OrdersPayment
            status='pending'
            allOrders={allOrders}

          />
        </div>

      </Content>
      <Footer/>
    </Container>
  )

}