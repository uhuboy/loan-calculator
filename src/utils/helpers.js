function validateInput(value) {
    if (isNaN(value) || value <= 0) {
        throw new Error("Invalid input: must be a positive number.");
    }
    return parseFloat(value);
}

function formatCurrency(amount) {
    return `$${amount.toFixed(2)}`;
}

export { validateInput, formatCurrency };