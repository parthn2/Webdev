function myFunction() {
    let m = document.getElementById('myNumber').value;
    let n = document.getElementById('myNumber2').value;
    // let m = 2;
    // let n = ;
    let solved = 0;
  
    var minutesLabel = document.getElementById("minutes");
    var secondsLabel = document.getElementById("seconds");
    var totalSeconds = 0;
    if(solved === 0) {
      setInterval(setTime, 1000);
    }
    function setTime() {
      ++totalSeconds;
      secondsLabel.innerHTML = pad(totalSeconds % 60);
      minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
    }
    
    function pad(val) {
      var valString = val + "";
      if (valString.length < 2) {
        return "0" + valString;
      } else {
        return valString;
      }
    }
  
    let state = 1;
    let game = document.querySelector("#game");
    //   let noOfMoves = document.querySelector("#counter").innerText;
    //   noOfMoves = isNaN(noOfMoves) ? 0 : noOfMoves;
  
    // Creates game then shuffle it..
    createAndSolve(), shuffle();
  
    // Listens for click on game cells
    game.addEventListener("click", function(c) {
      // console.log("clicked");
      if (state == 1) {
        // Enables sliding animation
        game.className = "animate";
        moveroworcolumn(c.target, 1);
      }
    });
  
    // Listens for click on control buttons
    // document.getElementById("solve").addEventListener("click", createAndSolve);
    document.getElementById("shuffle").addEventListener("click", shuffle);
  
    document.getElementById("game").style.width = (80*n+5)+'px';
    document.getElementById("game").style.height = (80*m+5)+'px';
  
    // Create Solved Puzzle..
    function createAndSolve() {
      if (state == 0) {
        return;
      }
      game.innerHTML = ""; // Clear the game area
      let k = 1;
      for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
          let cell = document.createElement("span"); // create one cell
          cell.id = `cell-${i}-${j}`; //                 'cell-' + i + '-' + j; give id to the cell
          cell.style.left = j * 80 + 1 * j + 1 + "px"; // position of the cell from left
          cell.style.top = i * 80 + 1 * i + 1 + "px"; // position of the cell from the top
          if (k < m*n) {
            // numberCell
            cell.classList.add("number");
            cell.innerHTML = (k++).toString();
          } else {
            // emptyCell
            cell.className = "empty";
          }
          game.appendChild(cell);
        }
      }
      // resetNoOfMoves();
    }
  
    // shuffle the game
    function shuffle() {
      if (state == 0) {
        return;
      }
      game.removeAttribute("class"); // remove animation..
      state = 0;
      let previousCell;
      let i = 1;
      let interval = setInterval(function() {
        if (i <= 150) {
          let adjacent = getAdjacentCells(getEmptyCell());
          if (previousCell) {
            for (let j = adjacent.length - 1; j >= 0; j--) {
              if (adjacent[j].innerHTML == previousCell.innerHTML) {
                adjacent.splice(j, 1);
              }
            }
          }
          // Gets random adjacent cell and memorizes it for the next iteration
          previousCell = adjacent[getRandomNumberBetween(0, adjacent.length - 1)];
          moveNumberCellToEmpty(previousCell, 0);
          i++;
        } else {
          clearInterval(interval);
          state = 1;
        }
      }, 5);
      // resetNoOfMoves();
      totalSeconds = 0;
    }
  
    function resetNoOfMoves() {
      noOfMoves = 0;
      document.getElementById("counter").innerText = noOfMoves;
    }
  
    function moveroworcolumn(cell, a) {
      if(cell.className != "empty") {
        let id = cell.id.split("-");
        let row = parseInt(id[1]);
        let col = parseInt(id[2]);
        for(let i=0;i < n;i++)
        {
          console.log(i);
          let tempCell = getCell(row,i);
          if(tempCell.className == "empty")
          {
            if(i < col)
            {
              for(;i < col;i++)
              {
                moveNumberCellToEmpty(getCell(row,i+1), 1);
              }
            }
            else
            {
              for(; i > col;i--)
              {
                moveNumberCellToEmpty(getCell(row,i-1), 1);
              }
            }
            return;
          }
        }
        for(let i=0;i < m;i++)
        {
          let tempCell = getCell(i, col);
          if(tempCell.className == "empty")
          {
            if(i < row)
            {
              for(;i < row;i++)
              {
                moveNumberCellToEmpty(getCell(i+1,col), 1);
              }
            }
            else
            {
              for(; i > row;i--)
              {
                moveNumberCellToEmpty(getCell(i-1, col), 1);
              }
            }
            return;
          }
        }
      }
    }
  
    // Shifts number cell to the empty cell
    function moveNumberCellToEmpty(cell, playingOrShuffling) {
      // Checks if selected cell has number
      if (cell.className != "empty") {
        // Tries to get empty adjacent cell
        let emptyCell = getEmptyAdjacentCellIfExists(cell);
  
        if (emptyCell) {
          if (playingOrShuffling === 1) {
            //   noOfMoves++;
            //   document.getElementById("counter").innerText = noOfMoves;
            //   new Audio("../sound/fire_bow_sound-mike-koenig.mp3").play();
          }
          // There is empty adjacent cell..
          // styling and id of the number cell
          let tempCell = { style: cell.style.cssText, id: cell.id };
  
          // Exchanges id and style values
          cell.style.cssText = emptyCell.style.cssText;
          cell.id = emptyCell.id;
          emptyCell.style.cssText = tempCell.style;
          emptyCell.id = tempCell.id;
  
          if (state == 1) {
            // Checks the order of numbers
            checkSolvedState();
          }
        }
      }
    }
  
    // Gets specific cell by row and column.
    function getCell(row, col) {
      return document.getElementById(`cell-${row}-${col}`);
    }
  
    // get the empty cell.
    function getEmptyCell() {
      return game.querySelector(".empty");
    }
  
    // Gets empty adjacent cell if it exists.
    function getEmptyAdjacentCellIfExists(cell) {
      // Gets all adjacent cells
      let adjacent = getAdjacentCells(cell);
  
      // Searches for empty cell
      for (let i = 0; i < adjacent.length; i++) {
        if (adjacent[i].className == "empty") {
          return adjacent[i];
        }
      }
  
      // Empty adjacent cell was not found..
      return false;
    }
  
    // Gets all adjacent cells
    function getAdjacentCells(cell) {
      let id = cell.id.split("-");
  
      // Gets cell position indexes
      // console.log(`id[0] = ${id[0]}`);
      let row = parseInt(id[1]);
      let col = parseInt(id[2]);
  
      let adjacent = [];
  
      // Gets all possible adjacent cells
      if (row < m-1) {
        adjacent.push(getCell(row + 1, col)); // right
      }
      if (row > 0) {
        adjacent.push(getCell(row - 1, col)); // left
      }
      if (col < n-1) {
        adjacent.push(getCell(row, col + 1)); // top
      }
      if (col > 0) {
        adjacent.push(getCell(row, col - 1)); // bottom
      }
      return adjacent;
    }
  
    // Checks if the order of numbers is correct and we get solved-state..
    function checkSolvedState() {
      // Checks if the empty cell is in correct position
      if (getCell(m-1, n-1).className != "empty") {
        return;
      }
  
      let k = 1;
      // Goes through all cells and checks numbers
      for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
          if (k < m* n && getCell(i, j).innerHTML != k.toString()) {
            // Order is not correct
            return;
          }
          k++;
        }
      }
      // Puzzle is solved, offers to shuffle it
      startCongratsOverLay();
      solved = 1;
    }
  
    // Generates random number
    function getRandomNumberBetween(from, to) {
      return Math.floor(Math.random() * (to - from + 1)) + from;
    }
  };
  
  //overlay
  function startCongratsOverLay() {
    document.getElementById("overlay-2").style.display = "block";
  }
  function endCongratsOverLay() {
    document.getElementById("overlay-2").style.display = "none";
  }
  