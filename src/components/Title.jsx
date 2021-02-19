import React from 'react';
import '../assets/styles/components/Title.scss';
import ElegirIcon from '../assets/static/eligeIcon.png';

const Title =()=> {
  return (
    <header className="Title">
        <img className="Title__img" src={ElegirIcon} alt="Elegir" />
    </header>
  );
}
export default Title