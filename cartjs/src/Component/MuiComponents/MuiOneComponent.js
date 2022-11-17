import React from "react";
import HocComponent from "../Hoc/HocComponent";
function MuiOneComponent(props) {
  return (
    <div>
      <h3>Mui Bucket</h3>
      <h2>
        Arriving at a conclusion from hoc <b>{props.name.filterBy}</b>
        {Object.keys(props.data[0]).map((ele, index) => {
          return <h1>{ele}</h1>;
        })}
      </h2>
    </div>
  );
}

export default HocComponent(MuiOneComponent);
