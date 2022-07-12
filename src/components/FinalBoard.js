import React from 'react'
import { Line, Start } from '../images'
const FinalBoard = () => {
  return (
    <div className='totalTable'>
        <div className='container'>
            <div className='row'>
                <div className='col-6'>
                <div className='gameBoard d-flex flex-column justify-content-center'>
                    <div className='row'>
                        <h1>Final</h1>
                    </div>
                    <div className='row'>
                        <Line/>
                    </div>
                    <div className='d-flex justify-content-center'>
                        <div className=''><h2 className=''>Point:</h2></div>
                        <div className=''><h2 className=' '>sdlkffnk</h2></div>
                    </div>
                    <div className='d-flex justify-content-center'>
                        <div className=''><h2 className=''>Question:</h2></div>
                        <div className=''><h2 className=' '>sdlkffnk</h2></div>
                    </div>
                    <div className='d-flex justify-content-center'>
                        <div className=''><h2 className=''>Correct Answer:</h2></div>
                        <div className=''><h2 className=' '>sdlkffnk</h2></div>
                    </div>
                    <div className='d-flex justify-content-center'>
                     <Start/>
                    </div>
                </div>
                </div>
                <div className='col-6'>
                <div className='gameBoard d-flex flex-column justify-content-center'>
                    <div className='row'>
                        <h1>All Question</h1>
                    </div>
                    <div className='row'>
                        <Line/>
                    </div>
                    <div className='d-flex justify-content-center'>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FinalBoard