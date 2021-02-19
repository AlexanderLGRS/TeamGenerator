import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setFavorite, deletePlayer } from '../actions';
import '../assets/styles/components/PlayersItem.scss';
import removeIcon from '../assets/static/remove-icon.png';


const PlayersItem = (props) => {
  const { id, name } = props
  const handleDeletePlayer = (itemId) => {
    props.deletePlayer(itemId)
  }
  return (
    <div className="PlayersItem">
      <div className="PlayersItem__details">
        <p className="PlayersItem__details--title">
          <img className="PlayersItem__details--img"
            src={removeIcon}
            alt="Remove Icon"
            onClick={() => handleDeletePlayer(id)}
          />
          {name}
        </p>
      </div>
    </div>
  )
}

PlayersItem.propTypes = {
  name: PropTypes.string,
}


const mapDispatchToProps = {
  setFavorite,
  deletePlayer,
}

export default connect(null, mapDispatchToProps)(PlayersItem)