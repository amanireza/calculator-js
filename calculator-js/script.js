// 1. Select all buttons
const numberBtns = document.getElementsByClassName("number");
console.log(numberBtns); //results in a HTML list

// Select individual number buttons and add value  =======Is there a better way to do this?
const number9 = document.getElementById("num9");
number9.value = 9;

const number8 = document.getElementById("num8");
number8.value = 8;

const number7 = document.getElementById("num7");
number7.value = 7;

const number6 = document.getElementById("num6");
number6.value = 6;

const number5 = document.getElementById("num5");
number5.value = 5;

const number4 = document.getElementById("num4");
number4.value = 4;

const number3 = document.getElementById("num3");
number3.value = 3;

const number2 = document.getElementById("num2");
number2.value = 2;

const number1 = document.getElementById("num1");
number1.value = 1;

const number0 = document.getElementById("num0");
number0.value = 0;

//Select operation buttons
const operandBtns = document.getElementsByClassName("operand");
console.log(operandBtns);

// Select invidiual operation buttons and assign value
const parenthesis = document.getElementById("parenthesis");
parenthesis.value = "("; //<----------------on the first click

const percentage = document.getElementById("percentage");
percentage.value = "%";

const divide = document.getElementById("divide");
divide.value = "/";

const times = document.getElementById("multiply");
times.value = "*";

const minus = document.getElementById("subtract");
minus.value = "-";

const add = document.getElementById("add");
add.value = "+";

// Select specific operations buttons
const deleteBtn = document.getElementById("delete-btn");
console.log(deleteBtn);
// deleteBtn.value <----------- create function to decrement by 1

const equalBtn = document.getElementById("equal");
console.log(equalBtn);
equalBtn.value = "=";

const clearBtn = document.getElementById("clear");
// deleteBtn.value <----------- create function to clear Output

// Select output windows

const output = document.querySelector("#lrgWindow");
console.log(output);

const previewOutput = document.querySelector("#previewWindow");
console.log(previewOutput);

//---------------------------------------------------

// 2. add text function
const appendTextElement = (type, text, parent) => {
	const newElement = document.createElement(type);
	const textNode = document.createTextNode(text);

	newElement.appendChild(textNode);
	parent.appendChild(newElement);
};

//------------------------------------------

// 3. event listeners

const arrayOfNumberBtns = Array.from(numberBtns);
// btnArr needed for function
// console.log(arrayOfElements); // check for buttons to come out as an array

const arrayOfOperandBtns = Array.from(operandBtns);
// console.log(arrayOfOperandBtns); // check for buttons to come out as an array

// const numberArray = (btnArr) => {
// 	let firstNumber = [];
// 	btnArr.map((numberBtn) =>
// 		numberBtn.addEventListener("click", () => {
// 			const num = numberBtn.value;
// 			appendTextElement("p", num, output);
// 			firstNumber.push(num);

// 			return console.log(firstNumber);
// 		})
// 	);
// };

// const numberArrayStop = (btnArr) => {
// 	let firstNumber = [];
// 	btnArr.map((numberBtn) =>
// 		numberBtn.removeEventListener("click", () => {
// 			const num = numberBtn.value;
// 			appendTextElement("p", num, output);
// 			firstNumber.push(num);

// 			return console.log(firstNumber);
// 		})
// 	);
// };

// const operandArray = (btnArr) => {
// 	btnArr.map((Btn) =>
// 		Btn.addEventListener("click", () => {
// 			const operand = Btn.value;
// 			appendTextElement("p", operand, output);

// 			return console.log(operand);
// 		})
// 	);
// };

// console.log(operandArray(arrayOfOperandBtns));
// numberArray(arrayOfNumberBtns);

const computeArray = (btnArrNum, btnArrOperand) => {
	let firstNumber = [];

	btnArrOperand.map((Btn) =>
		Btn.addEventListener("click", () => {
			const operand = Btn.value;
			appendTextElement("p", operand, output);

			firstNumber.push(operand);

			return console.log(firstNumber);
		})
	);

	btnArrNum.map((numberBtn) =>
		numberBtn.addEventListener("click", () => {
			const num = numberBtn.value;
			appendTextElement("p", num, output);
			firstNumber.push(num);

			return console.log(firstNumber);
		})
	);
};

console.log(computeArray(arrayOfNumberBtns, arrayOfOperandBtns));

// const computeArray = (btnArrNum) => {
// 	btnArrNum.map((numberBtn) =>
// 		numberBtn.addEventListener("click", () => {
// 			const num = numberBtn.value;
// 			return appendTextElement("p", num, output);
// 		})
// 	);
// };

// THIS IS THE CODE YOU SAW BEFORE
// let firstNumber = [];

// const test = arrayOfNumberBtns.forEach((button) => {
// 	button.addEventListener("click", () => {
// 		const num = button.value;
// 		appendTextElement("p", num, output);
// 		firstNumber.num;
// 		console.log(firstNumber);
// 	});
// });

// test();

// console.log(test);
// console.log(firstNumber);
//---------------------------------

// console.log(computeArray(arrayOfNumberBtns));

// const numberArray = (btnArr) => {
// 	let firstNumber = [];
// 	btnArr.map((numberBtn) =>
// 		numberBtn.addEventListener("click", () => {
// 			const num = numberBtn.value;
// 			appendTextElement("p", num, output);
// 			firstNumber.push(num);

// 			return console.log(firstNumber);
// 		})
// 	);
// };

// 4. Input Variables
const once = {
	once: true,
};

const firstInput = (numberArray) => {
	if (output.childNodes.length === 0) {
		// will check if the Large Window is empty of textNodes
		return numberArray(arrayOfNumberBtns);
	} //else clear

	// for (let i = 0; i < numberArray.length; i++) {
	// 	if (operandBtns.addEventListener("click", () === true) {
	// 		numberArrayStop;
	// 		return console.log(numberArray.joins(""));
	// 	}
	// }
};

// console.log(x);

// ----------------All operations
// 1. Clear button - clears all the input in the large window and the previous window.
//     a. return an empty array?

// 2. Parenthsis - adds a open bracket then a close one on the second click
// 3. Percentage - (x/y)*100
// 4. Divide - x/y

// 5. Multiple - *
const multiply = (x, y) => x * y;

// 6. subtract - -
const subtract = (x, y) => x - y;

// 7. additon - +
const sum = (x, y) => x + y;

const basicFormula = (x, y, operand) => x(operand)(y);
/*
// need to get first number - x
// breaks onces an operand button is clicked 
*/
