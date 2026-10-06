const Content = ({ children, id }) => {
  return (
    <div className="content-section cflex" id={id}>
      {children}
    </div>
  );
};

export default Content;
