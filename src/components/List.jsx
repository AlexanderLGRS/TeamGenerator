import React from 'react';
import { connect } from 'react-redux'
import '../assets/styles/components/List.scss';

const List = ({ myList, players, children }) => {
  const myTeams = myList.length
  return (
    <>
      < section className="List">
        <div className="List__container" id="List__container">
          {myTeams>1
          ?<h1 className="List__container--myTeams">Estos son tus {myTeams} equipos</h1>
          :<h1 className="List__container--myTeams">Este es tu equipo</h1>
          }
          {children}
        </div>
      </section>
    </>
  )
};
const mapStateToProps = state => {
  return {
      myList: state.myList,
      players: state.players,
  }
}
export default connect(mapStateToProps, null)(List)