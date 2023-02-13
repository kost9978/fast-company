import React from "react";

const Qualitie = (qualitie) => {
  return (
    <span className={"badge m-1 bg-" + qualitie.color} key={qualitie._id}>
      {qualitie.name}
    </span>
  );
};
export default Qualitie;
