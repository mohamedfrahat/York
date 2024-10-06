import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link } from 'react-router-dom';
import'./Recommended.css'

export default function Recommended () {
    const [products, setProducts] = useState([]);

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 6 
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 6 
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3 
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1 
        }
    };

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
        <div className="product_slider">
            <h4>Recommended for you</h4>
            <Carousel
                responsive={responsive}
                autoPlay={true}
                autoPlaySpeed={3000}
                infinite={true}
                showDots={false}
            >
                {products.map(product => (
                  
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
                    
                ))}
            </Carousel>
        </div>
    );
}
