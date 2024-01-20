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

// given date

const calculate = () => {
	const givenDate = new Date(yearOutput, monthOutput, dayOutput);
	const givenYear = givenDate.getYear(),
		givenMonth = givenDate.getMonth() + 1,
		givenDay = givenDate.getDay();

	if (yearOutput.textContent) yearOutput.textContent = currentYear - givenYear;
	if (monthOutput.textContent) monthOutput.textContent = currentMonth - givenMonth;
	if (dayOutput.textContent) dayOutput.textContent = currentDay - givenDay;
};
