import React from "react";
import ErrorImg from "../../images/undraw_page_not_found_su7k.png";
const NotFound = () => {
  return (
    <div>
      {/* linking not found image */}
      <img src={ErrorImg} alt="" />
      <h1>
        <strong>Page Not Found</strong>
      </h1>
      <p>
        Looks like you've followed a broken link or entered a URL that doesn't
        exist on this site.
      </p>
    </div>
  );
};

export default NotFound;
