function checkSpeed() {
    // Prompt user for input
    let speed = parseFloat(prompt("Enter the speed of the car:"));

    // Check if the input is a valid number
    if (isNaN(speed)) {
        alert("Please enter a valid number for speed.");
        return; // Exit the function if input is invalid
    }

    // Speed limit
    const speedLimit = 70;

    // Calculate demerit points
    if (speed < speedLimit) {
        alert("Ok");
    } else {
        // Calculate the number of demerit points
        let demeritPoints = Math.floor((speed - speedLimit) / 5);
        alert(`Points: ${demeritPoints}`);

        // Check if the license should be suspended
        if (demeritPoints > 12) {
            alert("License suspended");
        }
    }
}

// Call the function
checkSpeed();