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
      const interval = setInterval(fetchCart, 2000);
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






  const handleQuantityUpdate = async (itemId, action) => {
    try {
      await axios.put(`https://food-zone-nco8.onrender.com/updateQuantity`, {
        userId: user.id,
        foodItemId: itemId,
        action: action // 'increment' or 'decrement'
      });
      // Optional: show toast
      toast.success('Quantity updated', { autoClose: 100 });

    } catch (error) {
      console.error("Error updating quantity:", error);
      toast.error('Failed to update quantity');
    }
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
                  <h3 className="text-lg font-semibold">
                    {item.name}</h3>
                  <p className="text-gray-600">₹{item.price.toFixed(2)}</p>
                  <div className="flex mt-2">
                    <span className="mr-2">Quantity:</span>
                    {/* <div>{item.quantity}</div> */}
                    <div className='flex gap-1'>
                      <button
                        onClick={() => handleQuantityUpdate(item._id, 'decrement')}
                        className="my-auto w-4 h-4 flex items-center justify-center border-1 border-black ">
                        -
                      </button>
                      <div className="my-auto w-6 h-5 flex items-center justify-center border-1 border-black text-xs">
                        {item.quantity}
                      </div>
                      <button
                        onClick={() => handleQuantityUpdate(item._id, 'increment')}
                        className="my-auto w-4 h-4 flex items-center justify-center border-1 border-black ">
                        +
                      </button>
                    </div>
                  </div>
                </div>
                <button onClick={() => handleItemDelete(item._id)}><img src="https://img.freepik.com/premium-vector/red-cross-button-icon-design_178156-173.jpg?w=360" className='h-10' /></button>
                <Toaster position="top-center" expand={false} richColors />
              </div>
            ))}

            <div className="mt-6">
              <p className="text-lg font-semibold">Total: ₹{getTotalPrice().toFixed(2)}</p>
              <button

                className="mt-2 bg-gradient-to-r from-green-500 to-emerald-600 focus:from-black focus:to-black hover:to-black text-white px-4 py-2 rounded-lg font-medium flex items-center hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200"
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