import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from 'react'
import ProductModal from './ProductModal'

export default function ProductCard(props) {
    // console.log(props.data)
    return (
        <div className="col-md-3">
            <Card>
                <Card.Img variant="top" src={props.data.thumbnail} />
                <Card.Body>
                    <Card.Title>{props.data.title}</Card.Title>
                    <Card.Text>
                        {/* {props.data.description.lengthprops.data.description} */}


                        {props.data.description.length > 50 ?
                            `${props.data.description.substring(0, 50)} ...` : props.data.description
                        }
                    </Card.Text>
                    <ProductModal details={props.data} />
                </Card.Body>
            </Card>
        </div>
    )
}
