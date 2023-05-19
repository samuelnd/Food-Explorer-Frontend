import { Container, Content } from "./style";

import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { HeaderAdmin } from "../../components/HeaderAdmin";
import { Section } from "../../components/Section";
import { Cards } from '../../components/Cards'
import { CardsAdmin } from '../../components/CardsAdmin'


import imgBanner from '../../assets/images/imageHome.png'

import { useState,useEffect } from "react";
import { useAuth } from '../../hooks/auth'
import { api } from "../../services/api";


export const Home = () => {
  const { user } = useAuth()

  const [favoriteP, setFavoriteP] = useState(() => {
    const localData = localStorage.getItem("@foodexplorer:favorites")
    return localData ? JSON.parse(localData) : []
  })

  const [ plates, setPlates ] = useState([])

  const [ mainPlates,setMainPlates] = useState([]) 
  const [ mainPlatesFavorites, setMainPlatesFavorites] = useState([])

  const [ dessertPlates,setDessertPlates ] = useState([]) 
  const [ dessertPlatesFavorites, setDessertPlatesFavorites ] = useState([])

  const [ drinks,setDrinks ] = useState([]) 
  const [ drinksFavorites, setDrinksFavorites ] = useState([])

  //Choose to show favorites or not
  const [ showFavorites, setShowFavorites ] = useState(false)

  const [ allQuantity, setAllQuantity ] = useState(0)

  // State to save orders. It starts empty, but if it has data in localStorage it starts with that data
  const [ allOrders, setAllOrders ] = useState(() =>{
    const localData = localStorage.getItem("@foodexplorer:plates")
    return localData ? JSON.parse(localData) : []
  })

  const handleShowFavorites = async () => {

    if(!favoriteP){
      return alert('Não há pratos favoritos')
    } 

    const favoritePlates = plates.filter(plate => favoriteP.includes(plate.id) )

    const mainFavorites = favoritePlates.filter(plate => plate.type == 'Prato Principal')
    setMainPlatesFavorites(mainFavorites)

    const dessertFavorites = favoritePlates.filter(plate => plate.type == 'Sobremesa')
    setDessertPlatesFavorites(dessertFavorites)

    const drinkFavorite = favoritePlates.filter(plate => plate.type == 'Bebida')
    setDrinksFavorites(drinkFavorite)
  
    //Show favorite On/Off
    setShowFavorites(!showFavorites)
  }

  // This function changes the order quantity
  const handleQuantity = () => {
    let sum = 0
    allOrders.forEach(plate => {
      sum += Number(plate.quantity)
    });
    setAllQuantity(sum)
  }

  // Get all plates
  useEffect(() =>{
    const fetchPlates = async () => {
      const response = await api.get('/plates')
      setPlates(response.data)
    }
    fetchPlates()

  }, [])

  // Get all favorites
  useEffect( ()=>{
    const fetchFavorites = async () => {

      const responseFavorites = await api.get('/favorites')
      if(!responseFavorites.data.favoriteList){
        localStorage.setItem('@foodexplorer:favorites', JSON.stringify([]))
      }else{
        localStorage.setItem('@foodexplorer:favorites', responseFavorites.data.favoriteList)
      }

    }

    fetchFavorites()
  },[])

  // Get data in localStorage
  useEffect(() => {
    const plate = JSON.parse(localStorage.getItem("@foodexplorer:plates"))

    if(plate){
      setAllOrders(plate)
      handleQuantity()
    }
  },[])

  // add new data to localStorage
  useEffect(() => {
   localStorage.setItem("@foodexplorer:plates",JSON.stringify(allOrders))
   handleQuantity()

  },[allOrders])

  // Select plates by type
  useEffect(()=> {
    const selectPlates = () => {
      const main = plates.filter(plate => plate.type == 'Prato Principal')
      setMainPlates(main)

      const dessert = plates.filter(plate => plate.type == 'Sobremesa')
      setDessertPlates(dessert)

      const drink = plates.filter(plate => plate.type == 'Bebida')
      setDrinks(drink)
    }
    selectPlates()
  },[plates])


  useEffect(()=>{
    localStorage.setItem("@foodexplorer:favorites",JSON.stringify(favoriteP))

  },[favoriteP])

  return(

    
    <Container>

      {
      user.admin ? 
        <HeaderAdmin
        setPlates={setPlates}
        /> 
        :  
        <Header
          handleShowFavorites={handleShowFavorites}
          allQuantity={allQuantity}
          favoriteTitle={showFavorites ? 'Todos' : 'Favoritos'}
          setPlates={setPlates}
      />
      }


        <Content>
        
          <div className="banner">
            <img src={imgBanner} alt="image fruits and cookie" />
            <div className="text-banner">
              <h2>Sabores Inigualáveis</h2>
              <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
            </div>
          </div>

          {mainPlates.length > 0 ?  
            <Section title='Pratos principais'>
      
              { 
                user.admin ? 
                mainPlates.map(plate => (
                  <CardsAdmin
                    key={plate.id}
                    id={plate.id}
                    className='card'
                    title={plate.title}
                    img={plate.img}
                    description={plate.description}
                    price={plate.price}
                    setAllOrders={setAllOrders}
                  />
                )) 
                :
              /* Check if render all plates or favorite plates */
                !showFavorites ? 
                mainPlates.map(plate => (
                  <Cards
                    key={plate.id}
                    id={plate.id}
                    className='card'
                    title={plate.title}
                    img={plate.img}
                    description={plate.description}
                    price={plate.price}
                    setAllOrders={setAllOrders}
                    setFavoriteP={setFavoriteP}
                    favoriteP={favoriteP}
                  />
                )) 
                :
                mainPlatesFavorites.map(plate => (
                  <Cards
                    key={plate.id}
                    id={plate.id}
                    className='card'
                    title={plate.title}
                    img={plate.img}
                    description={plate.description}
                    price={plate.price}
                    setAllOrders={setAllOrders}
                    setFavoriteP={setFavoriteP}
                    favoriteP={favoriteP}

                  />
                )) 
              }

            </Section>
            :
            ''
          }
          
          {dessertPlates.length > 0 ?
            <Section title='Sobremesas'>

              { 
                user.admin ? 
                dessertPlates.map(plate => (
                  <CardsAdmin
                    key={plate.id}
                    id={plate.id}
                    className='card'
                    title={plate.title}
                    img={plate.img}
                    description={plate.description}
                    price={plate.price}
                    setAllOrders={setAllOrders}
                  />
                )) 
                :
                !showFavorites ? 
              
                dessertPlates.map(plate => (
                  <Cards
                    key={plate.id}
                    id={plate.id}
                    className='card'
                    title={plate.title}
                    img={plate.img}
                    description={plate.description}
                    price={plate.price}
                    setAllOrders={setAllOrders}
                    setFavoriteP={setFavoriteP}
                    favoriteP={favoriteP}

                  />
                )) 
                :
                dessertPlatesFavorites.map(plate => (
                  <Cards
                    key={plate.id}
                    id={plate.id}
                    className='card'
                    title={plate.title}
                    img={plate.img}
                    description={plate.description}
                    price={plate.price}
                    setAllOrders={setAllOrders}
                    setFavoriteP={setFavoriteP}
                    favoriteP={favoriteP}

                  />
                )) 
                
              }

            </Section>
            :
            ''
          } 
          
          {drinks.length > 0 ?
            <Section title='Bebidas'>

              {               
              user.admin ? 
                drinks.map(plate => (
                  <CardsAdmin
                    key={plate.id}
                    id={plate.id}
                    className='card'
                    title={plate.title}
                    img={plate.img}
                    description={plate.description}
                    price={plate.price}
                    setAllOrders={setAllOrders}
                    
                  />
                )) 
                :
                !showFavorites ? 
              
                drinks.map(drink => (
                  <Cards
                    key={drink.id}
                    id={drink.id}
                    className='card'
                    title={drink.title}
                    img={drink.img}
                    description={drink.description}
                    price={drink.price}
                    setAllOrders={setAllOrders}
                    setFavoriteP={setFavoriteP}
                    favoriteP={favoriteP}              
                  />
                )) 
                :
                drinksFavorites.map(drink => (
                  <Cards
                    key={drink.id}
                    id={drink.id}
                    className='card'
                    title={drink.title}
                    img={drink.img}
                    description={drink.description}
                    price={drink.price}
                    setAllOrders={setAllOrders}
                    setFavoriteP={setFavoriteP}
                    favoriteP={favoriteP}
                  />
                ))       
              }

            </Section>
            :
            ''
          }

        
        </Content>

      
      <Footer/>
    </Container>
  )
}