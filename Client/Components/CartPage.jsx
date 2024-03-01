import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CartPage = () => {

  const navigate = useNavigate();

  const handleCheckout = () => {
      navigate("/BilingPage")    
  }  


  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Product 1',
      price: 50.0,
      quantity: 1,
    },
    {
      id: 2,
      name: 'Product 2',
      price: 90.0,
      quantity: 1,
    },
  ]);

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-md shadow-md">
        <h2 className="text-2xl font-semibold mb-6">Shopping Cart</h2>

        {cartItems.length > 0 ? (
          <div>
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center border-b py-4">
                <div className="flex-shrink-0">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg/800px-Eq_it-na_pizza-margherita_sep2005_sml.jpg"
                    alt="Product Image"
                    className="w-36 h-36 rounded-md object-cover"
                  />
                </div>
                <div className="ml-4 flex-1">
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-gray-600">${item.price.toFixed(2)}</p>
                  <div className="flex mt-2">
                    <span className="mr-2">Quantity:</span>
                    <input
                      type="number"
                      value={item.quantity}
                      onChange={(e) => {
                        const updatedQuantity = +e.target.value >= 0 ? +e.target.value : 0;
                        const updatedItems = [...cartItems];
                        updatedItems.find((i) => i.id === item.id).quantity = updatedQuantity;
                        setCartItems(updatedItems);
                      }}
                      className="w-16 p-2 border rounded-md"
                    />
                  </div>
                </div>
              </div>
            ))}

            <div className="mt-6">
              <p className="text-lg font-semibold">Total: ${getTotalPrice().toFixed(2)}</p>
              <button
                
                className="mt-4 bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
                onClick={() => {
                  alert('Proceed to checkout')
                  handleCheckout()
                }}
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>
    </div>
  );
};


export default CartPage;