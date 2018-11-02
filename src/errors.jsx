import React from 'react'

import {NoHeader} from './header';
import {Content} from './common';

export class NotFound extends React.Component {
  render() {
    return (
      <div>
        <NoHeader/>
        <Content>
          <h1 style={{textAlign: 'center', color: 'red'}}>Sorry, this page couldn't be found</h1>
          <div style={{textAlign: 'center', paddingTop: '20px'}}>{this.props.children}</div>
        </Content>
      </div>
    )
  }
}
