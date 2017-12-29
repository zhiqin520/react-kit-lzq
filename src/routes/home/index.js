import React from 'react';
import Home from './Home';
import {recordErrorLog} from '../../utils/commonUtils';

async function action({axios, isMobile}) {
  let imageType = isMobile ? 'small' : 'large';

  let bannerData = [];
  let cardData = [];

  try {
    const banner = await axios({
      method: 'get',
      url: 'http://10.199.101.234:8090/api/hw/list/hbanner',
      timeout: 3000,
      params: {
        imageType: imageType,
        pub: 'online'
      }
    })
    bannerData = banner.data.result;
  } catch (err) {
    recordErrorLog({ name: '后台调用接口错误', error: err }, 'error')
  }

  try {
    const card = await axios({
      method: 'get',
      url: 'http://10.199.101.234:8090/api/hw/list/hnav',
      timeout: 3000,
      params: {
        imageType: imageType,
        pub: 'online'
      }
    })
    cardData = card.data.result;
  } catch(err) {
    recordErrorLog({ name: '后台调用接口错误', error: err }, 'error')
  }

  return {
    chunks: ['home'],
    title: 'React Starter Kit',
    component: (
      <Home bannerData={bannerData} cardData={cardData}/>
    ),
  };
}

export default action;
