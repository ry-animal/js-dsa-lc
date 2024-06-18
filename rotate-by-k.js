const rotateArray = (nums, k) => {
    let size = nums.length;

    if (size > k) {
        k = k % size; //eg 10 % 8 => 2
    }

    const rotated = nums.splice(size - k, size); // 8 - 3 = 5
    nums.unshift(...rotated);



    return nums;
}

console.log(rotateArray([1,2,3,4,5,6,7], 3)); // [5,6,7,1,2,3,4]
// TIME - 0(n)