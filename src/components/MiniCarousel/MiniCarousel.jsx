import React, {Component} from "react";
import Carousel from 'react-elastic-carousel';

import { Button, CarouselItems, div, WrapNew } from "./MiniCarousel.Style";
import carData from "../mock/data";
import CarouselAccordion from "./MInICarouselAc";
// import car1 from '../../assets/main/carouselcamp.png';


const breakPoints = [
    {width:1, itemsToShow:1},
    {width:550, itemsToShow:2},
    {width:768, itemsToShow:3},
    {width:1200, itemsToShow:4},

]

export default class MiniCarousel extends Component {


    render () {

        return (
            <Carousel breakPoints={breakPoints}>
                {carData.map(item => 
                    <CarouselItems key={item.id}>
                        <div>
                        <WrapNew>NEW</WrapNew>
                        <img src={item.photo} alt="car" width='300px' height='180px'/>
                        </div>
                        <h5>{item.company}</h5>
                        <Button>
                            <a href="">Discover the range</a>
                        </Button>
                        <CarouselAccordion/>
                    </CarouselItems>
                    )}
            </Carousel>
        )
    }

}