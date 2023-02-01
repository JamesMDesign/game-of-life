function checker(testCase) {
    
    const cell = testCase.cell;

    const neighbors = testCase.neighbors;

    const initialValue = 0;

    const sum01 = neighbors.reduce((accumulator, currentValue) =>
        accumulator + currentValue, initialValue);

    if (cell === 0) {

        if (sum01 === 3) {
            return 1;
        } else {
            return 0;
        }
    } else {
        if(sum01 < 2) {
            return 0;
        } else if (sum01 > 3) {
            return 0;
        } else {
            return 1;
        }
    }

}
    export { checker }