import React from 'react';
import ContentLoader from 'react-content-loader';

const PizzaBlockSceleton = (props) => (
  <ContentLoader
    speed={2}
    width={280}
    height={460}
    viewBox="0 0 280 460"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}>
    <circle cx="145" cy="110" r="108" />
    <rect x="27" y="281" rx="0" ry="0" width="239" height="89" />
    <rect x="31" y="403" rx="0" ry="0" width="106" height="24" />
    <rect x="161" y="394" rx="0" ry="0" width="112" height="45" />
    <rect x="23" y="231" rx="10" ry="10" width="241" height="28" />
  </ContentLoader>
);

export default PizzaBlockSceleton;
