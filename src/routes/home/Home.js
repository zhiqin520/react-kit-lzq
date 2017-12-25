import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Home.css';

class Home extends React.Component {
  render() {
    return (
      <div className={s.container}>
          pc:
          width: 200px;
          height: 200px;
          mobile:
          width: 1rem;
          height: 1rem;
      </div>
    );
  }
}

export default withStyles(s)(Home);
