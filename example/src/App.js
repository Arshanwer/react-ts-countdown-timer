import React, { Component } from 'react'

import ReactTimer from 'react-timer'
// import ReactTimer from '../../src/index';

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
        <ReactTimer
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
