// let arr = [5,6];
// arr.push(7);
// console.log(arr);
// arr.unshift(4);
// console.log(arr);

function getElement(arr, position){
    return arr[position - 1];
}
let arr = [5,6,7,8,9];
console.log(getElement(arr, 3));


function arrCopy(arr){
    return arr.slice(0, arr.length);
}

let arr2 = arrCopy(arr);
arr2[0] = null;
console.log(arr);
console.log(arr2);

function isPrime(num){
    for(let i = 2; i < num; i++){
        if(num % i === 0){
            return false;
        }
    }
    return true;
}
let num = 2;
let i =0;
while(true){
    if(isPrime(num)){
        console.log(num);
        i++;
        if(i>=5){
            break;
        }
    }
    num++;
}  


for(let i = 10; i > 0; i--){
    console.log(i);
}
for(let i = 0; i < 10; i++){
    console.log(10-i);
}

let num1 = [1,-6,5,7,-98];
for(let i = 0; i <num1.length; i++){
    if(num1[i] < 0){
        continue;
    }
    console.log(num1[i]);
}

let arr3 = ['KG', 'Coding', 'JS', 'Course', 'is', 'best'];
let str = '';
for(let i = 0; i < arr3.length; i++){
    str += arr3[i] + ' ';
}
console.log(str);

console.log(arr3.join(" "));