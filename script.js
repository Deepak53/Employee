// Sample employee data
const employees = [
	{id: 1, name: "John", age: 18, profession: "developer"},
	{id: 2, name: "Jack", age: 20, profession: "developer"},
	{id: 3, name: "Karen", age: 19, profession: "admin"}
];

const cardContainer = document.querySelector('.card-container');
const professionFilter = document.querySelector('#profession');
const addName = document.querySelector('#name');
const addAge = document.querySelector('#age');
const addProfession = document.querySelector('#addProfession');
const addBtn = document.querySelector('#addBtn');
const filterBtn = document.querySelector('#filterBtn');

// Display all employees on page load
displayEmployees(employees);

// Event listener for filter button click
filterBtn.addEventListener('click', () => {
	const selectedProfession = professionFilter.value;

	if (selectedProfession === "") {
		alert("Please select a profession");
	} else {
		const filteredEmployees = employees.filter(employee => employee.profession === selectedProfession);
		displayEmployees(filteredEmployees);
	}
});

// Event listener for add user button click
addBtn.addEventListener('click', () => {
	const name = addName.value.trim();
	const age = addAge.value.trim();
});