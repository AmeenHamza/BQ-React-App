import Carousel from 'react-bootstrap/Carousel';

function Slider(props) {
    return (
        <Carousel>
            {
                props.images.map((image) => (
                    <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={image}
                        alt="First slide"
                    />
                </Carousel.Item>
                ))
            }
                
            
        </Carousel>
    );
}

export default Slider;