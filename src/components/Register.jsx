import React, { useState } from 'react'
import { connect } from 'react-redux'
import { registerRequest, addPlayer } from '../actions'
import '../assets/styles/components/Register.scss'

const playersArray = []
const Register = (props) => {
    function Player(id, name) {
        this.id = id,
            this.name = name
    }

    const handleInput = event => {
        setValues({
            ...form,
            [event.target.name]: event.target.value + "  /  ",
            [event.target.id]: event.target.value,
        })
    }

    const numberAssigned = playersArray.length + 1

    const trueOrFalse = (myNumber) => {
        let isTrue = false
        if (myNumber == numberAssigned) {
            isTrue = true
        }
        else {
            isTrue = false
        }
        return isTrue
    }

    const [form, setValues] = useState({
        name: '',
        id: '',
    })

    const handleSubmit = event => {
        event.preventDefault();
        let currentPlayer = new Player(form.id, form.name)
        playersArray.push(currentPlayer)
        props.addPlayer(form)
    }

    return (
        <>
            <section className="register">
                <section className="register__container">
                    <h2>Regístrate</h2>
                    <form className="register__container--form" onSubmit={handleSubmit}>
                        <input
                            name="name"
                            className="input"
                            type="text"
                            placeholder="Nombre"
                            onChange={handleInput}
                        />
                        <h3 className="container--form--text">Tu numero asignado es:</h3>
                        <h1 className="container--form--number">{numberAssigned}</h1>
                        <h3 className="container--form--text">Ingresa el numero asignado</h3>
                        <input
                            name="id"
                            className="input"
                            type="number"
                            onChange={handleInput}
                        />
                        {trueOrFalse(parseInt(form.id))
                            ? <button className="button">Registrarme</button>
                            : null
                        }
                    </form>
                </section>
            </section>
        </>
    )
}
const mapDispatchToProps = {
    registerRequest,
    addPlayer,
};
const mapStateToProps = state => {
    return {
        myList: state.myList,
        players: state.players,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)