import React from 'react'
import { Row } from 'react-bootstrap'
//import { Link } from 'react-router-dom';
import './Splash.css'

export default function Splash() {
    return (
        <div class='container-fluid'>
            <div class='row'>
                <div class='col-12'>
                    <div class="card bg-dark text-dark text-color">
                        <img src="/img/tech1.jpg" className="card-img width=" alt="..." />
                        <div class="card-img-overlay text-center text-color">
                            <Row>
                                <div class='col-12'>
                                    <div class='position-static text-color'>
                                        <div class="position-absolute top-50 start-50 translate-middle text-center">
                                            <h6 class="card-title fats">Welcome!</h6>
                                            <br></br>
                                            <h6 class="card-title fatter">To My Website</h6>
                                            {/* <Link to="/aboutme" as={Link} className="btn btn-secondary lg p-3">Enter</Link> */}
                                        </div>
                                    </div>
                                </div>
                            </Row>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}