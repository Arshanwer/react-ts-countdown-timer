# react-timer

> react count down component with resend functionality.

[![NPM](https://img.shields.io/npm/v/react-timer.svg)](https://www.npmjs.com/package/react-timer) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-timer
```

## Usage

```tsx
import * as React from 'react'

import ReactTimer from 'react-timer';

class Example extends React.Component {
  render () {
    return (
      <div>
        <ReactTimer
          startTimer={true}
          countDown={1}
          resend={true}
          limitResendTries={true}
          resendTriesCount={2}
          resendOtp={() => { }} />
      </div>
    )
  }
}
```

| Attributes                        | Types    | Default   | Required | Description                     |
|-----------------------------------|----------|-----------|----------|---------------------------------|
| startTimer                        | boolean  |     -     |    Yes   | Start counter                   |
| countDown                         | number   |     -     |    Yes   | time in minutes                 |
| reset                             | boolean  | undefined |    No    | Enable resend functionality     |
| limitResetTries                   | boolean  | undefined |    No    | Limit the amount of reset timer |
| TriesCount                        | number   | undefined |    No    | number of tries to reset timer  |
| resetTimerEvent(...args : any []) | function | undefined |    No    | Fire custom event on reset      |

## License

MIT © [Arshanwer](https://github.com/Arshanwer)
