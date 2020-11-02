//action creators
export const Types = {
    UPDATE_PRODUCTS: "UPDATE_PRODUCTS",
    ADD_TO_CART: "ADD_TO_CART",
    UPDATE_CART_QUANTITY: "UPDATE_CART_QUANTITY",
    REMOVE_FROM_CART:"REMOVE_FROM_CART",
    ADD_MULTIPLE_TO_CART: "ADD_MULTIPLE_TO_CART",
    UPDATE_CATEGORIES: "UPDATE_CATEGORIES",
    UPDATE_CURRENT_CATEGORY: "UPDATE_CURRENT",
    CLEAR_CART: "CLEAR_CART",
    TOGGLE_CART: "TOGGLE_CART"
  };


export const updateProducts = (products) => {
    return {
        type: Types.UPDATE_PRODUCTS,
        products
    };
};

export const addToCart = (product) => {
    return {
        type: Types.ADD_TO_CART,
        product: product
    };
};

export const addMultipleToCart = (products) => {
    return {
        type: Types.ADD_MULTIPLE_TO_CART,
        products
    };
};

export const removeFromCart = (id, cart) => {
    return {
        type: Types.REMOVE_FROM_CART,
        _id: id,
        cart
    };
};

export const clearCart = (id) => {
    return {
        type: Types.CLEAR_CART,
        _id: id
    };
};

export const updateCartQuantity = (id, purchaseQuantity) => {
    return {
        type: Types.UPDATE_CART_QUANTITY,
        _id: id,
        purchaseQuantity
    };
};

export const toggleCart = () => {
    return {
        type: Types.TOGGLE_CART,
    };
};

export const updateCategories = (categories) => {
    return {
        type: Types.UPDATE_CATEGORIES,
        categories
    };
};
export const updateCurrentCategory = (id) => {
    return {
        type: Types.UPDATE_CURRENT_CATEGORY,
        currentCategory: id
    };
};

export default {
    updateProducts, 
    addToCart, 
    addMultipleToCart,
    removeFromCart,
    clearCart, 
    updateCartQuantity,
    toggleCart,
    updateCategories,
    updateCurrentCategory,
    Types
};









