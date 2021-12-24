import React from "react";
import Iframe from 'react-iframe'

function Iframes(props) {
  if (!props.src) {
    return <div></div>;
  }
  return (
    <div className="col-md-12">
      <div className="emdeb-responsive">
      <Iframe url={props.src}
        width="100%"
        height="450px"
        display="initial"
        position="relative"/>
      </div>
    </div>
  );
}

export default Iframes;
