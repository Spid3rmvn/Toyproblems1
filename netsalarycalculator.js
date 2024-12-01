function calculateNetSalary() {
    // Input basic salary and benefits
    let basicSalary = parseFloat(prompt("Enter your basic salary:"));
    let benefits = parseFloat(prompt("Enter your benefits:"));

    // Validate inputs
    if (isNaN(basicSalary) || isNaN(benefits)) {
        alert("Please enter valid numeric values for salary and benefits.");
        return;
    }

    // Calculate gross salary
    let grossSalary = basicSalary + benefits;

    // Calculate PAYE (Income Tax)
    let tax = calculateTax(grossSalary);

    // Calculate NHIF Deductions
    let nhif = calculateNHIF(grossSalary);

    // Calculate NSSF Deductions
    let nssf = calculateNSSF(basicSalary);

    // Calculate Net Salary
    let netSalary = grossSalary - (tax + nhif + nssf);

    // Output the results
    alert(`Gross Salary: ${grossSalary}\nPAYE Tax: ${tax}\nNHIF: ${nhif}\nNSSF: ${nssf}\nNet Salary: ${netSalary}`);
}

function calculateTax(grossSalary) {
    let tax = 0;

    // Example tax brackets (these should be updated based on the latest rates)
    if (grossSalary <= 24000) {
        tax = grossSalary * 0.10; // 10%
    } else if (grossSalary <= 32333) {
        tax = 2400 + (grossSalary - 24000) * 0.25; // 25%
    } else {
        tax = 2400 + (32333 - 24000) * 0.25 + (grossSalary - 32333) * 0.30; // 30%
    }

    return tax;
}

function calculateNHIF(grossSalary) {
    // Example NHIF deductions (these should be updated based on the latest rates)
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
        return 1200; // For gross salary above 50000
    }
}

function calculateNSSF(basicSalary) {
    // Example NSSF deductions (these should be updated based on the latest rates)
    return basicSalary * 0.06; // 6% of basic salary
}

// Call the function
calculateNetSalary();