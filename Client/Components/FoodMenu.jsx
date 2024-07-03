import {Image} from "@nextui-org/react";
import CartSound from "../src/assets/Add_to_cart_Effect.wav"
import NewSlide from "../src/assets/NewSlide.mp3"
import { useEffect, useState } from 'react'
import axios from 'axios';

  
  export default function FoodMenu() {

    const handleAddItem = () => {
      
      new Audio(CartSound).play();
    }

    const handleHoverSound = () => {
      new Audio(NewSlide).play();
    }

    const [listOfItems, setlistOfItems] = useState([]);

    useEffect(() => {
  
      axios.get("https://food-zone-nco8.onrender.com/getItems").then((response) => {
  
  
        setlistOfItems(response.data)
  
      })
    }, [])


    return (
      <div className="bg-green-200">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-black">Satisfy Your Cravings !</h2>
  
          <div className="mt-6 grid max-h-14 grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {listOfItems.map((product) => (
              <div key={product.id} className="relative">
                <div className="h-64 w-64 rounded-3xl bg-gray-500 overflow-hidden">
                  <Image
                      className="h-64 w-64"
                      isZoomed
                      src={product.url}
                      onMouseEnter={ handleHoverSound }
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
              <button onClick={ handleAddItem } className="bg-black text-white px-16 py-1 my-2 rounded-xl mx-10 hover:bg-gray-600 active:bg-gray-700 active:scale-x-110 scale-y-105 transition-all">Add Item</button>
              </div>
            
            ))}
          </div>
        </div>
      </div>
    )
  }
  