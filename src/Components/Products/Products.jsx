import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import'./Products.css'
export default function Products() {
    const [products, setProducts] = useState([]);
    const getAllProducts = async () => {
        try {
            const { data } = await axios.get('https://dummyjson.com/products');
            setProducts(data.products);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        getAllProducts();
     
    }, []);
  return (
    <div className='px-5 mt-3 products'>
      <div className="row">
      {products.map(product => (
                  
                <div className="col-md-3">
                      <div className="product m-2 p-2 position-relative">
                      <div className="wish">
                          <i className="fa-regular fa-heart"></i>
                      </div>
                          <button className='cart'><img src="https://f.nooncdn.com/s/app/com/noon/icons/quick-atc-add-to-cart-grey.svg" alt="add-to-cart" width="24px" height="24px" className="sc-d13a0e88-1 pdeNg" /></button>

                      <Link to={`/SingleProduct/${product.id}`} key={product.id}   >
                      <div className="product-img bg-light">
                          <img src={product.thumbnail} alt={product.title} height={200} className="card-img-top w-100" />
                          <p className='rate'>{product.rating} <i className="fa-solid fa-star"></i> <span>({product.rating.count})</span></p>
                      </div>
                      <div className="card-body mt-2">
                          <h5 className="card-title h6">{product.title.split(' ').slice(0, 2).join(' ')}</h5>
                          <h6 className="card-text">EGP: <span className='fw-bolder fs-5'>{product.price}</span></h6>
                          <h6>Category: {product.category}</h6>
                          <p className='text-muted'>Only {product.stock} left in stock</p>
                          
                      </div></Link>
                  </div>
                </div>
              
          ))}
      </div>
    

    </div>
  )
}
