let squareArray = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
];

function unroll(squareArray) {
    let result = [];

    let startingRow = 0, finalRow = squareArray.length - 1;
    let startingCol = 0, finalCol = squareArray[0].length - 1;

    while (startingRow <= finalRow && startingCol <= finalCol) {

        for (let i = startingCol; i <= finalCol; i++) {
            result.push(squareArray[startingRow][i]);
        }
        startingRow++;


        for (let i = startingRow; i <= finalRow; i++) {
            result.push(squareArray[i][finalCol])
        }
        finalCol--;

        if (startingRow <= finalRow) {

            for (let i = finalCol; i >= startingCol; i--) {
                result.push(squareArray[finalRow][i])
            }
            finalRow--;
        }

        if (startingCol <= finalCol) {

            for (let i = finalRow; i >= startingRow; i--) {
                result.push(squareArray[i][startingCol])
            }
            startingCol++;
        }
    }

    return result;
}



console.log(unroll(squareArray));

module.exports = unroll;