import ListGroup from 'react-bootstrap/ListGroup'
import Card from'react-bootstrap/Card';

import {Link} from 'react-router-dom'

function OfferCard({offer}) {
    return (
        
        <Card className='Card'>
        <Card.Body>
            <Card.Title>
            {offer.title}
            </Card.Title>
            <Card.Text>
                <strong>price :</strong>{offer.price}
            </Card.Text>
            <Card.Text>
                <strong>product_picture :</strong>{offer.product_picture}
            </Card.Text>
            <Card.Text>
                <strong>Category :</strong>{offer.category}
            </Card.Text>

            {/* <Card.Text>
                    <Link className='btn btn-dark' to={{pathname:"/offer/"+ offer_id, state:offer_id }}>Access to task details</Link>
                    
                </Card.Text> */}
            

        </Card.Body>
        </Card>
            
    );
}
export default OfferCard;