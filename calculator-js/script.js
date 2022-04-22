// 1. Select all buttons
const numberBtns = document.getElementsByClassName("number"); //results in a HTML list

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

const numberDecimal = document.getElementById("decimal");
numberDecimal.value = ".";

//Select operation buttons
const operandBtns = document.getElementsByClassName("operand");

// Select invidiual operation buttons and assign value
const parenthesis = document.getElementById("parenthesis");
parenthesis.value = "("; //<----------------on the first click

const percentage = document.getElementById("percentage");
percentage.value = "%";

const division = document.getElementById("divide");
division.value = "/";

const times = document.getElementById("multiply");
times.value = "x";

const minus = document.getElementById("subtract");
minus.value = "-";

const add = document.getElementById("add");
add.value = "+";

const neg = document.getElementById("negative");
neg.value = "--";

// Select specific operations buttons
const deleteBtn = document.getElementById("delete-btn");
// deleteBtn.value <----------- create function to decrement by 1

const equalBtn = document.getElementById("equal");
equalBtn.value = "=";

const clearBtn = document.getElementById("clear");

// Select output windows

const output = document.querySelector("#lrgWindow");

const previewOutput = document.querySelector("#previewWindow");

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
let firstNumber = [];

const computeArray = (btnArrNum, btnArrOperand) => {
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

computeArray(arrayOfNumberBtns, arrayOfOperandBtns);

// 4. All operations

// 1. Clear button - clears all the input in the large window and the previous window.

const replace = () => (output.textContent = "");
const clear = () => location.reload(); // find a better way to do this!
const deleted = () => output.firstChild.toString.slice(0, -1);

// 2. Parenthsis - adds a open bracket then a close one on the second click

// 3. Percentage:
const peercent = (x) => parseFloat(x) * (1 / 100);

// 4. Divide:
const divide = (x, y) => parseFloat(x) / parseFloat(y);

// 5. Multiple:
const multiply = (x, y) => parseFloat(x) * parseFloat(y);

// 6. subtract:
const subtract = (x, y) => parseFloat(x) - parseFloat(y);

// 7. additon:
const sum = (x, y) => parseFloat(x) + parseFloat(y);

// 8. negative:
const negative = (x) => parseFloat(x) * -1;

// 5. Calculate

const compute = () => {
	switch (true) {
		case firstNumber.includes("+"):
			replace(),
				appendTextElement(
					"p",
					sum(
						firstNumber.join("").split("+")[0],
						firstNumber.join("").split("+")[1]
					),
					output
				);
			break;
		case firstNumber.includes("-"):
			replace(),
				appendTextElement(
					"p",
					subtract(
						firstNumber.join("").split("-")[0],
						firstNumber.join("").split("-")[1]
					),
					output
				);
			break;
		case firstNumber.includes("x"):
			replace(),
				appendTextElement(
					"p",
					multiply(
						firstNumber.join("").split("x")[0],
						firstNumber.join("").split("x")[1]
					),
					output
				);
			break;
		case firstNumber.includes("/"):
			replace(),
				appendTextElement(
					"p",
					divide(
						firstNumber.join("").split("/")[0],
						firstNumber.join("").split("/")[1]
					),
					output
				);
			break;
		case firstNumber.includes("%"):
			replace(),
				appendTextElement(
					"p",
					divide(
						firstNumber.join("").split("%")[0],
						firstNumber.join("").split("%")[1]
					),
					output
				);
			break;
		case firstNumber.includes("--"):
			replace(),
				appendTextElement(
					"p",
					negative(
						firstNumber.join("").split("--")[0],
						firstNumber.join("").split("--")[1]
					),
					output
				);
			break;
	}
};

clearBtn.addEventListener("click", clear);

equalBtn.addEventListener("click", compute);

deleteBtn.addEventListener("click", deleted);
