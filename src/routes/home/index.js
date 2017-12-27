import React from 'react';
import Home from './Home';

async function action({axios, isMobile}) {
  let imageType = isMobile ? 'small' : 'large';

  const banner = await axios({
    method: 'get',
    url: 'http://10.199.101.234:8090/api/hw/list/hbanner',
    params: {
      imageType: imageType,
      pub: 'online'
    }
  })

  const card = await axios({
    method: 'get',
    url: 'http://10.199.101.234:8090/api/hw/list/hnav',
    params: {
      imageType: imageType,
      pub: 'online'
    }
  })

  const bannerData = banner.data.result;
  const cardData = card.data.result;

  return {
    chunks: ['home'],
    title: 'React Starter Kit',
    component: (
      <Home bannerData={bannerData} cardData={cardData}/>
    ),
  };
}

export default action;
