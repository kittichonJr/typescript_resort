import loadingGif from "../../Assets/gif/loading-arrow.gif";

const Loading = () => {
  return (
    <div className="loading">
      <h4>rooms data loading...</h4>
      <img src={loadingGif} alt="Loading" />
    </div>
  );
};

export default Loading;
