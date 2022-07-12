import React from 'react'
import { Line } from '../images'
const TotalTable = () => {
    return (
        <div><div className='totalTable '>
            <div className='container'>
                <div className='gameBoard d-flex flex-column justify-content-center'>
                    <div className='row'>
                        <h1>Mathematics Game</h1>
                    </div>
                    <div className='row'>
                        <Line/>
                    </div>
                    <div className='d-flex justify-content-center'>
                        <div className=''><h2 className=''>Total Score:</h2></div>
                        <div className=''><h2 className=' '>sdlkffnk</h2></div>
                    </div>
                    <div className='d-flex justify-content-center'>
                        <div className=''><h2 className=''>Total Question:</h2></div>
                        <div className=''><h2 className=' '>sdlkffnk</h2></div>
                    </div>
                    <div className='d-flex justify-content-center'>
                        <div className=''><h2 className=''>Correct Answer:</h2></div>
                        <div className=''><h2 className=' '>sdlkffnk</h2></div>
                    </div>
                    <div className='d-flex justify-content-center'>
                    <span className=''>Start</span>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default TotalTable