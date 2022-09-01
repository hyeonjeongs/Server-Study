let isDone: boolean = true;
const str: string = 'hello';
let num: number = 2;

let arr: number[] = [1, 2, 3];

const strArr: Array<string> = ['hello', 'world'];

const objArr: Array<object> = [
    { item: 'value' },
    { item: 'value2' }
];

function foo2(a: number, b: number): number {
    return a + b;
}

let foo3 = (a: number, b: number): number => {
    return a + b;
}

console.log(foo2(1, 2));
console.log(foo3(3, 4));