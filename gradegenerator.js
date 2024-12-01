function getStudentGrade() {
    while (true) {
        // Prompt user for input
        let input = prompt("Enter student marks (0-100):");
        
        // Convert input to a number
        let marks = parseFloat(input);

        // Check if marks are a valid number and within the valid range
        if (!isNaN(marks) && marks >= 0 && marks <= 100) {
            let grade;

            // Determine the grade based on the marks
            if (marks > 79) {
                grade = 'A';
            } else if (marks >= 60) {
                grade = 'B';
            } else if (marks >= 49) {
                grade = 'C';
            } else if (marks >= 40) {
                grade = 'D';
            } else {  // marks < 40
                grade = 'E';
            }

            // Output the grade
            alert(`The grade for marks ${marks} is: ${grade}`);
            break;  // Exit the loop after successful input and output
        } else {
            alert("Please enter marks between 0 and 100.");
        }
    }
}

// Call the function
getStudentGrade();
