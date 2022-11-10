import React, { useState } from 'react';
import {Carousel} from 'react-bootstrap';


import "./Home.css"
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    CardFooter} from "reactstrap";
import Footer from './Footer'
    

  
function Accueil() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className='body'>
    <div>
        
        <Carousel variant="dark">
      <Carousel.Item>
        <img
          className="d-block "
          src="https://www.meubles-bringer.fr/wp-content/uploads/2018/11/canape-ameublement-sejour-bringer-1.jpg"
          alt="furnishing"
        />
        <Carousel.Caption>
          <h5 className='h5'>Furnishing</h5>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block "
          src="https://img-4.linternaute.com/JLKw5PYU8I_JP9POLIQAqBdhLMg=/1500x/smart/fac6d59eb91a44e886947968af8ecb2e/ccmcms-linternaute/21413766.jpg"
          alt="Cars"
        />
        <Carousel.Caption>
          <h5 className='h5'>Cars</h5>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block "
          src="https://childrenincorporated.org/wp-content/uploads/2022/10/shutterstock_455876137.jpg"
          alt="Clothes"
        />
        <Carousel.Caption>
          <h5 className='h5'>Clothes</h5>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    
    </div>
    {/* ------------------ */}

    <div
    style={{
      display: "flex"
    }}
    className="space"
  >
    <div class="col-1">
      <Card
        style={{
          padding: "5px"
        }}
      >
        <CardImg top width="100%" src={"https://cdn-icons-png.flaticon.com/512/3435/3435184.png"} alt="Card image cap" />
        <CardBody>
          <CardTitle style={{ fontWeight: "bold" }}>100%</CardTitle>
          
        </CardBody>
        <CardFooter>
          <small className="text-muted">Satisfaction guaranteed</small>
        </CardFooter>
      </Card>
    </div>
    <div class="col-2">
      <Card
        style={{
          padding: "5px"
        }}
      >
        <CardImg top width="100%" src={"https://www.focusedu.org/wp-content/uploads/2018/12/circled-user-male-skin-type-1-2.png"} alt="Card image cap" />
        <CardBody>
          <CardTitle style={{ fontWeight: "bold" }}>2 945+</CardTitle>
          
        </CardBody>
        <CardFooter>
          <small className="text-muted">Happy customers</small>
        </CardFooter>
      </Card>
    </div>
    <div class="col-3">
      <Card
        style={{
          padding: "5px"
        }}
      >
        <CardImg top width="100%" src={"https://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/calendar-icon.png"} alt="Card image cap" />
        <CardBody>
          <CardTitle style={{ fontWeight: "bold" }}>10</CardTitle>
          
        </CardBody>
        <CardFooter>
          <small className="text-muted">Years on Market</small>
        </CardFooter>
      </Card>
    </div>
  </div>
  <div>
  <Footer/>
  </div>
  </div>


  );
}

export default Accueil;