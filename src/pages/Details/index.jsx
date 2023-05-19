import { Container, Content } from "./style";

import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useAuth } from '../../hooks/auth'
import { api } from "../../services/api";


import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Button } from '../../components/Button'
import { ButtonTransparrent } from "../../components/ButtonTransparent";


import { FaMoneyCheck} from 'react-icons/fa'
import { MdOutlineArrowBackIos } from 'react-icons/md'



export const Details = () => {
  const {user} = useAuth()
  const params = useParams()

  const [order, setOrder] = useState()



  const [ allQuantity, setAllQuantity ] = useState(0)

  // State to save orders. It starts empty, but if it has data in localStorage it starts with that data
  const [ allOrders, setAllOrders ] = useState(() =>{
    const localData = localStorage.getItem("@plates")
    return localData ? JSON.parse(localData) : []
  })
  const [quantity, setQuantity] = useState(1) 

  const navigate = useNavigate()

  // add one more amount
  const handleAddQuantity = () => {
    setQuantity(prevState => prevState + 1)
  }

  // remove one from quantity
  const handleRemoveQuantity = () => {
    if(quantity <= 1){  
      setQuantity(1)
      return alert('Quantidade mínima é 1')
    }
    setQuantity(prevState => prevState - 1)
  }

  const handleAllQuantity = () => {
    const order = {
      quantity: quantity,
      id: '01',
      name: 'Salada Ravanello',
      img: imgPlate  ,
      description:'Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.',
      ingredients:[
        {
          id: '01',
          name:'alface',
          img:imgIngredients,
        },
        {
          id: '02',
          name:'alface',
          img:imgIngredients,
        },
        {
          id: '03',
          name:'alface',
          img:imgIngredients,
        },
        {
          id: '04',
          name:'alface',
          img:imgIngredients,
        },
      ],
      price: 'R$ 25,97'
    
    }
    // Object Object containing the data

    // Save data from localStorage
    const savedPlates = JSON.parse(localStorage.getItem("@plates"))
    
    // If localStorage is empty save the plate
    if(!savedPlates){
      setAllOrders(order)
    }
    
    // Create a new list removing plate if plate exist in localStorage
    const filteredSavedPlates = savedPlates.filter(p => p.id !== order.id)


    // add the new list in allOrders(localStorage)
    setAllOrders(filteredSavedPlates)
    // add the plate in allOrders, without remove another data
    setAllOrders(prevState =>[...prevState, order])

  }

  const handleBack = () => {
    navigate(-1)
  }

    // This function changes the order quantity
  const handleQuantity = () => {
    let sum = 0
    allOrders.forEach(plate => {
      sum += Number(plate.quantity)
    });
    setAllQuantity(sum)
  }

  // Get data in localStorage
  useEffect(() => {
    const plate = JSON.parse(localStorage.getItem("@plates"))

    if(plate){
      setAllOrders(plate)
      handleQuantity()
    }
  },[])

  // add new data to localStorage
  useEffect(() => {
    localStorage.setItem("@plates",JSON.stringify(allOrders))
    handleQuantity()

  },[allOrders])

  useEffect(()=> {
    const fetchOrder = async () => {
      const response = await api.get(`/plates/${params.id}`)

      setOrder(response.data)
    }

    fetchOrder()
  },[])
  return(
    <Container>

      {user.admin ? <HeaderAdmin/> : <Header allQuantity={allQuantity}/>}



      <Content>

          <ButtonTransparrent 
            Icon={MdOutlineArrowBackIos}
            iconSize={30}
            title='voltar'
            onClick={handleBack}
          />


        {order && 
        <div className="info-plate">
          <img src={`${api.defaults.baseURL}/plates/${order.img}`}  alt="image plate" />

          <div className="infos">
            <h2>{order.name}</h2>
            <p>{order.description}</p>

            <li>
              {order.ingredients.map(ingredient => (
                <ul key={ingredient.id}>
                  <img src={`${api.defaults.baseURL}/${ingredient.img}`}  alt="ingredients" className="ingredients"/>
                  <span>{ingredient.title}</span>
                </ul>
              ))}

            </li>

            <div className="valueAndQuantity">
              <h4>{order.price}</h4>

              <div className="quantity">
                <div>
                  <button onClick={handleRemoveQuantity}>
                   &minus;
                  </button>
                  <span>{quantity.toString().padStart(2,0)}</span>
                  <button onClick={handleAddQuantity}>
                    &#43;
                  </button>
                </div>
                <Button
                  Icon={FaMoneyCheck}
                  title='incluir'
                  onClick={handleAllQuantity}
                />
              </div>
            </div>
          </div>

        </div>
        }


      </Content>

      <Footer/>
    </Container>
  )
}