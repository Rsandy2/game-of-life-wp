import { React, useState, useEffect } from "react";

const GridItem = ({ properties, updateCell }) => {
  //   const {
  //     status: [status, setStatus],
  //   } = {
  //     status: useState(false),
  //     ...(properties || {}),
  //   };

  const [status, setStatus] = useState(false);
  useEffect(() => {
    // console.log("Constructor test");
    // itemState.setStatus(true);
  }, []);

  const styles = {
    Active: {
      backgroundColor: "orange",
    },
    Dead: {
      backgroundColor: "var(--light-red)",
    },
  };

  let testFunc = (details) => {
    console.log(details);
    // updateCell(status);
  };
  return (
    <div
      className="cell"
      style={status ? styles.Active : styles.Dead}
      onClick={() => testFunc(properties)}
      onContextMenu={() => updateCell()}
      onClick={() => {
        setStatus(updateCell(status, properties.x, properties.y));
        // testFunc(properties);
      }}
    >
      {properties.status}
    </div>
  );
};

export default GridItem;
