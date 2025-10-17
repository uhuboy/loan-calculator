# Loan Calculator

This project is a simple loan calculator application built with JavaScript. It allows users to calculate loan parameters such as monthly payments, total interest, and total payment based on the principal amount, interest rate, and loan term.

## Project Structure

```
loan-calculator
├── src
│   ├── index.js          # Entry point for the application
│   ├── loanCalculator.js  # Contains the LoanCalculator class for calculations
│   ├── cli.js            # Handles command-line interface interactions
│   └── utils
│       └── helpers.js    # Utility functions for calculations and formatting
├── test
│   └── loanCalculator.test.js  # Unit tests for the LoanCalculator class
├── package.json          # npm configuration file
├── .gitignore            # Files and directories to be ignored by Git
└── README.md             # Documentation for the project
```

## Installation

To install the necessary dependencies, run the following command:

```
npm install
```

## Usage

To run the loan calculator application, use the following command:

```
node index.js --principal=100000 --interestRate=5 --loanTerm=360
```

You can also use the command-line interface to input your loan parameters and receive the calculated results.

## Testing

To run the unit tests for the LoanCalculator class, use the following command:

```
npm test
```

## Contributing

If you would like to contribute to this project, please fork the repository and submit a pull request with your changes.

## License

This project is licensed under the MIT License.