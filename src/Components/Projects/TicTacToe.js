import React from 'react'
import { Button } from 'react-bootstrap'


export default function TicTacToe() {
    return (
        <div className="col-lg-4 col-md-6 col-sm-12 py-2 justify-content-center">
            <div className="card card-body flex-column text-center p-3 mb-2 bg-secondary text-white h-100">
                <img className="card-img-top image-fluid mx-auto p-3" src='/img/TicTacToe.png' alt='food' />
                <br></br>
                <h3 className="card-title text-decoration-none fat">TicTacToe Project</h3>
                <h5 className="card-text p-2">Application lets user play traditional Tic-Tac-Toe and continue until a win/tie scenario is reached</h5>
                <p className="card-text">
                    <b>Tech Stack:</b> HTML, CSS,
                                    Bootstrap, JavaScript
                                </p>
                <Button variant="secondary" size="lg" href='https://tylervannostrand.github.io/TicTacToePr/' target='_blank'>
                    Demo App </Button>
                <Button variant="secondary" size="lg" href='https://github.com/TylerVanNostrand/TicTacToePr' target='_blank'>
                    Github Repo </Button>
            </div>
        </div>

    )
}