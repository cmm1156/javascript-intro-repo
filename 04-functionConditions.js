
function machine(number) {
  if (number == 1 || number == 2 || number == 3) {
    return "Batman";
  }
  else if (number == 4 || number == 5 || number == 6) {
    return "Superman";
  }
  else if (number == 7 || number == 8 || number == 9) {
    return "Wonder Woman";
  }
  else {
    return "Lex Luthor";
  }
}

console.log(machine(1))
console.log(machine(4))
console.log(machine(8))
console.log(machine(10))
