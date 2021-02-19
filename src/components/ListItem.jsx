import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setFavorite, deletePlayer } from '../actions';
import '../assets/styles/components/ListItem.scss';

const ListItem = (props) => {
  const { id, cover, name, country, league, isList, playersNum, playersList } = props
  const numPlayers = playersList.length - 1
  return (
    <div className="ListItem">
      <div className="ListItem__details">
        <p className="ListItem__details--title">{name}</p>
        <p className="ListItem__details--subtitle">{numPlayers}</p>
        {numPlayers > 0
          ? <p className="ListItem__details--subtitle">{playersList}</p>
          : <p className="ListItem__details--subtitle">Esperando jugadores</p>
        }
      </div>
    </div>
  )
}

ListItem.propTypes = {
  name: PropTypes.string,
  playersNum: PropTypes.number,
  playersList: PropTypes.array,
}


const mapDispatchToProps = {
  setFavorite,
  deletePlayer,
}

export default connect(null, mapDispatchToProps)(ListItem)