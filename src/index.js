import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, compose } from 'redux'
import reducer from './reducers'
import App from './rotues/App';

const initialState = {
    "players": [],
    "myList": [
        {
            "id": 0,
            "name": "FC Barcelona",
            "country": "España",
            "cover": "https://as01.epimg.net/img/comunes/fotos/fichas/equipos/large/3.png",
            "league": "LaLiga Santander",
            "playersList": [" "]
        }
    ],
    "LaLigaSantander": [
        {
            "id": 1,
            "name": "FC Barcelona",
            "country": "España",
            "cover": "https://as01.epimg.net/img/comunes/fotos/fichas/equipos/large/3.png",
            "league": "LaLiga Santander",
            "playersList": [" "]
        },
        {
            "id": 2,
            "name": "Atletico Madrid",
            "country": "España",
            "cover": "https://as01.epimg.net/img/comunes/fotos/fichas/equipos/large/42.png",
            "league": "LaLiga Santander",
            "playersList": [" "]
        },
        {
            "id": 3,
            "name": "Real Madrid",
            "country": "España",
            "cover": "https://as01.epimg.net/img/comunes/fotos/fichas/equipos/large/1.png",
            "league": "LaLiga Santander",
            "playersList": [" "]
        },
        {
            "id": 4,
            "name": "Sevilla Futbol Club",
            "country": "España",
            "cover": "https://as01.epimg.net/img/comunes/fotos/fichas/equipos/large/53.png",
            "league": "LaLiga Santander",
            "playersList": [" "]
        },

    ],
    "Bundesliga": [
        {
            "id": 5,
            "name": "Borussia Dortmund",
            "country": "Alemania",
            "cover": "https://as01.epimg.net/img/comunes/fotos/fichas/equipos/large/87.png",
            "league": "Bundesliga",
            "playersList": [" "]
        },
        {
            "id": 6,
            "name": "FC Bayern Munich",
            "country": "Alemania",
            "cover": "https://as01.epimg.net/img/comunes/fotos/fichas/equipos/large/170.png",
            "league": "Bundesliga",
            "playersList": [" "]
        },
        {
            "id": 7,
            "name": "Borussia Monchengladbach",
            "country": "Alemania",
            "cover": "https://as01.epimg.net/img/comunes/fotos/fichas/equipos/large/536.png",
            "league": "Bundesliga",
            "playersList": [" "]
        },
        {
            "id": 8,
            "name": "Rassenballsport Leipzig",
            "country": "Alemania",
            "cover": "https://as01.epimg.net/img/comunes/fotos/fichas/equipos/large/4281.png",
            "league": "Bundesliga",
            "playersList": [" "]
        },

    ],
    "PremierLeague": [
        {
            "id": 9,
            "name": "Chelsea FC",
            "country": "Inglaterra",
            "cover": "https://as01.epimg.net/img/comunes/fotos/fichas/equipos/large/58.png",
            "league": "PremierLeague",
            "playersList": [" "]
        },
        {
            "id": 10,
            "name": "Manchester United",
            "country": "Inglaterra",
            "cover": "https://as01.epimg.net/img/comunes/fotos/fichas/equipos/large/67.png",
            "league": "PremierLeague",
            "playersList": [" "]
        },
        {
            "id": 11,
            "name": "Manchester City",
            "country": "Inglaterra",
            "cover": "https://as01.epimg.net/img/comunes/fotos/fichas/equipos/large/66.png",
            "league": "PremierLeague",
            "playersList": [" "]
        },
        {
            "id": 12,
            "name": "Liverpool FC",
            "country": "Inglaterra",
            "cover": "https://as01.epimg.net/img/comunes/fotos/fichas/equipos/large/65.png",
            "league": "PremierLeague",
            "playersList": [" "]
        },

    ]
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancers())

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);