
# JavaScript Utilities: Grading, Speed Detection, and Salary Calculation

## Description
This project contains three JavaScript utilities designed for specific purposes:

1. **Grade Calculator**: Calculates the grade for a given mark.
2. **Speed Detector**: Evaluates a driver's speed against a speed limit and issues warnings, points, or suspensions.
3. **Net Salary Calculator**: Computes the net salary after applying PAYE, NHIF, and NSSF deductions.

Each utility demonstrates essential JavaScript concepts such as user input handling, conditional logic, and modular functions.

---

## Features
### Grade Calculator
- Accepts a numeric input (0-100) and validates it.
- Determines the grade based on the following scale:
  - **A**: 79-100
  - **B**: 60-78
  - **C**: 50-59
  - **D**: 40-49
  - **E**: 0-39

### Speed Detector
- Prompts the user for the speed in km/h.
- Compares the speed against a speed limit of 70 km/h.
- Issues:
  - **OK** if the speed is within the limit.
  - **Points** for every 5 km/h above the limit.
  - **License Suspension** if the driver accumulates more than 12 points.

### Net Salary Calculator
- Accepts inputs for basic salary and benefits.
- Calculates:
  - **PAYE** (Pay-As-You-Earn tax) based on salary brackets.
  - **NHIF** (National Health Insurance Fund) contributions.
  - **NSSF** (National Social Security Fund) contributions.
  - **Net Salary** after deductions.

---

## Installation
1. Clone this repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project folder:
   ```bash
   cd <project-folder>
   ```
3. Install the required package:
   ```bash
   npm install readline-sync
   ```

---

## Usage
Each utility runs independently. Use the commands below to execute them.

### Grade Calculator
1. Run the script:
   ```bash
   node grade-calculator.js
   ```
2. Input the marks (0-100) as prompted.
3. Receive the grade based on the input.

### Speed Detector
1. Run the script:
   ```bash
   node speed-detector.js
   ```
2. Input the speed (km/h) as prompted.
3. Get the result (OK, Points, or License Suspension).

### Net Salary Calculator
1. Run the script:
   ```bash
   node salary-calculator.js
   ```
2. Enter the basic salary and benefits as prompted.
3. View the calculated gross salary, PAYE, NHIF, NSSF, and net salary.

---

## Example Outputs
### Grade Calculator
```bash
Input marks(0-100): 85
The grade for the marks 85 is: A
```

### Speed Detector
```bash
Enter your speed in km/h: 80
Points: 2
```

### Net Salary Calculator
```bash
Enter Basic Salary (Ksh): 50000
Enter Benefits (Ksh): 10000
Gross Salary: Ksh 60000.00
PAYE: Ksh 10883.25
NHIF: Ksh 850.00
NSSF: Ksh 1800.00
Net Salary: Ksh 47266.75
```

---

## Project Structure
```
project-folder/
├── grade-calculator.js   # Script for grade calculation
├── speed-detector.js     # Script for speed detection
├── salary-calculator.js  # Script for salary computation
└── README.md             # Documentation
```

---

## Requirements
- Node.js installed on your system.
- `readline-sync` package for user input.

---

## Contributing
Contributions are welcome! If you'd like to enhance any utility or add a new feature:
1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your feature description"
   ```
4. Push the changes:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a pull request.

---

## License
This project is licensed under the MIT License.
