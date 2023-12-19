let nums = [2, 3, 4, 5, 6, 7];
const targetVal = 6;

(function checkSum() {
  let index1 = Math.floor(Math.random() * (nums.length - 1));
  let index2 = Math.floor(Math.random() * (nums.length - 1));
  let a = nums[index1];
  let b = nums[index2];
  // return a+b;
  if (index1 == index2) {
    checkSum();
  } else {
    let sum = a + b;
    if (sum == targetVal) {
      let indexArr = [];
      indexArr.push(index1, index2);
      console.log(indexArr);
    } else {
      checkSum();
    }
  }
})();
