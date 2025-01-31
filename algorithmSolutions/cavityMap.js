function cavityMap(grid) {
  let result = grid.map((row) => row.split(""));
  for (let i = 1; i < grid.length - 1; i++) {
    for (let j = 1; j < grid.length - 1; j++) {
      let cell = grid[i][j];

      if (
        cell > grid[i - 1][j] &&
        cell > grid[i + 1][j] &&
        cell > grid[i][j - 1] &&
        cell > grid[i][j + 1]
      ) {
        result[i][j] = "X";
      }
    }
  }
  return result.map((row) => row.join(""));
}
