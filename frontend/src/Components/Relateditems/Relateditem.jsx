import React from 'react';
import './Relateditems.css';
import { Link } from 'react-router-dom';

const RelatedItem = (props) => {
  return (
    // <div className='col-12 col-sm-6 col-md-4 col-lg-3 mb-4'>
    //   <div className='related-item-card h-100 d-flex flex-column'>
    //     <Link
    //       className='related-item-link text-decoration-none'
    //       to={`/product/${props.id}`}
    //       onClick={() => window.scrollTo(0, 0)}
    //     >
    //       <div className="related-item-image-wrapper">
    //         {/* Ensure props.image points to correct image path */}
    //         <img
    //           src={props.image}
    //           alt={props.name}
    //           className="related-item-image card-img-top img-fluid"
    //         />
    //       </div>
        
    //       <div className="related-card-body p-3 flex-fill d-flex flex-column">
    //         <p className="related-card-text">{props.name}</p>
    //         <p className="related-item-description text-muted flex-fill">{props.description}</p>
    //         <div className='mt-auto'>
    //           <div className="related-item-price d-flex justify-content-between align-items-center">
    //             <div className="related-item-price-new">
    //               Rs {props.new_price}
    //             </div>
    //             <div className="related-item-price-old text-decoration-line-through">
    //               Rs {props.old_price}
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </Link>
    //   </div>
    // </div>
    <>
    <Link
          className='related-item-link text-decoration-none'
          to={`/product/${props.id}`}
          onClick={() => window.scrollTo(0, 0)}
        >
    
  <div class="card related-card" >
    <img class="card-img-top shadow-image" src={props.image} alt="Card image cap" width="100" height="300" />
    <div class="card-body">
      <h5 class="card-title text-center">{props.name}</h5>
      <br />
      <p class="card-text">{props.description}</p>
      <div className="align-bottom related-price">
      <p className='card-text font-weight-bold text-success text-left card-link'>Rs{props.old_price}</p>
      <p className='card-text font-weight-bold text-success text-right card-link'>Rs{props.new_price}</p>
      </div>
      
     
    </div>
  </div>
  
  

</Link>
</>
  );
}

export default RelatedItem;
