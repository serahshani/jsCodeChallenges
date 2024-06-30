function calculateNetSalary(basicSalary, benefits) {
    //tax rates and deductions
    const TAX_RATE = 0.30;  // 30% tax rate
    const NHIF_RATE = 0.017;  // 1.7% NHIF rate
    const NSSF_RATE_EMPLOYEE = 0.06;  // 6% NSSF rate for employee
    const NSSF_RATE_EMPLOYER = 0.06;  // 6% NSSF rate for employer

    // Calculate gross salary
    let grossSalary = basicSalary + benefits;

    // Calculate deductions
    let taxDeduction = grossSalary * TAX_RATE;
    let nhifDeduction = grossSalary * NHIF_RATE;
    let nssfDeductionEmployee = grossSalary * NSSF_RATE_EMPLOYEE;
    let nssfDeductionEmployer = grossSalary * NSSF_RATE_EMPLOYER;

    // Calculate net salary
    let netSalary = grossSalary - taxDeduction - nhifDeduction - nssfDeductionEmployee;

    // Print the breakdown
    console.log(`Basic Salary: ${basicSalary}`);
    console.log(`Benefits: ${benefits}`);
    console.log(`Gross Salary: ${grossSalary}`);
    console.log(`Tax (PAYE): ${taxDeduction}`);
    console.log(`NHIF Deduction: ${nhifDeduction}`);
    console.log(`NSSF Deduction (Employee): ${nssfDeductionEmployee}`);
    console.log(`NSSF Contribution (Employer): ${nssfDeductionEmployer}`);
    console.log(`Net Salary: ${netSalary}`);
}

// basic salary and benefits assigned a value
let basicSalary = 70000;
let benefits = 6000;

calculateNetSalary(basicSalary, benefits);
