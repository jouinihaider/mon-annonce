import React,{useState,useEffect} from "react";
import Container from 'react-bootstrap//esm/Container'
import axios, * as others from 'axios';
import OfferCard from "./OfferCard";
// var FontAwesomeIcon = require('react-fontawesome');
import Footer from './Footer'

const Collection = () => {
    const [offers, setOffers]=useState([]);
    const [filtredOffers, setFiltredOffers]=useState([]);
    const [text ,setText] = useState('')

    useEffect(() => {
        axios.get('http://localhost:3333/offers')
        .then(response => {setOffers(response.data);setFiltredOffers(response.data) });
        
    },[])
    const onChangeHandler = (searched) =>{
        setText(searched)

        console.log('searched :',searched,'text : ',text);
        let matches = offers;
        if (searched.length > 0){
            matches = offers.filter(offer => {
            const regex = new RegExp(`${searched}`,"gi");
            return offer.title.match(regex)

            })
        }
        setFiltredOffers(matches)
    }


    return(
            
        <>
       <div className="nav-bar">
    <form className="form" >
       
        <input type="text" className='col-md-12' style={{marginTop:5}}
        onChange={e=>onChangeHandler(e.target.value)}
        placeholder="Search..."

        />
       
    </form>
    
    
    </div>
       
       <Container>
       
           {filtredOffers.length ? filtredOffers.map((offer)=>(

                <OfferCard key={offer.id} offer={offer} />
           )): ''}
           
       </Container>
    <div>
    <Footer/>
        </div>   
       
       </>
        
        
    )

}
export default Collection;