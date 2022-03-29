import "../App.css";

function Loader() {
  return (
    <div className="load">
      <img className="loader-logo" src="logo.png" alt="logo" />
      <div className="progress">
        <div className="progress-value"></div>
      </div>
    </div>
  );
}

export default Loader;
