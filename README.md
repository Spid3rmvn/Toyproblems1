
# Projects

This repository contains three different projects:

1. **Student Grade Calculator**
2. **Speed Detector**
3. **Net Salary Calculator**

Each project comes with an HTML and JavaScript implementation, and below is a detailed description of each.

---

## 1. Student Grade Calculator

### Description

This project calculates a student's grade based on the marks inputted by the user. The script accepts marks between 0 and 100 and then calculates the corresponding grade based on the following grading system:

- **A:** 79 and above
- **B:** 60 to 78
- **C:** 50 to 59
- **D:** 40 to 49
- **E:** Below 40

The user is prompted to enter the marks, and the grade is displayed based on the provided marks. Input validation is performed to ensure the marks are a valid number within the range of 0 to 100.

### Features

- User-friendly interface to input marks (between 0 and 100).
- Input validation to check if the entered marks are a valid number and within the valid range.
- Displays the result based on the calculated grade.

### How to Use

1. **Open the `index.html` file** in a browser.
2. Enter marks (between 0 and 100) into the input field and click "Calculate Grade".
3. The script will calculate the grade and show the result in an alert.

### Code Walkthrough

#### HTML (`index.html`)

The HTML file creates a simple form where users can input marks and click a button to calculate the grade.

#### JavaScript (`gradegenerator.js`)

This script:
- Prompts the user to enter marks.
- Validates if the input is a valid number within the range of 0-100.
- Calculates and displays the corresponding grade based on the provided marks.

---

## 2. Speed Detector

### Description

This project checks if a vehicle's speed exceeds the legal speed limit. The user is prompted to input their speed in km/h, and the script determines if they are within the limit or have exceeded it.

- The speed limit is set to **70 km/h**.
- The script calculates how many points are accumulated based on every **5 km/h** over the speed limit.
- If the points exceed 12, the user's license is suspended.

### Features

- Input validation ensures the speed is a valid positive number.
- Displays whether the driver's speed is within the limit or how many points they have accumulated.
- Alerts the driver if their license is suspended due to exceeding the point threshold.

### How to Use

1. **Open the `index.html` file** for the Speed Detector in a browser.
2. Click on the "Check Speed" button.
3. The user will be prompted to enter their speed in km/h.
4. The script will check if the speed is above the limit and display an appropriate message.

### Code Walkthrough

#### HTML (`index.html`)

The HTML file creates a button for the user to click to check their speed.

#### JavaScript (`speeddetector.js`)

This script:
- Prompts the user to enter their speed.
- Validates the input.
- Calculates if the speed exceeds the limit and how many points are accumulated.
- Alerts the user if their license should be suspended.

---

## 3. Net Salary Calculator

### Description

This project calculates the net salary after deductions for PAYE (tax), NHIF (health insurance), and NSSF (social security). The user is prompted to enter their basic salary and benefits.

- The **PAYE** is calculated based on a set tax bracket.
- The **NHIF** deduction is calculated based on the salary range.
- The **NSSF** deduction is calculated using tiered contribution limits.

The script displays the gross salary, deductions, and the final net salary.

### Features

- Allows users to input their basic salary and benefits.
- Calculates gross salary, deductions, and net salary.
- Displays the breakdown of deductions for PAYE, NHIF, and NSSF.

### How to Use

1. **Open the `index.html` file** in a browser.
2. Click on the "Calculate Net Salary" button.
3. The user will be prompted to input their basic salary and benefits.
4. The script will calculate the net salary and show the results in an alert.

### Code Walkthrough

#### HTML (`index.html`)

The HTML file creates a button for the user to click to calculate the net salary.

#### JavaScript (`netsalarycalculator.js`)

This script:
- Prompts the user to enter basic salary and benefits.
- Calculates gross salary and deductions (PAYE, NHIF, and NSSF).
- Displays the results in an alert.

---

## Troubleshooting

- **Invalid Input:** If the user enters non-numeric input or a negative value, they will be prompted to input a valid value.
- **Results Not Displaying:** Ensure that the correct JavaScript file is linked in the HTML file using `<script src="path/to/your/script.js"></script>`.

## License

This project is open-source. Feel free to modify or distribute it according to your needs.
