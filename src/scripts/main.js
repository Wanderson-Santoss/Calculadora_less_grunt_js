let display = document.getElementById('display');
let operation = '';

function handleButtonClick(event) {
    let button = event.target;
    let value = button.dataset.value;

    if (value === '=') {
        try {
            let result = eval(operation);
            display.textContent = result;
            operation = result.toString();
        } catch (error) {
            display.textContent = 'Error';
            operation = '';
        }
    } else if (value === 'C') {
        display.textContent = '';
        operation = '';
    } else if (value === '√') {
        try {
            let result = Math.sqrt(parseFloat(operation));
            display.textContent = result;
            operation = result.toString();
        } catch (error) {
            display.textContent = 'Error';
            operation = '';
        }
    } else if (value === 'sin') {
        try {
            let result = Math.sin(parseFloat(operation));
            display.textContent = result;
            operation = result.toString();
        } catch (error) {
            display.textContent = 'Error';
            operation = '';
        }
    } else if (value === 'cos') {
        try {
            let result = Math.cos(parseFloat(operation));
            display.textContent = result;
            operation = result.toString();
        } catch (error) {
            display.textContent = 'Error';
            operation = '';
        }
    } else {
        operation += value;
        display.textContent += value;
    }
}