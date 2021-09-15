import './PageTitle.css';

const PageTitle = (props) => {
  const {
    pageTitle
  } = props;

  return (
    <div className="page-title">{pageTitle}</div>
  );
};

export default PageTitle;