import { Container } from "./style";

import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { ButtonTransparrent } from '../ButtonTransparent'
import { Button } from '../Button'

import { AiOutlineClose} from 'react-icons/ai'
import { api } from "../../services/api";

export const CardsAdmin = ({title, img, id, description, price , ...rest}) => {

  const navigate = useNavigate()

  // Change to page details using route params
  const handleDetails = () => {
    navigate(`/att/${id}`)
  }

  const handleDelete = async () => {

    try{
      await api.delete(`/plates/${id}`)
      return alert('Prato deletado')
    } catch {
      return alert('ERROR, favor tentar novamente')
    }

  }


  return(
    <Container {...rest}>

      <ButtonTransparrent
        Icon={AiOutlineClose}
        className='icon'
        iconSize={20}
        iconColor='red'
        onClick={handleDelete}
      />

      <img src={`${api.defaults.baseURL}/plates/${img}`} alt="plate img" />
      
      <ButtonTransparrent
        className='name'
        title={title}
        onClick={handleDetails}

      />
      <p>{description}</p>

      <h4>R$ {price}</h4>


    </Container>
  )
}