function pickingNumbers(a) {

    let maxCount = 0;

    a.sort(function (a, b) { return a - b });

    for (let i = 0; i < a.length; i++) {
        let count = 0;
        for (let j = i; j < a.length; j++) {
            if (Math.abs(a[i] - a[j]) <= 1) {
                count++;
            }
            if (a[i] == a[j] && i != j) {
                i++;
            }

        }

        if (count > maxCount) {
            maxCount = count;
        }
    }

    return maxCount;



}