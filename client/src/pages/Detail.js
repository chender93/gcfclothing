import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useQuery } from '@apollo/react-hooks';

import Cart from "../components/Cart";
import { useStoreContext } from "../utils/GlobalState";
import {
  REMOVE_FROM_CART,
  UPDATE_CART_QUANTITY,
  ADD_TO_CART,
  UPDATE_PRODUCTS,
} from "../utils/actions";
import { QUERY_PRODUCTS } from "../utils/queries";
import { idbPromise } from "../utils/helpers";
import spinner from '../assets/spinner.gif'

function Detail() {
  const [state, dispatch] = useStoreContext();
  const { id } = useParams();

  const [currentProduct, setCurrentProduct] = useState({});

  const { loading, data } = useQuery(QUERY_PRODUCTS);

  const { products, cart } = state;

  useEffect(() => {
    // already in global store
    if (products.length) {
      setCurrentProduct(products.find(product => product._id === id));
    } 
    // retrieved from server
    else if (data) {
      dispatch({
        type: UPDATE_PRODUCTS,
        products: data.products
      });

      data.products.forEach((product) => {
        idbPromise('products', 'put', product);
      });
    }
    // get cache from idb
    else if (!loading) {
      idbPromise('products', 'get').then((indexedProducts) => {
        dispatch({
          type: UPDATE_PRODUCTS,
          products: indexedProducts
        });
      });
    }
  }, [products, data, loading, dispatch, id]);

  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === id)
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
      });
      idbPromise('cart', 'put', {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        product: { ...currentProduct, purchaseQuantity: 1 }
      });
      idbPromise('cart', 'put', { ...currentProduct, purchaseQuantity: 1 });

    }
  }

  const removeFromCart = () => {
    dispatch({
      type: REMOVE_FROM_CART,
      _id: currentProduct._id
    });

    idbPromise('cart', 'delete', { ...currentProduct });
  };

  
//  function getMusic() {
//    if (currentProduct.music === 2) {
//    return <iframe src="https://open.spotify.com/embed/track/2oCMBtfvM5mCC2eF4Macn1" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
//   } else if((currentProduct.music === 1)) {
//  return <iframe src="https://open.spotify.com/embed/album/40qjZgwmxxR00Y1kh8mfpa" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>

//   }
//  return null;
//   }
 
  return (
    <>
      {currentProduct && cart ? (
        <div className="container my-1" id='grid'>
          <Link to="/">
            ← Back to Products
          </Link>

          <div id='grid-container'>

          <h2>{currentProduct.name}</h2>

          <p>
            {currentProduct.description}
          </p>
          <img
            src={`/images/${currentProduct.image}`}
            alt={currentProduct.name}
          />
          </div>
          <div id='grid-container2'>
          <p>
            <strong>Size:</strong>
            <select>{currentProduct?.sizes?.map(size=> (<option>
              {size}
            </option>))}
            </select>
          </p>
          <p>
            <strong>Price:</strong>
            ${currentProduct.price}
            {" "}
            </p>
            <div>
            <button onClick={addToCart}>
              Add
            </button>
            <button 
              disabled={!cart.find(p => p._id === currentProduct._id)} 
              onClick={removeFromCart}
            >
              Remove
            </button>
            </div>
          
          </div>

          
          {/* <div>{getMusic}</div> */}

          </div>
          
        
      ) : null}
      {
        loading ? <img src={spinner} alt="loading" /> : null
      }
      <Cart />
    </>
  );
};


export default Detail;



