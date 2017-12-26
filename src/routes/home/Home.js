import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Home.less';
import Cards from './components/cards/Cards';

class Home extends React.Component {
//   static propTypes = {
//     news: PropTypes.arrayOf(
//       PropTypes.shape({
//         title: PropTypes.string.isRequired,
//         link: PropTypes.string.isRequired,
//         content: PropTypes.string,
//       }),
//     ).isRequired,
//   };

  render() {
    const { bannerData, cardData } = this.props;

    return (
      <div className={s.root}>
        <div className={s.container}>
          pc:
          width: 200px;
          height: 200px;
          mobile:
          width: 1rem;
          height: 1rem;
        </div>
        <div className={s.news}>{JSON.stringify(bannerData)}</div>
        <Cards cardData={cardData}/>
      </div>
    );
  }
}


export default withStyles(s)(Home);
