# react-timer

> react count down component with resend functionality.

[![NPM](https://img.shields.io/npm/v/react-timer.svg)](https://www.npmjs.com/package/react-timer) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @arshanwer/react-countdown-timer
```

[Live DEMO](https://arshanwer.github.io/react-ts-countdown-timer/)
## Usage

```tsx
import * as React from 'react'
import {ReactCountDownTimer} from '@arshanwer/react-countdown-timer';

class Example extends React.Component {
  render () {
    return (
      <ReactCountDownTimer
        startTimer={true}
        countDown={1}
        resetBtnText={'RESTART'}
        reset={true}
        limitResetTries={true}
        TriesCount={2}
        resetTimerCallback={() => { }} />
    )
  }
}
```

| Attributes                        | Types    | Default   | Required | Description                     |
|-----------------------------------|----------|-----------|----------|---------------------------------|
| startTimer                        | boolean  | -         | Yes      | Start counter                   |
| countDown                         | number   | -         | Yes      | time in minutes                 |
| reset                             | boolean  | undefined | No       | Enable resend functionality     |
| resetBtnText                      | string   | undefined | No       | Set reset button text           |
| limitResetTries                   | boolean  | undefined | No       | Limit the amount of reset timer |
| TriesCount                        | number   | undefined | No       | number of tries to reset timer  |
| resetTimerCallback(...args : any []) | function | undefined | No       | Fire custom event on reset      |

## License

MIT © [Arshanwer](https://github.com/Arshanwer)
