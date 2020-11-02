// import { useReducer } from "react";
import { Types } from "./actions";

export const reducer = (state, action) => {
  console.log('action', action.type, Types.UPDATE_CATEGORIES)
  switch (action.type) {
    case Types.UPDATE_PRODUCTS:
      return {
        ...state,
        products: [...action.products],
      };

    case Types.ADD_TO_CART:
      return {
        ...state,
        cartOpen: true,
        cart: [...state.cart, action.product],

      };

    case Types.ADD_MULTIPLE_TO_CART:
      return {
        ...state,
        cart: [...state.cart, ...action.products],
      };

    case Types.UPDATE_CART_QUANTITY:
      return {
        ...state,
        cartOpen: true,
        cart: state.cart.map(product => {
          if (action._id === product._id) {
            product.purchaseQuantity = action.purchaseQuantity
          }
          return product
        })
      };

    case Types.REMOVE_FROM_CART:
      let newState = state.cart.filter(product => {
        return product._id !== action._id;
      });

      return {
        ...state,
        cartOpen: newState.length > 0,
        cart: newState
      };

    case Types.CLEAR_CART:
      return {
        ...state,
        cartOpen: false,
        cart: []
      };

    case Types.TOGGLE_CART:
      return {
        ...state,
        cartOpen: !state.cartOpen
      };

    case Types.UPDATE_CATEGORIES:
      console.log('test', [...action.categories])
      return {
        ...state,
        categories: [...action.categories],
      };

    case Types.UPDATE_CURRENT_CATEGORY:
      return {
        ...state,
        currentCategory: action.currentCategory
      }

    default:
      return state;
  }
};

// export function useProductReducer(initialState) {
//   return useReducer(reducer, initialState)
// }

export default reducer;