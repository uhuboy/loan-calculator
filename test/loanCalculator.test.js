// This file contains unit tests for the LoanCalculator class.
// It tests various scenarios to ensure that the calculations are accurate and that the methods behave as expected.

const LoanCalculator = require('../src/loanCalculator');

describe('LoanCalculator', () => {
    let calculator;

    beforeEach(() => {
        calculator = new LoanCalculator();
    });

    test('calculates monthly payment correctly', () => {
        const principal = 10000;
        const annualInterestRate = 5;
        const years = 2;
        const expectedMonthlyPayment = 549.86; // Expected value based on the formula

        const monthlyPayment = calculator.calculateMonthlyPayment(principal, annualInterestRate, years);
        expect(monthlyPayment).toBeCloseTo(expectedMonthlyPayment, 2);
    });

    test('calculates total payment correctly', () => {
        const principal = 10000;
        const annualInterestRate = 5;
        const years = 2;
        const expectedTotalPayment = 13196.64; // Expected value based on the formula

        const totalPayment = calculator.calculateTotalPayment(principal, annualInterestRate, years);
        expect(totalPayment).toBeCloseTo(expectedTotalPayment, 2);
    });

    test('calculates total interest correctly', () => {
        const principal = 10000;
        const annualInterestRate = 5;
        const years = 2;
        const expectedTotalInterest = 3196.64; // Expected value based on the formula

        const totalInterest = calculator.calculateTotalInterest(principal, annualInterestRate, years);
        expect(totalInterest).toBeCloseTo(expectedTotalInterest, 2);
    });

    test('throws error for negative principal', () => {
        expect(() => {
            calculator.calculateMonthlyPayment(-10000, 5, 2);
        }).toThrow('Principal must be a positive number');
    });

    test('throws error for invalid interest rate', () => {
        expect(() => {
            calculator.calculateMonthlyPayment(10000, -5, 2);
        }).toThrow('Interest rate must be a positive number');
    });

    test('throws error for invalid loan term', () => {
        expect(() => {
            calculator.calculateMonthlyPayment(10000, 5, -2);
        }).toThrow('Loan term must be a positive number');
    });
});