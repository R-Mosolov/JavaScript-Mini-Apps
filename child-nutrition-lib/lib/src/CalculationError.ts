class CalculationError extends Error {
    constructor (message: string) {
        if(message) {
            super(message);
        } else {
            super("Calculation error");
        }

    }

}
