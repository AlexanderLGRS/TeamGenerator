import { connect } from 'react-redux'
import '../assets/styles/TeamGenerator.scss'
import React, { useState, useEffect } from 'react';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import PlayerItem from '../components/PlayersItem'
import Register from '../components/Register'
import Players from '../components/Players';

const TeamGenerator = ({ myList, players }) => {
    return (
        <>
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
            <div className="Allocator">
                <Register />
                <Players>
                    {players.map(item =>
                        <PlayerItem
                            key={item.id}
                            {...item}
                            isList
                        />
                    )}
                </Players>
            </div>
        </>
    )
}
const mapStateToProps = state => {
    return {
        myList: state.myList,
        players: state.players,
    }
}
export default connect(mapStateToProps, null)(TeamGenerator)