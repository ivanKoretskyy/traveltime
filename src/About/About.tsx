import * as React from 'react';

export type AboutProps ={}

export type AboutState = {
  count: number
}


export class About extends React.Component<AboutProps, AboutState> {
  state = { count:1}

  render() {
    return (<div>
      {this.state.count}
    </div>)
  }
}