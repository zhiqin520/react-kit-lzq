import React from 'react';
import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Cards.less';
import {isEmpty} from '../../../../utils/commonUtils';


class Cards extends React.Component {
  constructor(props) {
    super(props);
  }

  handleBtnClick = (href) => {
    return () => {
      window.open(href);
    }
  }

  render() {
    let {cardData} = this.props;

    return (
      <div className={s.cardWrapper}>
        {!isEmpty(cardData) && cardData.map((item, index) => {
          return (<div className={s.cards} key={`cards${index}`}>
            <div className={cx(s.pic)}>
              <img src={item.imageUrl}/>
            </div>
            <div className={s.content}>
              <div className={s.title}>
                <div>{item.title}</div>
                <div>{item.subTitle}</div>
              </div>
              <div className={s.line}></div>
              <div className={s.detail}>
                {item.summary}
              </div>
              <div className={cx(s.greyBtn)} onClick={this.handleBtnClick(item.linkUrl)}>
                {item.linkText}
                <div className={s.triangle}></div>
              </div>
            </div>
          </div>)
        })}
      </div>
    );
  }
}

export default withStyles(s)(Cards);


