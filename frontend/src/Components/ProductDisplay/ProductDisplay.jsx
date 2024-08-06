import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from '../Assests/star_icon.png'
import star_dull_icon from '../Assests/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext'
import { toast } from 'react-toastify'
import 'bootstrap/dist/css/bootstrap.min.css';

function ProductDisplay(props) {
    const {product}=props;
    const {addToCart}=useContext(ShopContext)
    const renderStars = (rating) => {
        const fullStars = Math.floor(rating);
        const halfStar = rating % 1 !== 0;
        const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

        return (
            <>
                {Array(fullStars).fill(<i className="bi bi-star-fill text-warning"></i>)}
                {halfStar && <i className="bi bi-star-half text-warning"></i>}
                {Array(emptyStars).fill(<i className="bi bi-star text-warning"></i>)}
            </>
        );
    };
  return (
//     <div className='productdisplay'>
//         <div className="productdisplay-left">
//             <div className="productdisplay-img-list">
//                 <img src={product.image} alt=""/>
//                 <img src={product.image} alt=""/>
//                 <img src={product.image} alt=""/>
//                 <img src={product.image} alt=""/>
//             </div>
//             <div className="productdisplay-img">
//                 <img className='productdisplay-main-img' src={product.image} alt="" />
//             </div>
//         </div>
//         <div className="productdisplay-right">
//             <h1>{product.name}</h1>
//             <div className="productdisplay-right-stars">
//                 <img src={star_icon} alt="" />
//                 <img src={star_icon} alt="" />
//                 <img src={star_icon} alt="" />
//                 <img src={star_dull_icon} alt="" />
//                 <p>(122)</p>
//             </div>
//             <div className="productdisplay-right-prices">
//                 <div className="productdisplay-right-price-old">Rs{product.old_price}</div>
//                 <div className="productdisplay-right-price-new">Rs{product.new_price}</div>
//             </div>
//             <div className="productdisplay-right-description">
//                 A good Product which is naturally made.
//             </div>
//             <button onClick={()=>{addToCart(product.id); toast.success(`${product.name} added to cart successfully`,{position:'bottom-right',autoClose:2000})}}>ADD TO CART</button>
//             <p className='productdisplay-right-category'><span>Category:</span>Soap,Lemon S</p>
//             <p className='productdisplay-right-category'><span>Tags:</span>Latest,Natural</p>
//         </div>
//     </div>
    <>
    <div className="container mt-5">
            <div className="row">
                <div className="col-lg-6">
                    <div id="productCarousel" className="carousel slide border" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={product.image} className="d-block w-100 img-fluid border" style={{ maxHeight: '400px', objectFit: 'contain' }} alt="Product Image 1" />
                            </div>
                            <div className="carousel-item">
                                <img src={product.image} className="d-block w-100 img-fluid border" style={{ maxHeight: '400px', objectFit: 'contain' }} alt="Product Image 2" />
                            </div>
                            <div className="carousel-item">
                                <img src={product.image} className="d-block w-100 img-fluid border" style={{ maxHeight: '400px', objectFit: 'contain' }} alt="Product Image 3" />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#productCarousel" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#productCarousel" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                    <div className="row mt-3">
                        <div className="col-4">
                            <img src={product.image} className="img-thumbnail img-fluid border" style={{ maxHeight: '100px', objectFit: 'contain' }} alt="Product Image 1" data-bs-target="#productCarousel" data-bs-slide-to="0" />
                        </div>
                        <div className="col-4">
                            <img src={product.image} className="img-thumbnail img-fluid border" style={{ maxHeight: '100px', objectFit: 'contain' }} alt="Product Image 2" data-bs-target="#productCarousel" data-bs-slide-to="1" />
                        </div>
                        <div className="col-4">
                            <img src={product.image} className="img-thumbnail img-fluid border" style={{ maxHeight: '100px', objectFit: 'contain' }} alt="Product Image 3" data-bs-target="#productCarousel" data-bs-slide-to="2" />
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <h1 className="product-title">{product.name}</h1>
                    <div className="rating mb-3">
                        {renderStars(2.5)}
                    </div>
                    <p className="description">{product.description}</p>
                    <p className="category"><strong>Category:</strong> {product.category}</p>
                    <p className="price">
                        <span className="text-muted text-decoration-line-through">MRP: ${product.old_price}</span>
                        <span className="offer-price text-danger ms-3">Offer Price: ${product.new_price}</span>
                    </p>
                    <button onClick={()=>{addToCart(product.id); toast.success(`${product.name} added to cart successfully`,{position:'bottom-right',autoClose:2000})}} className="btn btn-primary mt-3">Add to Cart</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default ProductDisplay