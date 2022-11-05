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
    "24/11",
    "Quinta",
    createGame("switzerland", "07:00", "cameroon") +
      createGame("uruguai", "10:00", "korea") +
      createGame("portugal", "13:00", "ghana") +
      createGame("brazil", "16:00", "serbia")
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
    "02/12",
    "Sexta",
    createGame("ghana", "12:00", "uruguai") +
      createGame("korea", "12:00", "portugal") +
      createGame("switzerland", "16:00", "serbia") +
      createGame("brazil", "16:00", "cameroon")
  )
