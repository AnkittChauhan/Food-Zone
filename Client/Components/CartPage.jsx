import React from 'react'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from "@clerk/clerk-react";
import axios from 'axios';
import { Toaster, toast } from 'sonner';



const CartPage = () => {

  const [cartItems, setCartItems] = useState('');

  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate("/BilingPage")
  }


  const { user } = useUser();

  useEffect(() => {
    if (user) {
      const fetchCart = async () => {
        try {
          const response = await axios.get(`https://food-zone-nco8.onrender.com/getCart/${user.id}`)
          setCartItems(response.data.items);
        }
        catch {
          (error => {
            console.error("Error fetching user cart:", error);
            setCartItems('');
          })
        };
      };

      fetchCart(); // Initial fetch
      const interval = setInterval(fetchCart, 100);
      return () => clearInterval(interval);
    }
  }, [user]);


  const handleItemDelete = async (id) => {
    try {
      await axios.delete(`https://food-zone-nco8.onrender.com/deleteFromCart/${user.id}/${id}`).then(

        toast.success('Item Removed', {
          autoClose: 100,
        })
      )

    } catch (error) {
      console.error("Error deleting item from cart:", error);
    }
  };

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
              <div key={item._id} className="flex items-center border-b py-4">
                <div className="flex-shrink-0">
                  <img
                    src={item.imageUrl}
                    alt="Product Image"
                    className="w-36 h-36 rounded-md object-cover"
                  />
                </div>
                <div className="ml-4 flex-1">
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-gray-600">₹{item.price.toFixed(2)}</p>
                  <div className="flex mt-2">
                    <span className="mr-2">Quantity:</span>
                    <div>{item.quantity}</div>
                  </div>
                </div>
                <button onClick={() => handleItemDelete(item._id)}><img src="https://img.freepik.com/premium-vector/red-cross-button-icon-design_178156-173.jpg?w=360" className='h-10' /></button>
                <Toaster position="top-center" expand={false} richColors />
              </div>
            ))}

            <div className="mt-6">
              <p className="text-lg font-semibold">Total: ₹{getTotalPrice().toFixed(2)}</p>
              <button

                className="mt-4 bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
                onClick={() => {
                  alert('Want to Checkout ??')
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