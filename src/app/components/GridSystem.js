import { React, useEffect } from "react";
import GridItem from "./GridItem";

const GridSystem = () => {
  const settings = {
    //Settings contain default for GridSystem
    columns: 5,
    rows: 5,
    speed: 5,
  };

  let initGrid = (rows, cols) => {
    let grid = [];
    for (let row = 0; row < rows; row++) {
      grid[row] = []; //Generate new span of array cells for each col in sq. mtrx.
      for (let col = 0; cols < cols; col++) {
        grid[row][col] = 1;
      }
    }

    return grid;
  };

  useEffect(() => {
    console.log("Constructor test");
    console.log(settings);
    console.log(initGrid(settings.rows, settings.columns));
  }, []);

  return <div>Test</div>;
};

export default GridSystem;
