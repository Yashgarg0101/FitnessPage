function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100; // Convert height to meters
    const bmi = weight / (height * height);
    const resultElement = document.getElementById('result');
    let message = '';

    if (isNaN(bmi)) {
        message = 'Please enter valid values.';
    } else {
        if (bmi < 18.5) {
            message = `Your BMI: ${bmi.toFixed(2)} (Underweight)`;
        } else if (bmi >= 18.5 && bmi < 24.9) {
            message = `Your BMI: ${bmi.toFixed(2)} (Normal Weight)`;
        } else if (bmi >= 25 && bmi < 29.9) {
            message = `Your BMI: ${bmi.toFixed(2)} (Overweight)`;
        } else {
            message = `Your BMI: ${bmi.toFixed(2)} (Obese)`;
        }
    }

    resultElement.textContent = message;
}





