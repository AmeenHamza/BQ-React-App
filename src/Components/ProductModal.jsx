import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Slider from './Slider';
import ReactStars from 'react-stars'


export default function ProductModal(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  console.log(props.details)

  const addToCart = (val) => {
    console.log(val);
  }
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        View Details
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size="xl"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>{props.details.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-md-6">
              <div>
                <Slider images={props.details.images} />
              </div>
            </div>
            <div className="col-md-6">
              <div>
                <h1>{props.details.title}</h1>
                <h3 className='text-secondary'>{props.details.brand}</h3>
                <p>{props.details.category}</p>
                <p>Price : <del>{props.details.price}</del> - <ins>{props.details.discountPercentage}</ins></p>
                <p>rating:

                  <ReactStars
                    count={props.details.rating}
                    value={props.details.rating}
                    edit={false}
                    size={24}
                    color2={'#ffd700'} />
                </p>
                <p>Stock left: {props.details.stock}</p>
                <p>Details: {props.details.description}</p>

              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => addToCart(props.details)}>Add to cart</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
