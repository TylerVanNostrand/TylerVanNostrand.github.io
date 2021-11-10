
import './App.css';
import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import Blog from './Pages/Blog';
import AboutMe from './Pages/AboutMe';
import ProjectPage from './Pages/ProjectPage';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
    return (
        <>
            <body className='back text-white'>
                <div className="container back">
                    <BrowserRouter>
                        <Header />
                        <Switch>
                            <Route path="/aboutme">
                                <AboutMe />
                            </Route>
                            <Route path="/blog">
                                <Blog />
                                <Route path="/projects">
                                    <ProjectPage />
                                </Route>
                            </Route>
                            <Route path="/">
                                <Home />
                            </Route>
                        </Switch>
                        <Footer />
                    </BrowserRouter>
                </div>
            </body>
        </>
    )
}


export default App;
