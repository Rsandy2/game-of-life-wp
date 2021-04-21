import { React, useCallback, useState } from "react";
import GridItem from "./GridItem";
import "./Sidebar.css";
import "./GridSystem.css";

let GridSystem = () => {
  let clone = (a) => {
    return a.map((arr) => [...arr]);
  };
  const settings = {
    //Settings contain default for GridSystem
    columns: 15,
    rows: 15,
    speed: 50,
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

  let updateCell = (status, x, y) => {
    let ref = clone(grid); // Delimiter to pass vals
    ref[x][y] = !status;
    setGrid(ref);

    return status ? false : true;
  };

  let next = (rows, columns) => {
    let gridCopy = clone(grid);

    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < columns; j++) {
        let counter = 0;

        if (i > 0 && j > 0) if (grid[i - 1][j - 1]) counter++;
        if (i > 0) if (grid[i - 1][j]) counter++;
        if (i > 0 && j < columns - 1) if (grid[i - 1][j + 1]) counter++;

        if (j > 0) if (grid[i][j - 1]) counter++;
        if (j < columns - 1) if (grid[i][j + 1]) counter++;

        if (i < rows - 1 && j > 0) if (grid[i + 1][j - 1]) counter++;
        if (i < rows - 1) if (grid[i + 1][j]) counter++;
        if (i < rows - 1 && j < columns - 1) if (grid[i + 1][j + 1]) counter++;

        if (grid[i][j] && (counter < 2 || counter > 3)) gridCopy[i][j] = false;
        if (!grid[i][j] && counter === 3) gridCopy[i][j] = true;

        // console.table(i, j, counter); //Neighbors Checking
      }
    }
    setGrid(gridCopy);
  };

  // let start = () => {
  //   setInterval(() => {
  //     next(settings.rows, settings.columns);
  //   }, settings.speed * 10);
  // };

  const Sidebar = () => {
    return (
      <div className="sidebar">
        <div className="sidebar-item">
          <a href="#">Game of Life</a>
        </div>
        <div className="sidebar-item">
          <a
            href="#"
            onClick={() => {
              setInterval(() => {
                next(settings.rows, settings.columns);
              }, settings.speed * 10);
            }}
          >
            Start
          </a>
        </div>
        <div className="sidebar-item">
          <a href="#">Stop</a>
        </div>
        <div className="sidebar-item">
          <a
            href="#"
            onClick={() => {
              next(settings.rows, settings.columns);
            }}
          >
            Next
          </a>
        </div>
      </div>
    );
  };

  const Display = () => {
    return grid.map((row, x) => {
      return (
        <div className="cellContainer">
          {row.map((status, y) => {
            return (
              <GridItem
                properties={{ x: x, y: y, status: status }}
                updateCell={updateCell}
              />
            );
          })}
        </div>
      );
    });
  };

  return (
    <>
      <Sidebar />
      <Display />
    </>
  );
};

export default GridSystem;
