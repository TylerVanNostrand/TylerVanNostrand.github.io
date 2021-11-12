import React from 'react'
import TicTacToe from '../Components/Projects/TicTacToe'
import Mindreader from '../Components/Projects/Mindreader'
import Todo from '../Components/Projects/Todo'
import FishingHooks from '../Components/Projects/FishingHooks'
import Menu from '../Components/Projects/Menu'


export default function ProjectPage() {
    return (
        <div className='container'>
            <div className='row'>
                <h1 className='text-center'>Projects</h1>
                <Mindreader />
                <TicTacToe />
                <Todo />
                <Menu />
                <FishingHooks />
            </div>
        </div>
    )
}