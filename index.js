function calcular() {
  const staminaAtual = document.getElementById("staminaAtual").value;
  const staminaDesejada = document.getElementById("staminaDesejada").value;
  const horas = (staminaDesejada - staminaAtual) * 5 / 60;
  const resultado = `Sua stamina atingirá ${staminaDesejada} em ${horas.toFixed(1)} horas.`;
  document.getElementById("resultado").innerHTML = resultado;
}