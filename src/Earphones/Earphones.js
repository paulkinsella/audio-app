import './Earphones.css';
import { getProducts } from '../Products/Products';
import Header from '../HeaderArea/Header';
import Footer from '../Footer/Footer';
import PageTitle from '../PageTitle/PageTitle';

const Earphones = () => {
  const pageTitle = 'EARPHONES';

  return (
    <div className="earphones-container">
      <Header />
      <PageTitle pageTitle={pageTitle} />
      <div className="content-coontainer">
        <div className="image-box">
          Image Here
        </div>
        <div className="text-box">
          Text Here
        </div>
        <div className="earphones-product-container">
          {getProducts()}
        </div>
      </div>
      <Footer />
    </div>

  );
};

export default Earphones;