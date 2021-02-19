import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from '../containers/Home'
import TeamGenerator from '../containers/TeamGenerator'
import NotFoundPage from '../containers/404'
import Layout from '../components/Layout'
import TeamsReadys from '../containers/TeamsReadys'

const App = () => (
    <BrowserRouter>
        <Layout>
                <Route exact path="/" component={Home} />
                <Route exact path="/teamgenerator" component={TeamGenerator} />
                <Route exact path="/teamsreadys"component={TeamsReadys}/>
                <Route exact path="/404" component={NotFoundPage} />
        </Layout>
    </BrowserRouter >
)
export default App