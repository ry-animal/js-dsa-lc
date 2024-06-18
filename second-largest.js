const secondLargest = (arr) => {
    const uniqueArr = Array.from(new Set(arr)); // O(n)

    uniqueArr.sort((a,b) => b - a); // 0(nlogn)

    if(uniqueArr.length >= 2) {
        return uniqueArr[1];
    } else {
        return -1;
    }
}

console.log(secondLargest([12, 35, 1, 10, 34, 1])); // 34
// TIME - O(nlogn);

const optimizedSecondLargest = (arr) => {
    let largest = Number.NEGATIVE_INFINITY;
    let secondLargest = Number.NEGATIVE_INFINITY;

    for (let i = 0; i < arr.length; i++) {
        if(arr[i] > largest) {
            secondLargest = largest;
            largest = arr[i];
        } else if(arr[i] !== largest && arr[i] > secondLargest) {
            secondLargest = arr[i];
        }
    }

    return secondLargest;
}

console.log(optimizedSecondLargest([12, 35, 1, 10, 34, 1])) // 34
// TIME - O(n)