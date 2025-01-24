function formingMagicSquare(s) {
    const magicSquares = [
        [[8, 1, 6], [3, 5, 7], [4, 9, 2]],
        [[6, 1, 8], [7, 5, 3], [2, 9, 4]],
        [[2, 9, 4], [7, 5, 3], [6, 1, 8]],
        [[4, 9, 2], [3, 5, 7], [8, 1, 6]],
        [[8, 3, 4], [1, 5, 9], [6, 7, 2]],
        [[4, 3, 8], [9, 5, 1], [2, 7, 6]],
        [[2, 7, 6], [9, 5, 1], [4, 3, 8]],
        [[6, 7, 2], [1, 5, 9], [8, 3, 4]]
    ];

    let ways = [];

    magicSquares.forEach(arr => {
        let way = 0;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                way += Math.abs(s[i][j] - arr[i][j])
            }
        }

        ways.push(way);
    });

    return ways.sort((a, b) => a - b)[0];
}