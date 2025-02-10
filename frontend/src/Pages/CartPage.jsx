import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CartCard from '../components/ProductCard/CartCard';
import { Link } from 'react-router-dom';

function CartPage() {
  const [UsersCartData, setUsersCartData] = useState([]);

  useEffect(() => {
    const getCartData = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        return alert('Token is missing , Please login');
      }
      const response = await axios.get(
        `http://localhost:8080/cart/get-user-cart-data?token=${token}`
      );
      console.log(response);
      setUsersCartData(response.data.cartData);
    }

    getCartData();
  }, []);
  return (
    <div>
      < Link to='/select-address'>
      <button style={{backgroundColor:"black",color:"white"}}>Checkout</button>
      </Link>
      {UsersCartData?.map((singleCartObject, index) => {
        return (
          <div key={index}>
            <CartCard
              title={singleCartObject.productId.title}
              images={singleCartObject.productId.images[0]}
              description={singleCartObject.productId.description}
              originalPrice={singleCartObject.productId.originalPrice}
              discountedPrice={singleCartObject.productId.discountedPrice}
              id={singleCartObject._id}
              createdBy={'sera@k.com'}

            />
          </div>
        );
      })}
    </div>
  );
}

export default CartPage;