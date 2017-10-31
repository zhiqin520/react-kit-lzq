/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Contact.css';

class Contact extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  componentWillMount() {
    console.log('componentWillMount');
  }

  setWebSocket = () => {
    const websocket = new WebSocket('ws://localhost:8000');
    websocket.onopen = () => {
      console.log('Websocket connected');
      websocket.send('Hello Server!');
    };

    websocket.onmessage = (event) => {
      console.log('Message from server ', event.data);
    };

    websocket.onclose = () => {
      console.log('Websocket disconnected');
    }

    websocket.onerror = function () {
      console.log('Websocket error');
    };
  }

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>{this.props.title}</h1>
          <p>...</p>
          <button onClick={this.setWebSocket}>click me connect to websocket</button>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Contact);
