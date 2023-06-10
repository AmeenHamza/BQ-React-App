import React, { useEffect, useState } from 'react'
import Counter from './Components/Counter'
import ProductCard from './Components/ProductCard'
import Spinner from 'react-bootstrap/Spinner';

export default function App() {

  const [products, setProducts] = useState([])
  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(data => setProducts(data.products))
      .catch(err => console.log(err))

  }, [])
  return (
    <>
      {/* <Counter /> */}

      <div className="container">
        <h1 className="my-5 text-center">Products</h1>
        <div className="row">

          {
            products.length > 0 ? (
              <>
                {
                  products.map((product, index) => <ProductCard data={product} key={index} />)
                }
              </>

            ) :
              <div className="d-flex justify-content-center align-items-center"
                style={{ width: '100vw', height: '60vh' }}>
                <Spinner animation="grow" />
              </div>
          }



        </div>
      </div>
    </>
  )
}
