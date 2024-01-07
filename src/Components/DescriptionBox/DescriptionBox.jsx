import React from 'react'
import './DescriptionBox.css'
const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="discriptionbox-nav-box">Description</div>
        <div className="discriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          An e-commerce website is an online platform that allows businesses to
          sell products or services to customers over the internet. It typically
          includes features such as product listings, shopping carts, secure
          payment options, and order processing. Users can browse through the
          website, select items they want to purchase, add them to their virtual
          shopping cart, and complete the transaction through a secure checkout
          process.
        </p>
        <p>
          E-commerce websites enable businesses to reach a global audience and
          provide customers with a convenient and efficient way to shop from the
          comfort of their own homes.
        </p>
      </div>
    </div>
  );
}

export default DescriptionBox