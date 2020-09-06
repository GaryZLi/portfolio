import React from "react";

export default class Clouds extends React.Component { 
    render() {
        return (
            <div>
                <div className='cloud' />
                <div className='cloud' style={{ animation: 'cloudMoving 70s linear infinite', top: '20%' }} />
                <div className='cloud' style={{ animation: 'cloudMoving 80s linear infinite', top: '30%' }} />
                <div className='cloud1' />
                <div className='cloud2' />
                <div className='cloud2' style={{ animation: 'cloudMoving 50s linear infinite', top: '15%' }} />
                <div className='cloud2' style={{ animation: 'cloudMoving 100s linear infinite', top: '20%' }} />
            </div> 
        )
    }
}