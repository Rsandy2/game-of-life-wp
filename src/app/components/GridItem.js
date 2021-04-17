import { React, useState, useEffect } from "react";

const GridItem = () => {
  const [status, setStatus] = useState(false);

  let itemState = {
    //Item State Defaults
    STATUS: status,
  };

  useEffect(() => {
    console.log("Constructor test");
    itemState.setStatus(true);
  }, []);

  return <div></div>;
};

export default GridItem;
