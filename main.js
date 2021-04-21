let nbr1 = prompt("Donnez un chiffre")
let operator = prompt("Donnez un opérateur +-/*")
let nbr2 = prompt("Donner un autre chiffre")

let nbr1 = +prompt('rentrez un nombre');
let operator = prompt('rentrez un operateur');
let nbr2 = +prompt('rentrez un secnd nombre');

switch (operator) {
    case "*":
        alert(nbr1 * nbr2);
        break;
    case "+":
        alert(nbr1 + nbr2);
        break;
    case "/":
        alert(nbr1 / nbr2);
        break;
    case "-":
        alert(nbr1 - nbr2);
        break;
    default:
        alert("vous n'avez pas rentré d'operateur");
        break;
}   