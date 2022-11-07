function createGame(player1, hour, player2) {
  return `
  <li>
              <img
                src="./assets/icon-${player1}.svg"
                alt="Bandeira da ${player1}"
              />
              <strong>${hour}</strong>
              <img
                src="./assets/icon-${player2}.svg"
                alt="Bandeira de ${player2}"
              />
            </li>  
  `
}

let delay = -0.4
function createCard(date, day, games) {
  delay = delay + 0.4
  return `
  <div class="card" style="animation-delay: ${delay}s">
          <h2>${date} <span>${day}</span></h2>
          <ul>
            ${games}
          </ul>
        </div>    
  `
}

document.querySelector("#cards").innerHTML =
  createCard("20/11", "Domingo", createGame("qatar", "13:00", "ecuador")) +
  createCard(
    "21/11",
    "Segunda",
    createGame("england", "10:00", "iran") +
      createGame("senegal", "13:00", "netherlands") +
      createGame("eua", "16:00", "wales")
  ) +
  createCard(
    "22/11",
    "Terça",
    createGame("argentina", "07:00", "saudi") +
      createGame("denmark", "10:00", "tunisia") +
      createGame("mexico", "13:00", "poland") +
      createGame("france", "16:00", "australia")
  ) +
  createCard(
    "23/11",
    "Quarta",
    createGame("morroco", "07:00", "croatia") +
      createGame("germany", "10:00", "japan") +
      createGame("spain", "13:00", "costa") +
      createGame("belgium", "16:00", "canada")
  ) +
  createCard(
    "24/11",
    "Quinta",
    createGame("switzerland", "07:00", "cameroon") +
      createGame("uruguai", "10:00", "korea") +
      createGame("portugal", "13:00", "ghana") +
      createGame("brazil", "16:00", "serbia")
  ) +
  createCard(
    "25/11",
    "Sexta",
    createGame("wales", "07:00", "iran") +
      createGame("qatar", "10:00", "senegal") +
      createGame("netherlands", "13:00", "ecuador") +
      createGame("england", "16:00", "eua")
  ) +
  createCard(
    "26/11",
    "Sabado",
    createGame("tunisia", "07:00", "australia") +
      createGame("poland", "10:00", "saudi") +
      createGame("france", "13:00", "denmark") +
      createGame("argentina", "16:00", "mexico")
  ) +
  createCard(
    "27/11",
    "Domingo",
    createGame("japan", "07:00", "costa") +
      createGame("belgium", "10:00", "morroco") +
      createGame("croatia", "13:00", "canada") +
      createGame("spain", "16:00", "germany")
  ) +
  createCard(
    "28/11",
    "Segunda",
    createGame("serbia", "07:00", "cameroon") +
      createGame("ghana", "10:00", "korea") +
      createGame("switzerland", "13:00", "brazil") +
      createGame("portugal", "16:00", "uruguai")
  ) +
  createCard(
    "29/11",
    "Terça",
    createGame("ecuador", "12:00", "senegal") +
      createGame("netherlands", "12:00", "qatar") +
      createGame("iran", "16:00", "eua") +
      createGame("wales", "16:00", "england")
  ) +
  createCard(
    "30/11",
    "Quarta",
    createGame("tunisia", "12:00", "france") +
      createGame("australia", "12:00", "denmark") +
      createGame("poland", "16:00", "argentina") +
      createGame("saudi", "16:00", "mexico")
  ) +
  createCard(
    "01/12",
    "Quinta",
    createGame("croatia", "12:00", "belgium") +
      createGame("canada", "12:00", "morroco") +
      createGame("japan", "16:00", "spain") +
      createGame("costa", "16:00", "germany")
  ) +
  createCard(
    "02/12",
    "Sexta",
    createGame("ghana", "12:00", "uruguai") +
      createGame("korea", "12:00", "portugal") +
      createGame("switzerland", "16:00", "serbia") +
      createGame("brazil", "16:00", "cameroon")
  )

  btnThemeYellow = document.querySelector(".btn-theme-yellow")
  btnThemeBlue = document.querySelector(".btn-theme-blue")
  btnThemeGreen = document.querySelector(".btn-theme-green")
  btnThemeAzul = document.querySelector(".btn-theme-azul")
  btnThemeBola = document.querySelector(".btn-theme-bola")
  btnThemeCopa = document.querySelector(".btn-theme-copa")

  btnThemeYellow.addEventListener("click", () => {
    document.body.className = "yellow"
  })

  btnThemeBlue.addEventListener("click", () => {
    document.body.className = "blue"
  })

  btnThemeGreen.addEventListener("click", () => {
    document.body.className = "green"
  })

  btnThemeAzul.addEventListener("click", () => {
    document.body.className = "azul"
  })

  btnThemeBola.addEventListener("click", () => {
    document.body.className = "bola"
  })

  btnThemeCopa.addEventListener("click", () => {
    document.body.className = "copa"
  })

