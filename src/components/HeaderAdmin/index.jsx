import { Container } from "./style";

import { ButtonTransparrent } from '../ButtonTransparent'
import { Button } from '../Button'

import { Spin as Hamburger } from 'hamburger-react'

import { AiOutlineSearch ,AiOutlinePlus } from 'react-icons/ai'
import { FaMoneyCheck } from 'react-icons/fa'
import { ImExit } from 'react-icons/im'
import { BsHexagonFill } from 'react-icons/bs'

import { useNavigate} from "react-router-dom";
import { useAuth } from '../../hooks/auth.jsx'
import { useState,useEffect } from "react";
import { api } from "../../services/api";

export const HeaderAdmin = ({setPlates=() => {}}) => {
  const {signOut} = useAuth()

  const navigate = useNavigate()
  
  const [ search,setSearch ] = useState('')
  const [active, setActive] = useState(false)
  const [isOpen, setOpen] = useState(false)

  
  const handleOrders = () => {
    navigate('/order')
  }

  const handleHome = () => {
    navigate('/')
  }

  const handleSignOut = () => {
    navigate('/')
    signOut()
  }

  const handleNewPlate = () => {
    navigate('/new')
  }


  const handleMenu = () => {
    setActive(!active)
  }

  useEffect(()=> {
    if(search.length > 0 && window.location.pathname === '/') {
      const fetchPlates = async () => {  
        const response = await api.get(`/plates?title=${search}`)
    
        setPlates(response.data)
      }
      fetchPlates()
    } else if(search.length == 0 ){
      const fetchPlates = async () => {
        const response = await api.get(`/plates`)

        setPlates(response.data)
      }
      fetchPlates()

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

        <ul className={active? 'nav-menu active': 'nav-menu '}>
          <li className="nav-item">
            <ButtonTransparrent
              className='new ' 
              title='Novo Prato'
              onClick={handleNewPlate}
              Icon={AiOutlinePlus}
              iconSize={20}
            />
          </li>
          <li className="nav-item">
            <div className='search '>
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
              className={active? 'request ' : 'isDisable  request'}
              onClick={handleOrders}
            />
          </li>

          <li className="nav-item">
            <ButtonTransparrent
              Icon={ImExit}
              iconSize={30}
              className={active? 'exit ' : 'isDisable  exit'}
              onClick={handleSignOut}
            />
          </li>
        </ul>
        <button 
          className="menu" 
          type="button"
          onClick={handleMenu}
        >
          <Hamburger toggled={isOpen} toggle={setOpen}/>
        </button>
      </nav>


      





  






    </Container>
  )
}