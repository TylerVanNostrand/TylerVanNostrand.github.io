

import React from 'react'

export default function Link() {
    return (
        <div className='d-flex justify-content-end'>
            <ul className="nav col d-flex justify-content-center list-unstyled">
                <div className="template-demo">
                    <a href='https://github.com/TylerVanNostrand' target='_blank' rel='noreferrer'>
                        <button type="button" className="btn btn-social-icon btn-github btn-rounded">
                            <i className="fab fa-github-square"></i>
                        </button>
                    </a>
                    <a href='https://www.linkedin.com/in/tyler-van-nostrand' target='_blank' rel='noreferrer'><button type="button"
                        className="btn btn-social-icon btn-linkedin btn-rounded">
                        <i className="fab fa-linkedin"></i>
                    </button>
                    </a>
                </div>
            </ul>
        </div>
    )
}