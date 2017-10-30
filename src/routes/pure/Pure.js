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
import s from './Pure.css';

class Pure extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>{this.props.title}</h1>

          <h3>grid image</h3>
          <div className="pure-g">
            <div className="pure-u-1 pure-u-md-1-2 pure-u-xl-1-4">
              <img className="pure-img" src="image/scenery.jpg" />
            </div>
            <div className="pure-u-1 pure-u-md-1-2 pure-u-xl-1-4">
              <img className="pure-img" src="image/scenery.jpg" />
            </div>
            <div className="pure-u-1 pure-u-md-1-2 pure-u-xl-1-4">
              <img className="pure-img" src="image/scenery.jpg" />
            </div>
            <div className="pure-u-1 pure-u-md-1-2 pure-u-xl-1-4">
              <img className="pure-img" src="image/scenery.jpg" />
            </div>
          </div>

          <h3>grid</h3>
          <div className="pure-g">
            <div className="pure-u-1 pure-u-md-1-3"> ...</div>
            <div className="pure-u-1 pure-u-md-1-3"> ...</div>
            <div className="pure-u-1 pure-u-md-1-3"> ...</div>
          </div>

          <h3>form</h3>
          <form className="pure-form pure-form-aligned">
            <fieldset>
              <div className="pure-control-group">
                <label htmlFor="name">Username</label>
                <input id="name" type="text" placeholder="Username" />
                <span className="pure-form-message-inline">
                  This is a required field.
                </span>
              </div>

              <div className="pure-control-group">
                <label htmlFor="password">Password</label>
                <input id="password" type="password" placeholder="Password" />
              </div>

              <div className="pure-control-group">
                <label htmlFor="email">Email Address</label>
                <input id="email" type="email" placeholder="Email Address" />
              </div>

              <div className="pure-control-group">
                <label htmlFor="foo">Supercalifragilistic Label</label>
                <input
                  id="foo"
                  type="text"
                  placeholder="Enter something here..."
                />
              </div>

              <div className="pure-controls">
                <label htmlFor="cb" className="pure-checkbox">
                  <input id="cb" type="checkbox" /> I've read the terms and
                  conditions
                </label>

                <button
                  type="submit"
                  className="pure-button pure-button-primary"
                >
                  Submit
                </button>
              </div>
            </fieldset>
          </form>

          <h3>button</h3>
          <button className="pure-button pure-button-disabled">
            A Disabled Button
          </button>
          <button className="pure-button pure-button-primary">
            A primary Button
          </button>
          <button className="pure-button pure-button-active ">
            active Button
          </button>

          <h3>table</h3>
          <table className="pure-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Make</th>
                <th>Model</th>
                <th>Year</th>
              </tr>
            </thead>

            <tbody>
              <tr className="pure-table-odd">
                <td>1</td>
                <td>Honda</td>
                <td>Accord</td>
                <td>2009</td>
              </tr>

              <tr>
                <td>2</td>
                <td>Toyota</td>
                <td>Camry</td>
                <td>2012</td>
              </tr>

              <tr className="pure-table-odd">
                <td>3</td>
                <td>Hyundai</td>
                <td>Elantra</td>
                <td>2010</td>
              </tr>

              <tr>
                <td>4</td>
                <td>Ford</td>
                <td>Focus</td>
                <td>2008</td>
              </tr>

              <tr className="pure-table-odd">
                <td>5</td>
                <td>Nissan</td>
                <td>Sentra</td>
                <td>2011</td>
              </tr>

              <tr>
                <td>6</td>
                <td>BMW</td>
                <td>M3</td>
                <td>2009</td>
              </tr>

              <tr className="pure-table-odd">
                <td>7</td>
                <td>Honda</td>
                <td>Civic</td>
                <td>2010</td>
              </tr>

              <tr>
                <td>8</td>
                <td>Kia</td>
                <td>Soul</td>
                <td>2010</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Pure);
