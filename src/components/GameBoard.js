import React from 'react'
import { Circle, Union } from '../images'

const GameBoard = () => {
    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='col-6 mt-5'>
                        <Union />
                    </div>
                    <div className='col-6 circles'>
                        <div className='row circle1'>
                            <Circle />
                        </div>
                        <div className='row circle2 mt-5'>
                            <Circle />
                        </div>
                        <div className='row circle3 mt-5'>
                            <Circle />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GameBoard