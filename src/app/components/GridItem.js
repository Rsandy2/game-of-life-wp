import { React, useState, useEffect } from "react";

const GridItem = ({ properties, updateCell }) => {
  const styles = {
    Active: {
      backgroundColor: "#ffd7ba",
    },
    Dead: {
      backgroundColor: "var(--pink-red)",
    },
  };

  return (
    <div
      className="cell"
      style={properties.status ? styles.Active : styles.Dead}
      onClick={() => {
        updateCell(properties.status, properties.x, properties.y);
      }}
    ></div>
  );
};

export default GridItem;
