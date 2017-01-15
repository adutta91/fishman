import React, { Component } from 'react';

import { Tabs, Tab } from 'material-ui/Tabs';

import { tabSelected } from '../app/actions';

export default class TabList extends Component {

  handleActive(tab) {
    tabSelected(tab.props.label);
  }

  render() {
    return (
      <div id='tab-list'>
        <Tabs>
          <Tab style={{width: '100px', color: 'gray' }}
            label="bio"
            data-route="/"
            onActive={this.handleActive} />
          <Tab style={{width: '100px', color: 'gray' }}
            label="videos"
            data-route="/"
            onActive={this.handleActive} />
        </Tabs>
      </div>
   );
  }
};
