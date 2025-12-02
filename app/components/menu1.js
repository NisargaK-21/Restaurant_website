"use client";
import Button from './button';
import { useRouter } from 'next/navigation';
import { useState } from "react";


export default function Menu() {
   const router = useRouter();
      const [cart, setCart] = useState(0);

  
      const menu=[
          {
      id: 1,
      name: "Mediterranean Quinoa Bowl",
      image: "https://www.fitmittenkitchen.com/wp-content/uploads/2022/02/Greek-Mediterranean-Quinoa-Power-Bowl-18.jpg",
      rating: 9.2,
      price: 220,
      category: "Veg"
    },
    {
      id: 2,
      name: "Rainbow Buddha Bowl",
      image: "https://www.eatingwell.com/thmb/rMFFw_MoPNUei64pWSezBNFnf38=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/45654661-f67619abf7e141d09e587d2199a4f4da.jpg",
      rating: 9.5,
      price: 250,
      category: "Veg"
    },
    {
      id: 3,
      name: "Grilled Halloumi Salad",
      image: "https://thumbs.dreamstime.com/b/grilled-halloumi-cheese-salad-olive-oil-healty-food-393074681.jpg",
      rating: 8.8,
      price: 230,
      category: "Veg"
    },
    {
      id: 4,
      name: "Thai Green Curry with Jasmine Rice",
      image: "https://im.pluckk.in/unsafe/1200x0/uploads/14778-delhi-app-2.png",
      rating: 9.0,
      price: 270,
      category: "Veg"
    },
    {
      id: 5,
      name: "Paneer Tikka Skewers with Veg Pilaf",
      image: "https://tildaricelive.s3.eu-central-1.amazonaws.com/wp-content/uploads/2021/06/10101650/Paneer-Tikka-Skewers-Resized-1260x1260.png",
      rating: 9.1,
      price: 240,
      category: "Veg"
    },
    {
      id: 6,
      name: "Mushroom Risotto",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVp3PWw35tYZwWAMp5539_A3r4CfJiCMxFtQ&s",
      rating: 8.7,
      price: 260,
      category: "Veg"
    },
  
    {
      id: 13,
      name: "Grilled Lemon Herb Chicken with Asparagus",
      image: "https://media.istockphoto.com/id/518528309/photo/homemade-lemon-and-herb-chicken.jpg?s=612x612&w=0&k=20&c=5B3bbK2U_l0RaX20sbIi0VYFVroBlmj5QNfzm6xYyI4=",
      rating: 9.1,
      price: 320,
      category: "Non-Veg"
    },
    {
      id: 14,
      name: "Butter Garlic Prawns with Saffron Rice",
      image: "https://cdn.craft.cloud/224393fa-1975-4d80-9067-ada3cb5948ca/assets/Cajun-Prawns-Saffron-Rice-FULL-RES-4.jpg?width=1200&height=630&quality=82&fit=cover&s=6ElcfY4Q0PypioV_c5bklaFIENPj6TaIzM1-6TEx39s",
      rating: 9.4,
      price: 390,
      category: "Non-Veg"
    },
    {
      id: 15,
      name: "Salmon Teriyaki with Sesame Vegetables",
      image: "https://media.istockphoto.com/id/2208382048/photo/homemade-japanese-teriyaki-salmon-bowl.jpg?s=612x612&w=0&k=20&c=vxZecNfwy_S_-tFs0uNm0Nu1Mhmg1_n-3an3A6pStg0=",
      rating: 9.3,
      price: 420,
      category: "Non-Veg"
    },
    {
      id: 16,
      name: "Tandoori Chicken Platter",
      image: "https://t3.ftcdn.net/jpg/04/68/93/94/360_F_468939407_9Q02XfVQJsKW0ZUEU4axdITcRgu7OPLd.jpg",
      rating: 9.2,
      price: 350,
      category: "Non-Veg"
    },
    {
      id: 17,
      name: "Honey Glazed Chicken Steak with Roasted Veggies",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ8nxnOEceNwD7HPRT-c21U0CTdIW7nF0v3A&s",
      rating: 8.9,
      price: 330,
      category: "Non-Veg"
    },
    {
      id: 18,
      name: "Herb Crusted Fish Fillet with Lemon Butter Sauce",
      image: "https://www.recipetineats.com/tachyon/2018/04/Fish-with-Lemon-Butter-Sauce.jpg",
      rating: 9.0,
      price: 370,
      category: "Non-Veg"
    },
  
    {
      id: 25,
      name: "Iced Matcha Latte",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMN5tdSXMabEXwBMywQKlYK_wlCLxI5zt5LA&s",
      rating: 9.3,
      price: 190,
      category: "Beverages"
    },
    {
      id: 26,
      name: "Cold Brew Coffee",
      image: "https://t3.ftcdn.net/jpg/03/16/01/48/360_F_316014817_EC1KN7mAD86ALYhhwGUUeSsQoJIVMtfQ.jpg",
      rating: 9.1,
      price: 160,
      category: "Beverages"
    },
    {
      id: 27,
      name: "Strawberry Basil Lemonade",
      image: "https://plantifullybasedblog.com/wp-content/uploads/2022/07/basil-lemonade-image.png",
      rating: 9.4,
      price: 150,
      category: "Beverages"
    },
    {
      id: 28,
      name: "Caramel Iced Latte",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTp2gb2XPxdLB--0WhDkg1wXztHLD1h6dkVw&s",
      rating: 9.2,
      price: 180,
      category: "Beverages"
    },
    {
      id: 29,
      name: "Mango Passion Fruit Cooler",
      image: "https://thumbs.dreamstime.com/b/porn-star-martini-summer-cocktail-pornstar-drink-passion-fruit-vodka-liquor-vanilla-syrup-champagne-lime-juice-tropical-97323726.jpg",
      rating: 9.0,
      price: 170,
      category: "Beverages"
    },
    {
      id: 30,
      name: "Rose Milk Latte",
      image: "https://media.istockphoto.com/id/1257155066/photo/ice-rose-latte-in-glass-with-pink-flowers-and-petal-on-white-or-grey-background.jpg?s=612x612&w=0&k=20&c=CzGd6T4Z2RkELvmIMPhxgeOUp_4tusdrubauJh0IDq0=",
      rating: 8.9,
      price: 160,
      category: "Beverages"
    },
    
      {
      id: 35,
      name: "Chocolate Lava Cake",
      image: "https://media.istockphoto.com/id/544716244/photo/warm-chocolate-lava-cake-with-molten-center-and-red-currants.jpg?s=612x612&w=0&k=20&c=i1rRa1x7D1pu-INKabmC21BaU9MC8ZRQdcC7dBLdzUo=",
      rating: 9.5,
      price: 210,
      category: "Desserts"
    },
    {
      id: 36,
      name: "Classic Tiramisu",
      image: "https://bakewithzoha.com/wp-content/uploads/2025/06/tiramisu-featured.jpg",
      rating: 9.3,
      price: 230,
      category: "Desserts"
    },
    {
      id: 37,
      name: "Raspberry Cheesecake",
      image: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2009/5/27/0/IGSP01_25282_s4x3.jpg.rend.hgtvcom.1280.1280.suffix/1485531666198.webp",
      rating: 9.2,
      price: 240,
      category: "Desserts"
    },
    {
      id: 38,
      name: "Gulab Jamun with Ice Cream",
      image: "https://www.hotelwelkinresidency.com/wp-content/uploads/2018/01/Shahi-Hot-Gulabjamun-with-I.jpg",
      rating: 9.4,
      price: 180,
      category: "Desserts"
    },
    {
      id: 39,
      name: "Belgian Waffle with Maple Syrup",
      image: "https://www.thespicehouse.com/cdn/shop/articles/Maple_Waffles_89a00241-086e-4724-918a-521f852e00ad_3024x.jpg?v=1586286648",
      rating: 9.1,
      price: 200,
      category: "Desserts"
    },
    {
      id: 40,
      name: "Pistachio Kulfi",
      image: "https://recipes.timesofindia.com/thumb/84786580.cms?width=1200&height=900",
      rating: 9.0,
      price: 160,
      category: "Desserts"
    },
    
      {
      id: 47,
      name: "Loaded Nachos with Cheese Dip",
      image: "https://images.ctfassets.net/j8tkpy1gjhi5/2euUkMoiVBkyBhmmxsiJIT/f30839e59f55e1d5f980ce1c4b3932d0/spicy-loaded-nachos-hero.jpg",
      rating: 9.1,
      price: 170,
      category: "Snacks"
    },
    {
      id: 48,
      name: "Crispy Veg Spring Rolls",
      image: "https://www.spicebangla.com/wp-content/uploads/2024/06/Spring-Roll-Recipe.jpg",
      rating: 9.0,
      price: 160,
      category: "Snacks"
    },
    {
      id: 49,
      name: "Cheese Garlic Bread",
      image: "https://media.istockphoto.com/id/487219905/photo/toasted-cheese-and-garlic-bread.jpg?s=612x612&w=0&k=20&c=xtSkUMnkl1IUaahfWhS4uAtvFfHMgJLQwEsX_86Pve8=",
      rating: 9.2,
      price: 130,
      category: "Snacks"
    },
    {
      id: 50,
      name: "Peri Peri French Fries",
      image: "https://falgunifood.com/cdn/shop/files/Artboard28_726e04c2-b67a-4f7c-81a0-37b415d58154_767x1000.jpg?v=1727871495",
      rating: 9.0,
      price: 120,
      category: "Snacks"
    },
    {
      id: 51,
      name: "Hummus with Pita Chips",
      image: "https://media.istockphoto.com/id/955998652/photo/homemade-chickpea-hummus-bowl-with-pita-chips-and-paprika.jpg?s=612x612&w=0&k=20&c=H3m78rhd7113mc06CqBKLH4PVn7e8AUmTes2yCQEzlY=",
      rating: 8.8,
      price: 150,
      category: "Snacks"
    },
    {
      id: 52,
      name: "Spicy Paneer Tacos",
      image: "https://www.madhuseverydayindian.com/wp-content/uploads/2022/11/paneer-tacos.jpg",
      rating: 9.3,
      price: 190,
      category: "Snacks"
    }
    
        
      ]
  

  
    const handleAddToCart = () => {
      setCart(cart + 1);
    }
  
    const handleRemoveFromCart = () => {
      if(cart > 0){
        setCart(cart - 1);
      }
    }
  
    const handlePlaceOrder = () => {
        if(cart===0){
          alert("Your cart is empty. Please add items to the cart before placing an order.");
        }else{
          alert("Your order has been placed successfully!");
        }
      }
  
  
  return (
     <div className="px-4 md:px-8 lg:px-16 font-serif min-h-screen w-full h-auto">
 
       <div className="flex lg:flex-row flex-wrap sm:flex-col md:flex-col justify-between items-center mt-6 mb-10 ">
        
 
         <div className="flex items-center gap-4">          
           <div className="text-lg md:text-xl font-bold text-red-900" >Cart: {cart}</div>
           <Button label="Place Order" onClick={handlePlaceOrder} />
         </div>
       </div>
 
 
         <div className=" bg-white dark:bg-gray-900 shadow-lg rounded-xl px-4 sm:px-8 py-8 space-y-4 sm:space-y-8 md:space-y-0 lg:space-y-0 justify-center items-center">
         <hr/>
         <div className="flex lg:flex-row flex-wrap sm:flex-col md:flex-col space-x-4 space-y-5 mt-10">
            {menu.map((item)=>(
              <div key={item.id} className="w-[450px] sm:w-[280px] md:w-[320px] lg:w-[400px] hover:scale-105 transition-transform duration-300 bg-white dark:bg-slate-800 shadow-lg dark:shadow-none rounded-xl p-5 flex flex-col items-center">
                <h3 className="text-lg md:text-xl font-semibold text-center mb-2">{item.name}</h3>
                <img src={item.image}
                className="w-full h-[220px] sm:h-[260px] md:h-[300px] object-cover rounded-2xl"
                />
                <div className="flex justify-between w-full px-2 mt-3 text-sm md:text-base mb-3">
                  <p>Rating: {item.rating}/10</p>
                  <p>Rs.{item.price}</p>
                </div>
                <div className='space-x-6'>
                  <Button label="Add to cart" onClick={handleAddToCart} />
                  <Button label="Remove" onClick={handleRemoveFromCart} />
                </div>
              </div>
            ))}
         </div>
         </div>
     </div>
  );
}