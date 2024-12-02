document.querySelector('form').onsubmit = function(e) {
  e.preventDefault(); // Impedir a página de recarregar


  const altura = parseFloat(document.getElementById('altura').value) / 100;
  const peso = parseFloat(document.getElementById('peso').value);
  const imc = (peso / (altura ** 2)).toFixed(2);


  const classificacao = 
    imc < 18.5 ? 'Abaixo do peso' :
    imc < 24.9 ? 'Peso normal' :
    imc < 29.9 ? 'Sobrepeso' : 'Obesidade';


  document.getElementById('resultado').textContent = `Seu IMC é ${imc} (${classificacao})`;

};
