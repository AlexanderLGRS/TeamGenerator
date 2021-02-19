import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setFavorite, deleteFavorite } from '../actions';
import '../assets/styles/components/CarouselItem.scss';
import removeIcon from '../assets/static/remove-icon.png';
import plusIcon from '../assets/static/plus-icon.png';

const CarouselItem = (props) => {
  const { id, cover, name, country, league, isList, playersNum, playersList } = props
  const handleSetFavorite = () => {
    props.setFavorite({
      id, cover, name, country, league, playersNum, playersList
    })
  }
  const handleDeleteFavorite = (itemId) => {
    props.deleteFavorite(itemId)
  }
  return (
    <div className="carousel-item">
      <img
        className="carousel-item__img"
        src={cover}
        alt={name}
      />
      <div className="carousel-item__details">
        <div>
          {isList
            ? <img className="carousel-item__details--img"
              src={removeIcon}
              alt="Remove Icon"
              onClick={() => handleDeleteFavorite(id)}
            />
            : <img
              className="carousel-item__details--img"
              src={plusIcon}
              alt="Plus Icon"
              onClick={handleSetFavorite}
            />
          }
        </div>
        <p className="carousel-item__details--title">{name}</p>
        <p className="carousel-item__details--subtitle">
          {`${country}`}
        </p>
      </div>
    </div>
  )
}

CarouselItem.propTypes = {
  cover: PropTypes.string,
  name: PropTypes.string,
  country: PropTypes.string,
  league: PropTypes.string,
  playersNum: PropTypes.number
}


const mapDispatchToProps = {
  setFavorite,
  deleteFavorite,
}

export default connect(null, mapDispatchToProps)(CarouselItem)