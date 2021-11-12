import React from 'react'
import { Button } from 'react-bootstrap'

export default function FishingHooks() {
    return (
        <div className="col-lg-4 col-md-6 col-sm-12 py-2 justify-content-center">
            <div className="card card-body flex-column text-center p-3 mb-2 bg-secondary text-white h-100">
                <img className="card-img-top image-fluid mx-auto p-3" src='/img/Fishing.png' alt='food' />
                <br></br>
                <h3 className="card-title text-decoration-none fat">Fishing Hooks Application</h3>
                <h5 className="card-text p-2">Products, and shopping cart function for fake fishing and bait shop.</h5>
                <p className="card-text">
                    <b>Tech Stack:</b> HTML, CSS,
                                    React-Bootstrap, JavaScript, React Hooks,
                                    React-Router, Axios
                                </p>
                <Button variant="secondary" size="lg" href='' target='_blank'>
                    Demo App</Button>
                <Button variant="secondary" size="lg" href='https://github.com/TylerVanNostrand/Fishing-Hooks' target='_blank'>
                    Github Repo </Button>
            </div>
        </div>
    )
}