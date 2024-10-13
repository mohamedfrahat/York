import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Helmet } from 'react-helmet';
import '././SingleProduct.css';
import slider1 from '../../Images/0001153_split-ac_520.webp';
import slider2 from '../../Images/0001156_ducted-split_520.webp';
import slider3 from '../../Images/0001157_packaged_520.webp';
import slider4 from '../../Images/0001158_air-curtains_520.webp';
import Recommended from '../Recommended/Recommended';
import Loading from '../Loading/Loading'; 
export default function SingleProduct() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [selectedImage, setSelectedImage] = useState('');
    const [loading, setLoading] = useState(true); 

    const fetchProduct = async () => {
        try {
            const { data } = await axios.get(`https://dummyjson.com/products/${id}`);
            setProduct(data);
            setSelectedImage(data.thumbnail); 
            setLoading(false);
        } catch (error) {
            console.error('Error fetching product:', error);
            setLoading(false); 
        }
    };

    useEffect(() => {
        fetchProduct();
    }, [id]);

  
    if (loading) return <Loading large={true} />;

    
    const additionalImages = [
        slider4,  
        slider1, 
        product.thumbnail, 
        slider2, 
        slider3, 
    ];

    const productSchema = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": product.title,
        "image": product.thumbnail,
        "description": product.description,
        "brand": {
            "@type": "Brand",
            "name": "York"
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": product.rating,
            "reviewCount": product.rating.count
        }
    };

    return (
        <div className="single-product-container">
            <div className="container">
                <div className="product-details row">
                    <div className="product-image col-md-5">
                        <img src={selectedImage} alt={product.title} height={250} />
                        <div className="thumbnail-images">
                            {additionalImages.map((img, index) => (
                                <img 
                                    key={index} 
                                    src={img} 
                                    alt={`Thumbnail ${index}`} 
                                    onClick={() => setSelectedImage(img)} 
                                    className={selectedImage === img ? 'selected-thumbnail' : ''}
                                    height={130}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="product-info col-md-7">
                        <h2>{product.title}</h2>
                        <div className="rating">
                            <span>{product.rating} <i className="fa-solid fa-star star"></i></span>
                            <span>({product.rating.count})</span>
                        </div>
                        <p className="price">EGP {product.price}</p>
                        <p className="description">{product.description}</p>
                        <button className="btn btn-primary add-to-cart">Add to Cart</button>
                        <p className="stock-info">
                            <img src="https://f.nooncdn.com/mpcms/EN0001/assets/80299f90-dd89-4c69-a3d3-19c884d5fc05.png" width={20} height={20}/> Only {product.stock} left in stock
                        </p>

                        <Helmet>
                            <meta charSet="utf-8" />
                            <title>{product.title}</title>
                            {/* JSON-LD structured data */}
                            <script type="application/ld+json">
                                {JSON.stringify(productSchema)}
                            </script>
                            
                        </Helmet>
                    </div>
                </div>
            </div>
            <Recommended />
        </div>
    );
}
