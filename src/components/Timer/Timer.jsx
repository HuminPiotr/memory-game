import React, { Component } from 'react';
import { connect } from 'react-redux';

import { saveTime } from '../../actions';

class Timer extends Component {
    constructor(props) {
        super(props);
        this.saveTime = props.saveTime;
        this.state = { 
            time: 0,
            timerOn: false
         }
         this.interval = null;
        }
        
         componentDidMount() {
             this.interval = setInterval(() => {
                 this.setState( (state) => ({
                     ...state,
                     time: this.state.time + 10
                 }))
             },10)
         }

         componentWillUnmount() {
           this.saveTime(this.state.time) 
            clearInterval(this.interval);
         }


    
    render() { 
        return ( 
            <> 
            <div className="container">
                <p>
                    <span>{("0" + Math.floor((this.state.time / 60000) % 60)).slice(-2)}:</span>
                    <span>{("0" + Math.floor((this.state.time / 1000) % 60)).slice(-2)}:</span>
                    <span>{("0" + Math.floor((this.state.time / 10) % 100)).slice(-2)}</span>
                </p>
            </div>
        </>
         );
    }
}

const mapDispatchToProps = 
    dispatch => ({
    saveTime: timeGame => 
    dispatch(saveTime(timeGame)),
})
 
export default connect(null,mapDispatchToProps)(Timer);

