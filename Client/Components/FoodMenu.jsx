import {Image} from "@nextui-org/react";
import CartSound from "../src/assets/Add_to_cart_Effect.wav"
import NewSlide from "../src/assets/NewSlide.mp3"


const products = [
    {
        id: 1,
        name: 'Pizza',
        href: '#',
        price: '₹99',
        imageSrc: 'https://kauveryhospital.com/blog/wp-content/uploads/2021/04/pizza-5179939_960_720.jpg',
        imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
      },
      {
        id: 2,
        name: 'MOMO',
        price: '₹60',
        imageSrc: 'https://media-cdn.tripadvisor.com/media/photo-s/13/22/e2/6c/prem-chinese-fast-food.jpg',
        imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
      },
      {
        id: 3,
        name: 'Pizza Burgir',
        href: '#',
        price: '₹130',
        imageSrc: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/cf/b5/4e/extra-cheese.jpg?w=600&h=400&s=1',
        imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
      },
      {
        id: 4,
        name: 'long men',
        href: '#',
        price: '₹10',
        imageSrc: 'https://static.toiimg.com/photo/100230666.cms',
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
      },
      {
        id: 5,
        name: 'Machined Mechanical Pencil',
        price: '$34',
        imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS70F0KLeHiqCKt773amTeRoNqnC_WfAjM73Q&s',
      },
  ]
  
  export default function FoodMenu() {

    const handleAddItem = () => {
      
      new Audio(CartSound).play();
    }

    const handleHoverSound = () => {
      new Audio(NewSlide).play();
    }

    return (
      <div className="bg-green-200">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-black">Satisfy Your Cravings !</h2>
  
          <div className="mt-6 grid max-h-14 grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div key={product.id} className="relative">
                <div className="h-64 w-64 rounded-3xl bg-gray-500 overflow-hidden">
                  <Image
                      className="h-64 w-64"
                      isZoomed
                      src={product.imageSrc}
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
                  <p className="text-sm font-medium text-green-500">{product.price}</p>
                </div>
              <button onClick={ handleAddItem } className="bg-black text-white px-16 py-1 my-2 rounded-xl mx-10 hover:bg-gray-600 active:bg-gray-700 active:scale-x-110 scale-y-105 transition-all">Add Item</button>
              </div>
            
            ))}
          </div>
        </div>
      </div>
    )
  }
  