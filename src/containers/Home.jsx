import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import '../assets/styles/Home.scss';
import Title from '../components/Title';
import ReadyIcon from '../assets/static/readyIcon.png'


const Home = ({ myList, LaLigaSantander, Bundesliga, PremierLeague }) => {
  return (
    <>
      <Title />
      {myList.length > 0 ?
        <div className="ready__Container">
          <Link to="/teamgenerator">
            <img src={ReadyIcon} alt="Ready" />
          </Link>
        </div>
        : null
      }
      {myList.length > 0 &&
        <Categories title="Mis equipos">
          <Carousel>
            {myList.map(item =>
              <CarouselItem
                key={item.id}
                {...item}
                isList
              />
            )}
          </Carousel>
        </Categories>
      }
      <Categories title="LaLiga Santander">
        <Carousel>
          {LaLigaSantander.map(item =>
            <CarouselItem key={item.id} {...item} />
          )}
        </Carousel>
      </Categories>
      <Categories title="Bundesliga">
        <Carousel>
          {Bundesliga.map(item =>
            <CarouselItem key={item.id} {...item} />
          )}
        </Carousel>
      </Categories>
      <Categories title="Premier League">
        <Carousel>
          {PremierLeague.map(item =>
            <CarouselItem key={item.id} {...item} />
          )}
        </Carousel>
      </Categories>
    </>
  );
}

const mapStateToProps = state => {
  return {
    myList: state.myList,
    LaLigaSantander: state.LaLigaSantander,
    Bundesliga: state.Bundesliga,
    PremierLeague: state.PremierLeague,
    players: state.players,
  }
}

export default connect(mapStateToProps, null)(Home)