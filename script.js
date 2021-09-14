function Converter() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmCelsiusNumero = parseFloat(valor);

  var valorEmFahrenheit = valorEmCelsiusNumero * 1.8 + 32;
  console.log(valorEmFahrenheit);

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "A temperatura em Fahrenheit é " + valorEmFahrenheit;
  elementoValorConvertido.innerHTML = valorConvertido;
}

function Resultado() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmCelsiusNumero = parseFloat(valor);

  var valorEmKelvin = valorEmCelsiusNumero + 273.15;
  console.log(valorEmKelvin);

  var elementoValorResultado = document.getElementById("valorResultado");
  var valorResultado = "A temperatura em Kelvin é " + valorEmKelvin;
  elementoValorResultado.innerHTML = valorResultado;
}
