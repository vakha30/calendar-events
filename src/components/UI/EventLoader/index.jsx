import React from "react";
import ContentLoader from "react-content-loader";

const EventLoader = (props) => (
  <ContentLoader
    speed={2}
    width={350}
    height={385}
    viewBox="0 0 450 475"
    backgroundColor="#e0e0e0"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="1" y="8" rx="5" ry="5" width="443" height="443" />
  </ContentLoader>
);

export default EventLoader;
