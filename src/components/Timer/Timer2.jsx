import React, {useEffect, useState} from 'react';
import { connect } from 'react-redux';
import { saveTime } from '../../actions';

import './style.css'

const Timer = ( { saveTime }) => {
    
    const [time, setTime] = useState(0);
    const [timerOn, setTimeOn] = useState(false);
    let interval = null;

    // useEffect(() => {
        
    //     if(timerOn){
    //         interval = setInterval( () => {
    //             setTime(prevTime => prevTime + 10);
    
    //         }, 10)
    //     }
 
        

    // },[timerOn])

    useEffect( () => {
        interval = setInterval( () => {
              setTime(prevTime => (prevTime + 10));
              saveTime(time);
              console.log(time);
        }, 10)
        
        return () => {
            
            

            clearInterval(interval);
        }
    },[])

    

    return(
        <> 
            <div className="container">
                <p>
                    sik
                    <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
                    <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
                    <span>{("0" + Math.floor((time / 10) % 100)).slice(-2)}</span>
                </p>
            </div>
        </>
    )

}

const mapDispatchToProps = (dispatch) => ({
  saveTime: time => dispatch(saveTime(time)),  
})

export default connect(null, mapDispatchToProps)(Timer);