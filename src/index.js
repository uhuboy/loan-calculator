// This file serves as the entry point for the loan calculator application.
// It initializes the application and may handle user input or command-line arguments.

const { parseArgs } = require('node:util');
const { LoanCalculator } = require('./loanCalculator');

const parsed = parseArgs({
    args: process.argv.slice(2),
    options: {
        principal: { type: 'string' },
        interestRate: { type: 'string' },
        loanTerm: { type: 'string' }
    }
});

const args = parsed.values;

const principal = parseFloat(args.principal);
const interestRate = parseFloat(args.interestRate);
const loanTerm = parseInt(args.loanTerm, 10);

if (isNaN(principal) || isNaN(interestRate) || isNaN(loanTerm)) {
    console.error('Please provide valid numeric values for principal, interest rate, and loan term.');
    process.exit(1);
}

const loanCalculator = new LoanCalculator(principal, interestRate, loanTerm);

const monthlyPayment = loanCalculator.calculateMonthlyPayment();
const totalPayment = loanCalculator.calculateTotalPayment();
const totalInterest = loanCalculator.calculateTotalInterest();

console.log(`Monthly Payment: ${monthlyPayment.toFixed(2)}`);
console.log(`Total Payment: ${totalPayment.toFixed(2)}`);
console.log(`Total Interest: ${totalInterest.toFixed(2)}`);