const currentDate = new Date();

// input
const dayInput = document.querySelector(".day-input"),
	monthInput = document.querySelector(".month-input"),
	yearInput = document.querySelector(".year-input");

// output
const dayOutput = document.querySelector(".day-output"),
	monthOutput = document.querySelector(".month-output"),
	yearOutput = document.querySelector(".year-output");

// current date
const currentYear = currentDate.getYear(),
	currentMonth = currentDate.getMonth() + 1,
	currentDay = currentDate.getDate();

let givenDate, givenYear, givenMonth, givenDay;

const getInputDate = () => {
	givenDate = new Date(parseInt(yearInput.value), parseInt(monthInput.value) - 1, parseInt(dayInput.value));
	givenYear = givenDate.getYear();
	givenMonth = givenDate.getMonth() + 1;
	givenDay = givenDate.getDate();
	console.log(givenDate);
	console.log(currentYear - givenYear);
	console.log(givenMonth);
	console.log(givenDay);
};

// input checker ----------

let isValid = false;

const allInput = document.querySelectorAll("input");

const inputChecker = () => {
	allInput.forEach((eachInput) => {
		if (!eachInput.value) {
		}
	});
};

// output calculations ----------

const outputData = () => {
	dayOutput.textContent = calcDay;
	monthOutput.textContent = calcMonth;
	yearOutput.textContent = calcYear;
};

// calculations ----------

let calcYear, calcMonth, calcDay;

const calculate = () => {
	getInputDate();

	// years
	calcYear = currentYear - givenYear;

	// months
	if (currentMonth < givenMonth) {
		calcMonth = givenMonth - currentMonth;
		calcYear--;
	} else {
		calcMonth = Math.abs(currentMonth - givenMonth);
	}

	// days
	calcDay = Math.abs(currentDay - givenDay);

	outputData();
};

// button

const button = document.querySelector("img");

button.onclick = calculate;
