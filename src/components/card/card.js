import React , { useState, useEffect }  from 'react';
import Card from 'react-bootstrap/Card';
import IMG from '../images/img.jpg';
import './card.css';

function BookCard({book_title}){
    return(
        <Card class="child" style={{ width: '18rem' }}>
            <div class="img-div">
                <p class="position-div">1</p>
                <Card.Img variant="top" src={IMG} />
            </div>
            
            <Card.Body>
                <Card.Title>{book_title}</Card.Title>

                {/* <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text> */}
            </Card.Body>
        </Card>
    )
}
export default BookCard;