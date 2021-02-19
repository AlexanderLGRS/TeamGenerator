import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import '../assets/styles/components/Players.scss';
import { assignPlayer } from '../actions';

const Players = ({ myList, players, children }) => {
  const playersArray = players
  const myTeams = myList.length
  const myPlayers = players.length
  const playersForTeam = myPlayers / myTeams

  function assigningPlayers() {
    for (let i = 0; i < playersArray.length; i++) {
      const formulaRandom = Math.floor(Math.random() * Math.floor(myTeams))
      let randomNumber = formulaRandom
      const playersNum = myList[randomNumber].playersList.length
      console.log(randomNumber + " " + playersArray[i].name);
      if (playersNum < playersForTeam + 1) {
        myList[randomNumber].playersList.push(playersArray[i].name)
      }
      else {
        i--
      }
    }
  }
  return (
    <section className="Players">
      <div className="Players__container" id="Players__container">
        {playersForTeam == 0
          ? null
          : <Link to="/teamsreadys">
            <button className="Players__container--button" onClick={assigningPlayers}>Generar Equipos </button>
          </Link>
        }
        {myPlayers > 0
          ? myPlayers > 1
            ? <h1 className="Players__container--myPlayers">Se registraron {myPlayers} jugadores</h1>
            : <h1 className="Players__container--myPlayers">Se registró {myPlayers} jugador</h1>
          : <h1 className="Players__container--myPlayers">Registra tus jugadores</h1>
        }
        {myPlayers % myTeams == 0
          ? playersForTeam != 1
            ? playersForTeam == 0
              ? null
              : <h1 className="Players__container--myPlayers">{playersForTeam} jugadores por equipo</h1>
            : <h1 className="Players__container--myPlayers">{playersForTeam} jugador por equipo</h1>
          : <h1 className="Players__container--myPlayers">Faltan jugadores</h1>
        }
        {children}
      </div>
    </section>
  )
};
const mapDispatchToProps = {
  assignPlayer,
}
const mapStateToProps = state => {
  return {
    myList: state.myList,
    players: state.players,
    playersList: state.myList[0].playersList,
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Players)