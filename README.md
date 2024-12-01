# Toyproblems1
# Student Grade Generator

This project is a simple JavaScript program that takes a student's marks as input and generates the corresponding grade based on predefined criteria. It is designed to be interactive and user-friendly, utilizing prompts and alerts for input and output.

## Overview

The Student Grade Generator calculates the grade based on the marks provided by the user. The program validates the input to ensure that the marks are within the range of 0 to 100 and then determines the grade according to the following criteria:

- **A**: 80 - 100
- **B**: 65 - 79
- **C**: 50 - 64
- **D**: 40 - 49
- **E**: 0 - 39

## Features

- Prompts the user to enter student marks.
- Validates the input to ensure it is a number between 0 and 100.
- Calculates and displays the corresponding grade based on the input marks.
- Alerts the user with the final grade.

## How to Run

1. Open your web browser.
2. Open the Developer Tools (usually F12).
3. Navigate to the Console tab.
4. Copy and paste the following code into the console:

```javascript
function getStudentGrade() {
    let marks = parseFloat(prompt("Enter the student's marks:"));

    // Validate input
    if (isNaN(marks) || marks < 0 || marks > 100) {
        alert("Please enter a valid number between 0 and 100.");
        return;
    }

    // Determine grade
    let grade;
    if (marks >= 80) {
        grade = "A";
    } else if (marks >= 65) {
        grade = "B";
    } else if (marks >= 50) {
        grade = "C";
    } else if (marks >= 40) {
        grade = "D";
    } else {
        grade = "E";
    }

    // Output the result
    alert(`The student's grade is: ${grade}`);
}

// Call the function
getStudentGrade();

# Speeding Demerit Points Calculator

This project is a JavaScript program that calculates demerit points based on the speed of a vehicle. It determines whether the driver is within the speed limit and calculates the corresponding demerit points for speeding. The program is designed to be interactive, utilizing prompts and alerts for input and output.

## Overview

The Speeding Demerit Points Calculator prompts the user to enter the speed of their vehicle. If the speed is below the speed limit (70 km/h), it notifies the user that they are within the limit. For every 5 km/h above the limit, the program assigns demerit points. If the total demerit points exceed 12, it alerts the user that their license will be suspended.

## Features

- Prompts the user to enter the speed of the vehicle.
- Validates the input to ensure it is a numeric value.
- Calculates demerit points based on the speed limit.
- Alerts the user if they are within the speed limit or if their license is at risk of suspension.

## How to Run

1. Open your web browser.
2. Open the Developer Tools (usually F12).
3. Navigate to the Console tab.
4. Copy and paste the following code into the console:

```javascript
function checkSpeed() {
    let speed = parseFloat(prompt("Enter the speed of the vehicle:"));

    // Validate input
    if (isNaN(speed)) {
        alert("Please enter a valid numeric value for speed.");
        return;
    }

    const speedLimit = 70;
    const demeritPointsPerUnit = 5;
    let demeritPoints = 0;

    // Check speed against the limit
    if (speed <= speedLimit) {
        alert("Ok");
    } else {
        demeritPoints = Math.floor((speed - speedLimit) / demeritPointsPerUnit);
        alert(`Demerit Points: ${demeritPoints}`);
        
        // Check for license suspension
        if (demeritPoints > 12) {
            alert("License Suspended");
        }
    }
}

// Call the function
checkSpeed();

# Net Salary Calculator

This project is a JavaScript program that calculates an individual's net salary based on their basic salary and benefits. It computes the gross salary, PAYE tax, NHIF deductions, NSSF deductions, and ultimately the net salary. The program is designed to be interactive, using prompts and alerts for input and output.

## Overview

The Net Salary Calculator takes the basic salary and benefits as input and calculates the gross salary. It then computes the PAYE tax based on defined tax brackets, NHIF deductions based on gross salary, and NSSF deductions based on basic salary. Finally, it outputs the net salary after all deductions.

## Features

- Prompts the user to enter their basic salary and benefits.
- Validates the input to ensure they are numeric values.
- Calculates gross salary, PAYE tax, NHIF deductions, NSSF deductions, and net salary.
- Displays a summary of the calculations in an alert box.

## How to Run

1. Open your web browser.
2. Open the Developer Tools (usually F12).
3. Navigate to the Console tab.
4. Copy and paste the following code into the console:

```javascript
function calculateNetSalary() {
    let basicSalary = parseFloat(prompt("Enter your basic salary:"));
    let benefits = parseFloat(prompt("Enter your benefits:"));

    if (isNaN(basicSalary) || isNaN(benefits)) {
        alert("Please enter valid numeric values for salary and benefits.");
        return;
    }

    let grossSalary = basicSalary + benefits;
    let tax = calculateTax(grossSalary);
    let nhif = calculateNHIF(grossSalary);
    let nssf = calculateNSSF(basicSalary);
    let netSalary = grossSalary - (tax + nhif + nssf);

    alert(`Gross Salary: ${grossSalary}\nPAYE Tax: ${tax}\nNHIF: ${nhif}\nNSSF: ${nssf}\nNet Salary: ${netSalary}`);
}

function calculateTax(grossSalary) {
    let tax = 0;
    if (grossSalary <= 24000) {
        tax = grossSalary * 0.10;
    } else if (grossSalary <= 32333) {
        tax = 2400 + (grossSalary - 24000) * 0.25;
    } else {
        tax = 2400 + (32333 - 24000) * 0.25 + (grossSalary - 32333) * 0.30;
    }
    return tax;
}

function calculateNHIF(grossSalary) {
    if (grossSalary <= 5999) {
        return 150;
    } else if (grossSalary <= 7999) {
        return 300;
    } else if (grossSalary <= 11999) {
        return 400;
    } else if (grossSalary <= 14999) {
        return 500;
    } else if (grossSalary <= 19999) {
        return 600;
    } else if (grossSalary <= 24999) {
        return 750;
    } else if (grossSalary <= 29999) {
        return 850;
    } else if (grossSalary <= 34999) {
        return 900;
    } else if (grossSalary <= 39999) {
        return 950;
    } else if (grossSalary <= 44999) {
        return 1000;
    } else if (grossSalary <= 49999) {
        return 1100;
    } else {
        return 1200;
    }
}

function calculateNSSF(basicSalary) {
    return basicSalary * 0.06;
}

// Call the function
calculateNetSalary();