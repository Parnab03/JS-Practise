let multiply = (num1,num2) => num1*num2;
console.log(multiply(4,5));

let pringGreeting = () => console.log('Hi');
let runTwice = inputFunction => {
    inputFunction();
    inputFunction();
};
runTwice(pringGreeting);

let buttonElement = document.querySelector('.my-btn');
buttonElement.addEventListener('click', event => {setTimeout(doubleTheSize, 2000);})

function doubleTheSize(){
    // let buttonElement = document.querySelector('.my-btn');
    buttonElement.classList.add('js-size-double');
}

let arr = [1,2,3,4,5,6,7,8,9];
let sum =0;
arr.forEach(num => sum+=num);
console.log(sum);

let squares = arr.map(num => num*num);
console.log(squares);