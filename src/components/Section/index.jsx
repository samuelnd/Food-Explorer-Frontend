import { Container } from "./style";


import Carousel from '@itseasy21/react-elastic-carousel';


import { MdOutlineArrowBackIos , MdOutlineArrowForwardIos } from 'react-icons/md'


export const Section = ({title, children}) => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 910, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];
  return (
    <Container>
      <h2>{title}</h2>

      <Carousel
        breakPoints={breakPoints}
        pagination={false}
      >
        {children}
      </Carousel>
      
    </Container>
  )
}