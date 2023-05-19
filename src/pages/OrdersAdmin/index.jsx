import { Container, Content } from "./style";

import { Header } from '../../components/Header'
import { HeaderAdmin } from '../../components/HeaderAdmin'
import { Footer } from '../../components/Footer'
import { OrderStatus } from "../../components/OrderStatus";
import { FaCircle } from 'react-icons/fa'

import { useAuth } from '../../hooks/auth'
import { useEffect, useState } from "react";
import { api } from "../../services/api";



export const OrdersAdmin = () => {
  const {user} = useAuth()

  const [items, setItems] = useState([])



  const fetchOrder = async () => {
    const response = await api.get('/ordersAdm')
    const data = response.data
    const newData = data.map(data => {
      const time = data.update_at.split(' ')
      return(        {
        id: data.id,
        status: data.status,
        description: JSON.parse(data.description),
        date: time[0].replaceAll('-', '/').split('/').reverse().join('/').slice(0,5),
        hour: time[1].slice(0,5)
      } )
    })

    setItems(newData)
  }

  const handleStatus = async (value,id) => {
    await api.put(`/ordersAdm/${id}`, {
      status : value
    })
    fetchOrder()
  }

  const handleOptions = (option) => {
    switch(option){
      case('Pendente'):
        return 'pending'
      case('Preparando'):
        return 'readying'
      case('Entregue'):
        return 'delivered'
    }
  }

  useEffect(()=> {
    fetchOrder()
  }, [])


  return(
    <Container>
     {user.admin ? <HeaderAdmin/> : <Header/>}

      <Content>
        <h2>Pedidos</h2>

          <table>
            <thead>
                <tr>
                  <th>Status</th>
                  <th>Código</th>
                  <th>Detalhamento</th>
                  <th>Data e hora</th>
                </tr>
            </thead>
            <tbody>

                {
                  items.map(item => (
                    <tr key={String(item.id)}>
                      <td>
                        <select 
                          name="status" 
                          id="status" 
                          value={item.status}
                          onChange={(e) => handleStatus(e.target.value,item.id)}
                        >
                          <option value="default">Status</option>
                          <option value="readying">Preparando</option>
                          <option value="pending">Pendente</option>
                          <option value="delivered">Entregue</option>
                        </select>
                      </td>
                      <td>
                        <p>{String(item.id).padStart(5, '0')}</p>
                      </td>
                      <td>
                        <p>
                          {item.description.map((detail,index) => (
                            <span key={index}>{detail.quantity} x {item.description.length - 1 === index ? detail.name  : detail.name + ', ' } </span>
                          ))}
                        </p>
                      </td>
                      <td>
                        <p>{item.date} às {item.hour}</p>
                      </td>
                    </tr>

                  ))
                }


            </tbody>
          </table>

        

      </Content>
      

      <Footer/>
    </Container>
  )
}