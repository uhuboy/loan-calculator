const LoanCalculator = require('./loanCalculator');

const main = () => {
    const args = process.argv.slice(2);

    if (args.length < 3) {
        console.log('Usage: node cli.js <principal> <annualInterestRate> <loanTermInYears>');
        process.exit(1);
    }

    const principal = parseFloat(args[0]);
    const annualInterestRate = parseFloat(args[1]);
    const loanTermInYears = parseInt(args[2], 10);

    if (isNaN(principal) || isNaN(annualInterestRate) || isNaN(loanTermInYears)) {
        console.log('Please provide valid numbers for principal, annual interest rate, and loan term.');
        process.exit(1);
    }

    const loanCalculator = new LoanCalculator(principal, annualInterestRate, loanTermInYears);
    const monthlyPayment = loanCalculator.calculateMonthlyPayment();
    const totalPayment = loanCalculator.calculateTotalPayment();
    const totalInterest = loanCalculator.calculateTotalInterest();

    console.log(`Monthly Payment: ${monthlyPayment.toFixed(2)}`);
    console.log(`Total Payment: ${totalPayment.toFixed(2)}`);
    console.log(`Total Interest: ${totalInterest.toFixed(2)}`);
};

main();