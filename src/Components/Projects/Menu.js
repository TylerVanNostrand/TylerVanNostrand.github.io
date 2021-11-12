import React from 'react'
import { Button } from 'react-bootstrap'

export default function Menu() {
    return (
        <div className="col-lg-4 col-md-6 col-sm-12 py-2 justify-content-center">
            <div className="card card-body flex-column text-center p-3 mb-2 bg-secondary text-white h-100">
                <img className="card-img-top image-fluid mx-auto p-3" src='/img/Menu.png' alt='food' />
                <br></br>
                <h3 className="card-title text-decoration-none fat">Menu Project</h3>
                <h5 className="card-text p-2">Pulling information from an API to populate a Menu Page</h5>
                <p className="card-text">
                    <b>Tech Stack:</b> HTML, CSS,
                                    Bootstrap, JavaScript, React, Axios
                                </p>
                <Button variant="secondary" size="lg" href='' target='_blank'>
                    Demo App </Button>
                <Button variant="secondary" size="lg" href='https://github.com/TylerVanNostrand/Menu-Project' target='_blank'>
                    Github Repo </Button>
            </div>
        </div>
    )
}