const form = document.getElementById("calcForm");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const num1 = Number(document.getElementById("num1").value);
    const num2 = Number(document.getElementById("num2").value);

    const sum = num1 + num2;

    document.getElementById("result").textContent =
        "Result: " + sum;
});