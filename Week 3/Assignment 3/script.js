const form = document.getElementById("calcForm");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const num1 = Number(document.getElementById("num1").value);
    const num2 = Number(document.getElementById("num2").value);

    const operation = document.getElementById("operation");
    const selectedOperation = operation.value;

    if (selectedOperation === "add") {
        let result = num1 + num2
        document.getElementById("result").textContent = "Result: " + result;

    } else if (selectedOperation === "substract") {
        let result = num1 - num2
        document.getElementById("result").textContent = "Result: " + result;

    } else if (selectedOperation === "multiply") {
        let result = num1 * num2
        document.getElementById("result").textContent = "Result: " + result;

    } else if (selectedOperation === "divide") {
        let result = num1 / num2
        document.getElementById("result").textContent = "Result: " + result;

    } else {
        document.getElementById("result").textContent = "Result: Error";
    }
});