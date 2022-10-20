import macbook from "../../img/macbook.png";
import iphone from "../../img/iphone.png";
import iwatch from "../../img/iwatch.png";
import robovac from "../../img/robovac.png";

import './product-hero.scss';

export const ProductHero = () => {
  return (
    <main className="product-hero">
      <div className="macbook product-hero__item">
      <a href="#"><img className="product-hero__img product-hero__img--mac" src={macbook} alt="" /> <h6 className="anchor">Laptops</h6></a>
      </div>
      <div className="iphone product-hero__item">
      <a href="#"><img className="product-hero__img" src={iphone} alt="" /><h6 className="anchor anchor--phones">Phones</h6></a>
        
      </div>
      <div className="iwatch product-hero__item">
      <a href="#"><img className="product-hero__img" src={iwatch} alt="" /><h6 className="anchor anchor--watches">Watches</h6></a>

      </div>
      <div className="robovac product-hero__item">
      <a href="#"><img  className="product-hero__img"src={robovac} alt="" /><h6 className="anchor anchor--robots">Robots</h6></a>
        
      </div>
    </main>
  );
};

export default ProductHero;