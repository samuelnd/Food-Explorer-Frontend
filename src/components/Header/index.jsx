import { Container } from "./style";

import { ButtonTransparrent } from '../ButtonTransparent'
import { Button } from '../Button'

import { AiOutlineSearch , AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai'
import { FaMoneyCheck } from 'react-icons/fa'
import { ImExit } from 'react-icons/im'
import { BsHexagonFill } from 'react-icons/bs'

import { Spin as Hamburger } from 'hamburger-react'


import { useNavigate} from "react-router-dom";
import { useAuth } from '../../hooks/auth.jsx'
import { useEffect, useState } from "react";
import { api } from "../../services/api";

export const Header = ({ handleShowFavorites, allQuantity, setPlates , favoriteTitle='Favoritos'}) => {
  const navigate = useNavigate()

  const {signOut} = useAuth()
  const [ search,setSearch ] = useState('')

  const [active, setActive] = useState(false)
  const [isOpen, setOpen] = useState(false)
  
  const handleOrders = () => {
    navigate('/orders')
  }

  const handleHome = () => {
    navigate('/')
  }

  const handleShopCart = () => {
    navigate('/payment')
  }

  const handleSignOut = async () => {
    const response = await api.get('/favorites')
    const favoriteList = localStorage.getItem('@foodexplorer:favorites')

    if(favoriteList.length !== 0){
      if(!response.data.favoriteList){
        await api.post('/favorites', {favoriteList} )
      } else {
        console.log(favoriteList + '2')
        await api.put('/favorites', {favoriteList} )
      }
    }


    localStorage.removeItem('@foodexplorer:favorites')

    navigate('/')
    signOut()
  }


  useEffect(()=> {
    if(search.length > 0 && window.location.pathname == '/') {
      const fetchPlates = async () => {  
        const response = await api.get(`/plates?title=${search}`)
    
        setPlates(response.data)
      }
      fetchPlates()
    } else if(search.length == 0 ){
      if(setPlates){
      const fetchPlates = async () => {
        const response = await api.get(`/plates`)

        setPlates(response.data)
      }
      fetchPlates()
      }
    }
  },[search])


  return(
    <Container>      


      <nav className="navbar">
        <div className="logo">
          <ButtonTransparrent
            Icon={BsHexagonFill}
            iconSize={30}
            title='Food Explorer' 
            className='logo'
            onClick={handleHome}
          />
        </div>

        <ul className={isOpen? 'nav-menu active': 'nav-menu '}>
          <li className="nav-item">
            <ButtonTransparrent
              className='favorites'
              title={favoriteTitle}
              onClick={handleShowFavorites}
              Icon={AiOutlineHeart}
              iconSize={20}
            />
            
          </li>
          <li className="nav-item">
            <div className="search">
              <AiOutlineSearch 
                size={20} 
                color='#C4C4C4'
                />
              <input 
                type="text" 
                placeholder="Busque pelas opções de pratos" 
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            
          </li>
          <li className="nav-item">
              <Button
                title='Pedidos'
                Icon={FaMoneyCheck}
                className='request'
                onClick={handleOrders}
              />

                      
          </li>
          <li className="nav-item">

            <ButtonTransparrent 
              Icon={AiOutlineShoppingCart}
              iconSize={30}
              title={allQuantity}
              className='shop-cart'
              onClick={handleShopCart}
            />

                      
          </li>
          <li className="nav-item">
            <ButtonTransparrent
              Icon={ImExit}
              iconSize={30}
              className='exit'
              onClick={handleSignOut}
            />
                      
          </li>
        </ul>
          <button 
            className="menu" 
            type="button"
          >
            <Hamburger toggled={isOpen} toggle={setOpen}/>
          </button>


      </nav>

    </Container>
  )
}