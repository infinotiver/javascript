// Creating a new Date object
const currentDate = new Date();
console.log("Current Date:", currentDate);

// Getting the current date components
const day = currentDate.getDate();
const month = currentDate.getMonth() + 1; // Months are zero-based, so we add 1
const year = currentDate.getFullYear();
console.log("Day:", day);
console.log("Month:", month);
console.log("Year:", year);

// Formatting the date
const formattedDate = `${day}/${month}/${year}`;
console.log("Formatted Date:", formattedDate);

// Adding days to a date
const futureDate = new Date(currentDate);
futureDate.setDate(futureDate.getDate() + 7); // Adding 7 days
console.log("Future Date:", futureDate);

// Subtracting days from a date
const pastDate = new Date(currentDate);
pastDate.setDate(pastDate.getDate() - 3); // Subtracting 3 days
console.log("Past Date:", pastDate);

// Comparing dates
const isFutureDate = futureDate > currentDate;
const isPastDate = pastDate < currentDate;
console.log("Is Future Date:", isFutureDate);
console.log("Is Past Date:", isPastDate);