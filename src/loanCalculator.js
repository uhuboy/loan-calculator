class LoanCalculator {
    constructor(principal, annualInterestRate, years) {
        this.principal = principal;
        this.annualInterestRate = annualInterestRate;
        this.years = years;
    }

    calculateMonthlyPayment() {
        const monthlyInterestRate = this.annualInterestRate / 100 / 12;
        const numberOfPayments = this.years * 12;
        if (monthlyInterestRate === 0) {
            return this.principal / numberOfPayments;
        }
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

    // เพิ่มเมธอดเพื่อสร้างตารางผ่อนชำระเป็นงวด
    generateAmortizationSchedule() {
        const monthlyInterestRate = this.annualInterestRate / 100 / 12;
        const numberOfPayments = this.years * 12;
        const monthlyPayment = this.calculateMonthlyPayment();
        let balance = this.principal;
        const schedule = [];

        for (let month = 1; month <= numberOfPayments; month++) {
            let interestPaid = monthlyInterestRate === 0 ? 0 : balance * monthlyInterestRate;
            let principalPaid = monthlyPayment - interestPaid;

            // ปรับงวดสุดท้ายเพื่อหลีกเลี่ยงเศษลบจากการปัดเศษ
            if (month === numberOfPayments) {
                principalPaid = balance;
            }

            const payment = principalPaid + interestPaid;
            balance = Math.max(0, balance - principalPaid);

            schedule.push({
                month,
                payment: Number(payment.toFixed(2)),
                principalPaid: Number(principalPaid.toFixed(2)),
                interestPaid: Number(interestPaid.toFixed(2)),
                balance: Number(balance.toFixed(2))
            });
        }

        return schedule;
    }
}

module.exports = { LoanCalculator };