import React from 'react';
// import { useStoreContext } from "../../utils/GlobalState";
// import { REMOVE_FROM_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";

import { idbPromise } from "../../utils/helpers";
//REDUX
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, updateCartQuantity } from "../../utils/actions";

const CartItem = ({ item }) => {

  //REDUX
  const dispatch = useDispatch();
  const state = useSelector(state => state);

  const removeItemFromCart = item => {
    dispatch(removeFromCart(item.id, state));
    idbPromise('cart', 'delete', { ...item });
  };

  const onChange = (e) => {
    const value = e.target.value;
    if (value === '0') {
      dispatch(removeFromCart(item._id, state));
      idbPromise('cart', 'delete', { ...item });

    } else {
      dispatch(updateCartQuantity(item._id, parseInt(value)));
      idbPromise('cart', 'put', { ...item, purchaseQuantity: parseInt(value) });
    }
  }

  return (
    <div className="flex-row">
      <div>
        <img
          src={`/images/${item.image}`}
          alt=""
        />
      </div>
      <div>
        <div>{item.name}, ${item.price}</div>
        <div>
          <span>Qty:</span>
          <input
            type="number"
            placeholder="1"
            value={item.purchaseQuantity}
            onChange={onChange}
          />
          <span
            role="img"
            aria-label="trash"
            onClick={() => removeItemFromCart(item)}
          >
            🗑️
          </span>
        </div>
      </div>
    </div>
  );
}

export default CartItem;