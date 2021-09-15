import productImage from '../images/productImage.png';
import speaker from '../images/speaker.png';
import earphones from '../images/earphones.png';

const HEADPHONES = 'HEADPHONES';
const SPEAKERS = 'SPEAKERS';
const EARPHONES = 'EARPHONES';

const Products = [
  {
    'text': HEADPHONES,
    'image': productImage
  },
  {
    'text': SPEAKERS,
    'image': speaker
  },
  {
    'text': EARPHONES,
    'image': earphones
  }];

export const getProducts = () => {
  return Products.map((item, index) => (
    <div className="box" index={index}>
      <div className="product-box">
        <div className="product-image-box">
          <img className="productImage" src={item.image} alt="products" />
        </div>
        <div className="product-box-text">{item.text}</div></div>
    </div>

  ));
};;