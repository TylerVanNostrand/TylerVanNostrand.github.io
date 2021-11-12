import React from 'react'

export default function AboutMe() {
    return (

        <div className='container p-3' id='aboutme'>
            <div className='row d-flex justify-content-center'>
                <div className='col'>
                    <h1 className='text-center'>About Me</h1>
                    <div className='col-4 col-sm-2 offset-4 offset-sm-5 text-center'>
                        <img src="/img/myface.png" class="card-img-top rounded mx-auto d-flex img-fluid img-thumbnail rounded-circle" alt="..." />
                    </div>
                </div>
                <br></br>
                <br></br>
                <div className="text-center text-white">
                    <p>Born and raised in Haw River, North Carolina I moved to Lexington, Kentucky in April of 2021. A former small business owner and restauranteur,
                    I decided that I wanted to try something new in my life. With over a decade of Management and Project Management
                    experience, I realized that there was no longer any room for advancement in the field of work I had found my self in. So I decided
                    it was time for a change. That was when a family member suggested I try coding. So for the past 16 weeks, I have explored a career change
                    by attending Awesome Inc's Full Stack Web Development Bootcamp. I have been able to learn at a rapid pace with deep dives into:
                    HTML, CSS, JavaScript, Bootstrap, React, PHP, SQL, and Laravel. I hope to combine my pre-Bootcamp skills, with my Bootcamp knowledge
                    to provide the skills necessary to complete tasks and projects as a team. </p>
                </div>
                <div className='col-4 justify-content-center'>
                </div>
                <br></br>
                <div className="p-3 text-center text-white">
                    <p>In my free time I love to try new restaurants, brewries, and ,now that I am in KY, distilleries. A huge soccer fan, I still
                    try to play soccer whenever I get the chance, and can be found cheering on the club I support: Manchester United.
                    While I don't have children of my own, I have been extrememly lucky to have a niece and nephew who's lives I have been able to
                    be very involved in. When not playing with them, or trying new places around town you can find me exploring this great new state!
                       </p>
                </div>
            </div>
        </div>
    )
}