const input1 = document.getElementById("number1");
const input2 = document.getElementById("number2");
const resultDiv = document.getElementById("result");
const errorDiv = document.getElementById("error");
const form = document.getElementById("calc-form");

let lastOperation = null;

function getValues() {
  const value1 = input1.value;
  const value2 = input2.value;

  if (value1 === "" || value2 === "") {
    throw new Error("Les deux champs doivent être remplis.");
  }

  const num1 = Number(value1);
  const num2 = Number(value2);

  if (Number.isNaN(num1) || Number.isNaN(num2)) {
    throw new Error("Les valeurs doivent être des nombres.");
  }

  return { num1, num2 };
}

function calculate(operation) {
  try {
    errorDiv.textContent = "";
    const { num1, num2 } = getValues();

    let result;

    switch (operation) {
      case "add":
        result = num1 + num2;
        break;
      case "sub":
        result = num1 - num2;
        break;
      case "mul":
        result = num1 * num2;
        break;
      case "div":
        if (num2 === 0) {
          throw new Error("Division par zéro interdite.");
        }
        result = num1 / num2;
        break;
      default:
        throw new Error("Opération inconnue.");
    }

    lastOperation = operation;
    resultDiv.textContent = "Résultat : " + result;
  } catch (e) {
    resultDiv.textContent = "Résultat : --";
    errorDiv.textContent = e.message;
  }
}

const buttons = document.querySelectorAll(".buttons button");
buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const op = btn.getAttribute("data-op");
    calculate(op);
  });
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!lastOperation) {
    errorDiv.textContent = "Clique d'abord sur un opérateur (+, -, ×, /).";
    return;
  }
  calculate(lastOperation);
});
