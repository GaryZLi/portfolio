import React from 'react';

export default class QuakeUp extends React.Component {
    render() {
        return (
            <div className='project-content'>
                <h1 style={{textAlign: 'center', fontFamily: 'Fredoka One', color: 'rgb(14, 190, 224)'}}>
                    QuakeUp
                </h1>
                <div style={{fontFamily: 'Open Sans', fontSize: 22, padding: 10, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <div style={{minWidth: 300, maxWidth: 800,}}>
                        This project is a collaboration project made by me and a few engineering friends. 
                        We all thought how cool would it be to create a product that applies to many of us who were too lazy to get out of bed in the morning. 
                        The project consisted of a mattress topper, an Arduino, vibration motors, velostat conductive tape, and a breadboard. 
                        Inside the mattress topper contained many vibration motors placed in the major sections where a user would most likely have their back on when sleeping. 
                        The mattress topper was thick enough to cover all the vibration motors as if they were not there but thin enough for all the vibration to be felt. 
                        Each vibration motor was connected to the breadboard which was connected to the Arduino. 
                        The Arduino acted as an alarm in which to activate the vibration motors. 
                        The user would set an alarm on the Arduino. 
                        Once the time was up, all the vibration motors activated causing a disturbing vibration making the user unable to continue laying on the mattress topper. 
                        The vibration would only end after the user got up for a minimum of 10 minutes. 
                        This was detected by the conductive velostat tape. 
                        If the user decided to continue laying on the mattress topper or get back on the mattress topper after getting off, the 10-minute timer reset and wouldn't stop until another 10 minutes was up. 
                        Videos and pictures demonstrating the project weren't available because, immediately right after the project was finished, an earthquake caused many things falling onto the project and destroyed it before I was able to get videos or pictures. 
                        However, the Arduino code was uploaded on my Github.
                    </div>
                </div>
                <div className='gallery'>
                </div>
            </div>

        );
    }
}