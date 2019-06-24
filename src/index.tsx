/**
 * @class ExampleComponent
 */

import * as React from 'react'
import './styles.css';

export interface TimerProps {
  startTimer: boolean;
  countDown: number;
  reset?: boolean;
  TriesCount?: number;
  limitResetTries?: boolean;
  resetTimerEvent?: (...args: any[]) => void;
}

interface TimerState {
  startTimer: boolean;
  seconds: number;
  minutes: number;
  resend: boolean;
  resendTriesCount: number;
}

export default class ReactTimer extends React.Component<TimerProps, TimerState> {
  interval: any;
  seconds: number = 59;
  counter: number = 3;

  constructor(props: TimerProps) {
    super(props);

    this.state = {
      startTimer: this.props.startTimer,
      seconds: this.seconds,
      minutes: this.props.countDown === 1 ? 0 : this.props.countDown - 1,
      resend: false,
      resendTriesCount: this.props.TriesCount ? this.props.TriesCount : 0
    }
  }

  componentDidMount() {
    if (this.props.startTimer) {
      this.countDown();
    }
  }

  private countDown() {
    this.interval = setInterval(() => {
      this.setState((prevState) => {
        let seconds: number;
        let minutes: number = prevState.minutes;

        if (prevState.seconds === 0) {
          seconds = this.seconds;
          minutes = prevState.minutes > 0 ? prevState.minutes - 1 : prevState.minutes;
          return { seconds, minutes };
        }
        seconds = prevState.seconds - 1;
        return { seconds, minutes }
      });

      //stop interval on minutes 0 and seconds 0
      if (this.state.minutes === 0 && this.state.seconds === 0) {
        if (this.props.reset) {
          if (this.props.limitResetTries) {
            if (this.state.resendTriesCount !== 0)
              this.setState({ resend: true });
            else
              this.setState({ resend: false });
          } else
            this.setState({ resend: true });
        } else {
          this.setState({ resend: true });
        }

        clearInterval(this.interval);
      }
    }, 1000);
  }

  private resetTimerEvent() {
    if (this.props.limitResetTries)
      this.setState(prevState => {
        let tries = prevState.resendTriesCount > 0 ? prevState.resendTriesCount - 1 : 0;
        return {
          resend: false,
          minutes: this.props.countDown === 1 ? 0 : this.props.countDown - 1,
          seconds: this.seconds, resendTriesCount: tries
        }
      });
    else
      this.setState({ resend: false, minutes: this.props.countDown, seconds: this.seconds });

    this.props.resetTimerEvent && this.props.resetTimerEvent();
    this.countDown();
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {

    return (
      <>
        <div className="r-timer-container">
          <div className="timer">{`0${this.state.minutes} : ${this.state.seconds <= 9 ? "0" + this.state.seconds : this.state.seconds}`}</div>
        </div>
        <div className="restart-timer-container">
          {
            this.state.resend &&
            <div
              className="restart-timer-btn"
              onClick={() => this.resetTimerEvent()}
            >resend
            </div>
          }

        </div>
      </>
    )
  }
}