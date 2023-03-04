let buttonCalc = elId("calc");

buttonCalc.addEventListener('click', function (e) {

  let currentStamina = elId("staminaAtual").value,
    desiredStamina = elId("staminaDesejada").value,
    aswer = elId("aswer"),
    curretStaminaNumber = Number(currentStamina),
    desiredStaminaNumber = Number(desiredStamina);

  calc(curretStaminaNumber, desiredStaminaNumber, aswer)
})

function calc(number1, number2, aswer) {

  let hourMultiplier = 0

  for (let i = number1; i < number2; i++) {
    i < 39 ? hourMultiplier += 3 : hourMultiplier += 6
  }

  aswer.textContent = `to reach this stamina you need to stay offline ${hourMultiplier} hours`
}

function elId(el) {
  return document.getElementById(el);
}