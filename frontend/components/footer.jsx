import React, { Component } from 'react';
import Icons from './icons'

export default class Footer extends Component {
  render() {
    return (
      <div id="footer" className="flex j-center">
        <Icons className='flex row a-end' style={{ margin: '0 30px 0 10px' }} />
      </div>
    )
  }
};
