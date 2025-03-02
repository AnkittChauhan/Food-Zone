import { useUser } from "@clerk/clerk-react";
import { Image } from "@nextui-org/react";
import CartSound from "../src/assets/Add_to_cart_Effect.wav";
import NewSlide from "../src/assets/NewSlide.mp3";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from "@clerk/clerk-react";
import { Toaster, toast } from 'sonner';



export default function FoodMenu() {
  const { isSignedIn, user } = useUser();
  const { getToken } = useAuth();
  const [listOfItems, setlistOfItems] = useState([]);
  
  const handleAddItem = async (product) => {
  
    new Audio(CartSound).play();
    
    if (isSignedIn && user) {
      try {
        // Get user ID from Clerk
        const userId = user.id;
        
        // Get token properly using the getToken method from useAuth
        const token = await getToken();
        
        // Send to backend
        axios.post("https://food-zone-nco8.onrender.com/addToCart", {
          userId: userId,
          item: {
            foodItemId: product._id, // assuming your product has _id
            name: product.name,
            price: product.price,
            quantity: 1,
            imageUrl: product.url
          }
        }, {
          headers: {
            // Optionally send auth token if your backend validates it
            Authorization: `Bearer ${token}`
          }
        })
        .then((response) => {
           toast.success('Added to Cart', {
                    autoClose: 500,
                  })
        })
        .catch((error) => {
          console.error("Error adding item to cart:", error);
        });
      } catch (error) {
        console.error("Authentication error:", error);
      }
    } else {
      // Handle guest users - store in localStorage
      const cart = JSON.parse(localStorage.getItem('cart')) || [];
      
      // Check if item already exists
      const existingItemIndex = cart.findIndex(item => item.foodItemId === product._id);
      
      if (existingItemIndex > -1) {
        // Update quantity
        cart[existingItemIndex].quantity += 1;
      } else {
        // Add new item
        cart.push({
          foodItemId: product._id,
          name: product.name,
          price: product.price,
          quantity: 1,
          imageUrl: product.url
        });
      }
      
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  };


  const handleHoverSound = () => {
    new Audio(NewSlide).play();
  };

  useEffect(() => {
    axios.get("https://food-zone-nco8.onrender.com/getItems").then((response) => {
      setlistOfItems(response.data);
    });
  }, []);

  return (
    <div className="bg-green-200">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-black">Satisfy Your Cravings !</h2>
        
        <div className="mt-6 grid max-h-14 grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {listOfItems.map((product) => (
            <div key={product._id || product.id} className="relative">
              <div className="h-64 w-64 rounded-3xl bg-gray-500 overflow-hidden">
                <Image
                  className="h-64 w-64"
                  isZoomed
                  src={product.url}
                  onMouseEnter={handleHoverSound}
                />
              </div>
              <div className="mt-4 flex justify-center space-x-2">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>
                <p className="text-sm font-medium text-green-500">₹{product.price}</p>
              </div>
              <button 
                onClick={() => handleAddItem(product)} 
                className="bg-black text-white px-16 py-1 my-2 rounded-xl mx-10 hover:bg-gray-600 active:bg-gray-700 active:scale-x-110 scale-y-105 transition-all"
              >
                Add Item
              </button>
              <Toaster position="top-center" expand={false} richColors />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}