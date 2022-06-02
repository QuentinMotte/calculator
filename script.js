//
//Array qui va nous permettre d'injecter les boutons de calc
let buttonCalcArray = [
    "(",
    ")",
    "%",
    "C",
    7,
    8,
    9,
    "/",
    4,
    5,
    6,
    "*",
    1,
    2,
    3,
    "-",
    0,
    ".",
    "=",
    "+",
];
const main = document.querySelector("main"); // -> Ecran
let calculator = document.createElement("section");

const result = document.createElement("h2");
result.classList = "screen";
let app = document.createElement("div"); // -> Body
app.classList = "app";
//Affectation au main
//
main.appendChild(calculator, main);
calculator.appendChild(app, calculator);
app.appendChild(result, app);

//
// Logique des boutons
for (let i = 0; i < buttonCalcArray.length; i++) {
    let btnCalc = document.createElement("button");
    let createBtn = document.createTextNode(buttonCalcArray[i]);
    app.appendChild(btnCalc);
    btnCalc.appendChild(createBtn);
}
// -> Permet d'attribuer une class a chaque boutons et d'injecter les valeurs dans le h2
let buttons = document.querySelectorAll("button");
buttons.forEach((btn) => {
    btn.setAttribute("id", btn.innerText);
    btn.classList.add("btn");
    if (btn.id !== "=") {
        btn.addEventListener("click", (e) => {
            result.textContent += e.target.id;

            if (result.textContent.length > 18) {
                alert("Impossible d'afficher plus de chiffres");
            }
        });
    }
});

let resetBtn = document.getElementById("C"); // -> ID reset
resetBtn.classList.add("reset");
let equalBtn = document.getElementById("=");
equalBtn.setAttribute("id", "equal");
equalBtn.addEventListener("click", () => {
    result.textContent = eval(result.textContent);
    if (result.textContent.length > 18) {
        alert("err");
    }
});
resetBtn.addEventListener("click", () => {
    result.textContent = " ";
});
// -> Attribuer les boutons de la calculette au touches du clavier
document.body.addEventListener("keypress", () => {
    if (event.key !== "=" && event.key !== "Enter")
        result.textContent += event.key;
});
document.body.addEventListener("keypress", () => {
    if (event.key == "=" || event.key == "Enter") {
        result.textContent = eval(result.textContent);
    }
});
document.body.addEventListener("keypress", () => {
    if (event.key == "c") {
        result.textContent = " ";
    }
});
