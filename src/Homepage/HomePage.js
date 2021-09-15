import '../App.css';
import { getProducts } from '../Constants';
import Footer from '../Footer';
import Header from '../HeaderArea/Header';

const HomePage = () => {

  return (
    <> <div className="container">
      {/* Menu Area */}
      <Header />
      {/* Product One Area */}
      <div className="banner-area">
        <div className="product-container">
          <div className="product-content-1">NEW PRODUCT
          </div>
          <div className="product-content-2">XX99 MARK II HEADPHONES<br />
          </div>
          <div className="product-content-3">
            Experience natural, lifelike audio and exceptional <br />build quality made for the passionate music enthusiast.
          </div>
          <br /> <br />
          <div className="button-container">
            <button className="get-started-button">SEE PRODUCT</button>
          </div>
        </div>
      </div>
      {/* Product Two Area */}
      <div className="product-row">
        <div className="product-row-container">
          <div className="new-product-container">
            {getProducts()}
          </div>
        </div>
      </div>
      {/* Product Three Area */}
      <div className="product-row">
        <div className="product-row-container">
          <div className="new-product-container">
            <div className="product-row-orange">
              <div className="product-two-container">
                <div className="product-content-2">ZX9<br /> SPEAKER
                </div>
                <div className="product-content-white">Upgrade to premium speakers that are <br />
                  phenomenally built to deliver truly remarkable <br />sound
                </div>
                <div className="product-two-button">
                  <button className="get-started-button-black">SEE PRODUCT</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="product-row">
        <div className="product-row-container">
          <div className="new-product-container">
            <div className="product-row-grey-container">
              <div className="product-row-grey">
                <div className="product-three-container">
                  <div className="product-content-4">ZX7<br /> SPEAKER
                  </div>
                  <div className="product-two-button">
                    <button className="get-started-button-black">SEE PRODUCT</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="product-row">
        <div className="first-grid">
          {/* IMAGE AREA */}
        </div>
        <div className="second-grid">
          <div className="second-grid-content">
            YX1 EARPHONES
          </div>
          <div className="second-grid-button">
            <button className="get-started-button-black">
              SEE PRODUCT
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>

    </>

  );
};

export default HomePage;