class LoanCalculator {
    constructor(principal, annualInterestRate, years) {
        this.principal = principal;
        this.annualInterestRate = annualInterestRate;
        this.years = years;
    }

    calculateMonthlyPayment() {
        const monthlyInterestRate = this.annualInterestRate / 100 / 12;
        const numberOfPayments = this.years * 12;
        const monthlyPayment = (this.principal * monthlyInterestRate) / 
            (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));
        return monthlyPayment;
    }

    calculateTotalPayment() {
        const monthlyPayment = this.calculateMonthlyPayment();
        return monthlyPayment * this.years * 12;
    }

    calculateTotalInterest() {
        const totalPayment = this.calculateTotalPayment();
        return totalPayment - this.principal;
    }
}

module.exports = { LoanCalculator };