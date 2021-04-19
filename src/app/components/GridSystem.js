import { React, useEffect, useState } from "react";
import GridItem from "./GridItem";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./GridSystem.css";

const GridSystem = () => {
  const settings = {
    //Settings contain default for GridSystem
    columns: 5,
    rows: 5,
    speed: 5,
  };

  let initGrid = (rows, cols) => {
    let grid = [];
    for (let col = 0; col < cols; col++) {
      grid.push([]); //Generate new span of array cells for each col in sq. mtrx.
      for (let row = 0; row < rows; row++) {
        grid[col][row] = false;
      }
    }
    // console.log(grid);
    return grid;
  };

  const [grid, setGrid] = useState(() => {
    return initGrid(settings.rows, settings.columns);
  });

  let resetGrid = () => {
    console.log("Grid Reset");
  };
  useEffect(
    () => {
      console.log("Constructor test");
      // console.log(settings);
      // console.log(initGrid(settings.rows, settings.columns));
      // setGrid(initGrid(settings.row, settings.columns));
      console.log(grid);
    },
    resetGrid(),
    []
  );

  let updateCell = (status, x, y) => {
    // console.log("Click Event");
    // console.log(status);

    let ref = [...grid]; // Delimiter to pass vals
    ref[x][y] = !status;
    setGrid(ref);
    // console.log(grid);
    return status ? false : true;
  };

  return grid.map((row, x) => {
    return (
      <div className="cellContainer">
        {row.map((status, y) => {
          return (
            <GridItem
              properties={(status, { x: x, y: y, status: status })}
              updateCell={updateCell}
            />
          );
        })}
      </div>
    );
  });
};

export default GridSystem;
