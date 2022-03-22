// operacion => FUNCION
function calculate(valor1, valor2, operacion) {
  console.log(valor1); // => 2
  console.log(valor2); // => 7
  console.log(operacion); // => function (valor1, valor2) {
  // return valor1 + valor2;
  //}

  return operacion(valor1 * 2, valor2 * 2);
}

document.body.innerHTML = calculate(2, 7, function (valor1, valor2) {
  return valor1 + valor2;
});
