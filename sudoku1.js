    let N = 9;

    function solveSudoku(grid, row, col) {
        
      if (row == N - 1 && col == N)
        return true;
      if (col == N) {
        row++;
        col = 0;
      }
      if (grid[row][col] != 0)
        return solveSudoku(grid, row, col + 1);

      for (let num = 1; num < 10; num++) {
        if (isSafe(grid, row, col, num)) {
          grid[row][col] = num;
          if (solveSudoku(grid, row, col + 1))
            return true;
        }
        grid[row][col] = 0;
      }
      return false;
    }
    function print(grid) {
      for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++)
          document.write(grid[i][j] + " ");

        document.write("<br>");
      }
    }
    function isSafe(grid, row, col, num) {
      for (let x = 0; x <= 8; x++)
        if (grid[row][x] == num)
          return false;
      for (let x = 0; x <= 8; x++)
        if (grid[x][col] == num)
          return false;
      let startRow = row - row % 3,
        startCol = col - col % 3;

      for (let i = 0; i < 3; i++)
        for (let j = 0; j < 3; j++)
          if (grid[i + startRow][j + startCol] == num)
            return false;

      return true;
    }


    function sol(HARD_PUZZLE) {
      a = HARD_PUZZLE.split("")
      a.forEach(function (item, i) { if (item == '-') a[i] = '0'; });
      var gfg = new Array(9);
      for (var i = 0; i < gfg.length; i++) {
        gfg[i] = new Array(9);
      }
      for (let i = 0; i <=8; i++) {
        for (let k = 0; k <=8; k++) {
          gfg[i][k] = a[(i * 9) + k];
        }
      }
      
      if (solveSudoku(gfg, 0, 0)){
        let g = ""
        for (let i = 0; i <=8; i++) {
          for (let k = 0; k <= 8; k++) {
            let y = gfg[i][k];
            g = g + y;
          }
        }
        return g
      }
      else
        return false
    }
