import "./PageNotFound.css";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div className="not-found">
      <h3 className="not-found__title">
        <span>404</span> - Page Not Found!
      </h3>
      <p className="not-found__text">
        Uh oh! There&apos;s nothing here... Sorry. 🥺
      </p>
      <button type="button" onClick={() => Navigator(-1)}>
        Go Back
      </button>
    </div>
  );
}

export default PageNotFound;
