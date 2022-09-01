// Function scope - var
// Block scope - let, const
if (true) {
  var x = "var";
}
console.log(`var : ${x}`);

function foo() {
  if (true) {
    var variable = "hello";
    console.log("block -", variable);
  }
  console.log("function -", variable);
}

//console.log("global", variable);
foo();

// Array.map()
let numArr = [1, 2, 3];
const newArr = numArr.map((x) => x * 2);
console.log(newArr);

//함수 표현식
let sum = (a, b) => {
  return a + b;
};
console.log(sum(1, 2));

// == : 값만 비교, === : 값과 타입 모두 비교
let a = 2 + 3;
let b = 5;
// 값과 타입 모두 비교
if (a === b) {
  console.log("a===b");
}

let u = 5;
let v = "5";
//값만 비교
if (u == v) {
  console.log("u==v");
}
