import React, { Component } from 'react'
import { ReactCountDownTimer } from '@arshanwer/react-countdown-timer';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startTime: false
    }
  }

  render() {
    return (
      <div>
        <ReactCountDownTimer
          startTimer={true}
          countDown={1}
          resetBtnText={'RESTART'}
          reset={true}
          TriesCount={2}
          limitResetTries={false}
          resetTimerCallback={() => { }} 
          />
      </div>
    )
  }
}
