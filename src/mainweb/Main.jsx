import React from 'react'
import '../mainweb/main.css'
import image from'../assets/image.png'
import chilli from '../assets/chilli.jpeg'
import flour from '../assets/flour.png'
const Main = () => {
  return (
    <div className='hero'>
        <div className='mainhead'>
   <h1 className='vasanth'>VASANTH MILLS</h1></div>
   <img src={image} alt="" className='product1'/>
   <div className='content1'><p>"Indulge in the exquisite taste of our premium groundnut oil, crafted with meticulous care from the finest selection of quality groundnuts. 
    Savor the richness and purity of nature in every drop of our oil, as we ensure that no chemicals taint its wholesome essence. Elevate your culinary experience with our range of oils, including the lusciously smooth coconut oil,groundnut oil and the golden radiance of sunflower oil. 
    Trust in the tradition of excellence that defines our company, where quality is paramount and satisfaction is guaranteed. Experience the difference that pure, unadulterated goodness can make in your cooking with our pristine oils.
    While our dedication to quality may set us at a premium in the market, the investment in your health is immeasurable. Elevate your culinary creations and nourish your body with the essence of excellence found only in our oils.</p><div/>
    </div>
    <img src={chilli} alt="" className='product2'/>
   <div className='content1'><p>Experience the pinnacle of flavor with our exceptional chili powder, crafted to perfection by our esteemed company. Sourced from the finest chilies and prepared with meticulous care, our product stands as a testament to unparalleled quality. Free from added colors or artificial enhancers, each particle encapsulates the true essence of premium spice. We spare no expense in ensuring richness and depth, incorporating a blend of premium spices to elevate every dish. From cumin to coriander, our chili powder boasts a symphony of flavors, making it a culinary essential.
     Elevate your dishes with the distinct touch of our special chili powder, a hallmark of excellence from our company.</p><div/>
    </div>
    <img src={flour} alt="" className='product3'/>
   <div className='content1'><p>Indulge in the perfection of our premium flour, meticulously crafted by our esteemed company. Harnessing the essence of excellence, we exclusively utilize high-quality rice in its preparation,
     ensuring a product that surpasses all expectations. Our blend is a symphony of flavors, combining different varieties of rice to create a flour of unparalleled quality. Infused with the richness of high-quality black gram, every particle is a testament to our unwavering commitment to excellence. From sourcing to production,
      meticulous attention is paid to maintain impeccable neatness, guaranteeing a product that exceeds industry standards. Elevate your culinary creations with the finest flour, a hallmark of quality from our esteemed company.</p><div/>
    </div>



    </div>
  )
}

export default Main
