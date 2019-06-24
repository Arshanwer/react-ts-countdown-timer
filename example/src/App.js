import React, { Component } from 'react'
import {ReactCountDownTimer} from '@arshanwer/react-countdown-timer';

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
          startTimer={this.state.startTime}
          countDown={1}
          resend={true}
          limitResendTries={true}
          resendTriesCount={2}
          resendOtp={() => { }} />
      </div>
    )
  }
}
