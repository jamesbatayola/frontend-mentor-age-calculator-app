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
};

// input checker ----------

let isValid = false;

const allInput = document.querySelectorAll("input");

const errorDisplay = (input) => {
	input.nextElementSibling.classList.add("error-message");
	input.previousElementSibling.classList.add("error-message");
	input.style.borderColor = "hsl(0, 100%, 67%)";
};

const removeError = (input) => {
	input.nextElementSibling.classList.remove("error-message");
	input.previousElementSibling.classList.remove("error-message");
	input.style.borderColor = "hsl(0, 0%, 86%)";
};

const inputChecker = () => {
	allInput.forEach((eachInput) => {
		if (eachInput.value === "") {
			eachInput.nextElementSibling.textContent = "This field is required";
			errorDisplay(eachInput);
		} else if (isNaN(eachInput.value)) {
			eachInput.nextElementSibling.textContent = "Invalid number";
			errorDisplay(eachInput);
		} else {
			removeError(eachInput);
		}
	});
	// day input
	if (dayInput.value > 31) {
		dayInput.nextElementSibling.textContent = "To much days";
		errorDisplay(dayInput);
	}

	// month input
	if (monthInput.value > 12) {
		monthInput.nextElementSibling.textContent = "To much months";
		errorDisplay(monthInput);
	}

	if (monthInput.value == 4 || monthInput.value == 6 || monthInput.value == 9 || monthInput.value == 11) {
		if (dayInput.value > 30) {
			dayInput.nextElementSibling.textContent = "The month has 30 days";
			errorDisplay(dayInput);
		}
	} else if (monthInput.value == 2) {
		if (dayInput.value > 28) {
			dayInput.nextElementSibling.textContent = "The month has 28 days";
			errorDisplay(dayInput);
		}
	}

	// year input
	if (currentYear < givenYear) {
		yearInput.nextElementSibling.textContent = "To much years";
		errorDisplay(yearInput);
	}
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
		calcMonth = 13 - givenMonth;
		calcYear--;
	} else {
		calcMonth = Math.abs(currentMonth - givenMonth);
	}

	// days
	if (currentDay < givenDay) {
		calcDay = 31 - (givenDay - currentDay);
		if (calcYear === 1) {
			calcYear = 0;
		}
		if (calcMonth === 0) {
			calcMonth = 11;
		} else {
			calcMonth--;
		}
	} else {
		calcDay = currentDay - givenDay;
	}

	outputData();
};

// button

const button = document.querySelector("img");

button.onclick = calculate;
