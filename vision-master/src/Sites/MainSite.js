import React from 'react'
import "../Styles/MainSite.css"
import Chessboard from '../Components/Chessboard'

const MainSite = () =>
{
    return(
        <div className='main-site-container'>
            <Chessboard/>
        </div>
    )
}

export default MainSite