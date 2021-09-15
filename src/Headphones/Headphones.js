import './Headphones.css';
import Header from '../HeaderArea/Header';
import Footer from '../Footer/Footer';
import PageTitle from '../PageTitle/PageTitle';

const Headphones = () => {

  const pageTitle = 'HEADPHONES';

  return (
    <div className="headphones-container">
      <Header />
      <PageTitle pageTitle={pageTitle} />
      {/* <div className="page-title">HEADPHONES</div> */}
      <div className="content-coontainer">
        HEADPHONES Content Goes Here!!!
      </div>
      <Footer />
    </div>

  );
};

export default Headphones;