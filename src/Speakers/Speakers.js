import './Speakers.css';
import Header from '../HeaderArea/Header';
import Footer from '../Footer/Footer';
import PageTitle from '../PageTitle/PageTitle';


const Speakers = () => {
  const pageTitle = 'SPEAKERS';
  return (
    <div className="speakers-container">
      <Header />
      <PageTitle pageTitle={pageTitle} />
      <div className="content-coontainer">
        SPEAKERS Content Goes Here!!!
      </div>
      <Footer />
    </div>
  );
};

export default Speakers;