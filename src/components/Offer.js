import React,{useState,useEffect} from "react";
import Container from 'react-bootstrap//esm/Container';
import axios, * as others from 'axios';
import Card from'react-bootstrap/Card';
import {Link,useParams} from 'react-router-dom';

const Offer = () => {

    const { offerId } = useParams();
    const [offer, setOffer]=useState();
    console.log(offerId);
    useEffect(() => {
        axios.get('http://localhost:3333/offer/'+offerId)
            .then(response => setOffer(response.data));

    },[])

    return (
        <>
            <Container>
                <Card>
                    <Card.Body>
                        <Card.Title>
                            <h1>{offer?.title}</h1>
                        </Card.Title>
                        <Card.Text>
                            <p><strong>Description :</strong>{offer?.description}</p>
                        </Card.Text>
                        <Card.Text>
                            <p><strong>Picture :</strong>{offer?.category}</p>
                        </Card.Text>
                        <Card.Text>
                            <p><strong>Price :</strong>{offer?.price}</p>
                        </Card.Text>
                        {/* <Card.Text>
                            <Link className='btn btn-dark' to={"/offer/"+ offer?.id }>Access to product details</Link>
                        </Card.Text> */}

                    </Card.Body>

                </Card>
            </Container>
        </>
    )
}
export default Offer;