import React, { Component } from 'react'
import {ReactCountDownTimer} from './dist/index';

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
          resend={true}
          limitResendTries={true}
          resendTriesCount={2}
          resendOtp={() => { }} />
      </div>
    )
  }
}
