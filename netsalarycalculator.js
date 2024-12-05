const readlineSync = require("readline-sync");

// Function to calculate PAYE
function calculatePAYE(monthlySalary) {
  if (monthlySalary <= 24000) {
    return monthlySalary * 0.1;
  } else if (monthlySalary <= 32333) {
    return 2400 + (monthlySalary - 24000) * 0.25;
  }
  return 2400 + 2083.25 + (monthlySalary - 32333) * 0.3;
}

// Function to calculate NHIF
function calculateNHIF(monthlySalary) {
  if (monthlySalary <= 6000) return 150;
  if (monthlySalary <= 8000) return 300;
  if (monthlySalary <= 12000) return 400;
  if (monthlySalary <= 15000) return 500;
  if (monthlySalary <= 20000) return 600;
  if (monthlySalary <= 24000) return 750;
  return 850; // Default for salaries above 24000
}

// Function to calculate NSSF
function calculateNSSF(monthlySalary) {
  const tierILimit = 7000;
  const tierIILimit = 35000;
  const tierIContribution = 0.06 * Math.min(monthlySalary, tierILimit);
  const tierIIContribution =
    0.06 *
    Math.max(
      0,
      Math.min(monthlySalary - tierILimit, tierIILimit - tierILimit)
    );
  return tierIContribution + tierIIContribution;
}

// Function to calculate net salary
function calculateNetSalary(basicSalary, benefits) {
  const grossSalary = basicSalary + benefits;
  const payee = calculatePAYE(grossSalary);
  const nhif = calculateNHIF(grossSalary);
  const nssf = calculateNSSF(grossSalary);
  const netSalary = grossSalary - (payee + nhif + nssf);

  return {
    grossSalary: grossSalary.toFixed(2),
    payee: payee.toFixed(2),
    nhif: nhif.toFixed(2),
    nssf: nssf.toFixed(2),
    netSalary: netSalary.toFixed(2),
  };
}

// Main function to get user input and calculate salary
function basicSalary() {
  let basicSalary, benefits;

  // Input for Basic Salary
  while (true) {
    basicSalary = readlineSync.question("Enter Basic Salary (Ksh): ");
    basicSalary = Number(basicSalary);
    if (!isNaN(basicSalary) && basicSalary >= 0) {
      break;
    }
    console.log("Please enter a valid positive number for Basic Salary.");
  }

  // Input for Benefits
  while (true) {
    benefits = readlineSync.question("Enter Benefits (Ksh): ");
    benefits = Number(benefits);
    if (!isNaN(benefits) && benefits >= 0) {
      break;
    }
    console.log("Please enter a valid positive number for Benefits.");
  }

  // Calculate and display results
  const salaryDetails = calculateNetSalary(basicSalary, benefits);
  console.log(`Gross Salary: Ksh ${salaryDetails.grossSalary}`);
  console.log(`PAYE: Ksh ${salaryDetails.payee}`);
  console.log(`NHIF: Ksh ${salaryDetails.nhif}`);
  console.log(`NSSF: Ksh ${salaryDetails.nssf}`);
  console.log(`Net Salary: Ksh ${salaryDetails.netSalary}`);
}

// Run the application
basicSalary();
