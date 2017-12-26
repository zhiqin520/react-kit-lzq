import React from 'react';
import Home from './Home';

async function action({axios}) {

  const banner = await axios.get('http://10.199.101.234:8090/api/hw/list/hbanner?imageType=small&pub=online')
  const card = await axios.get('http://10.199.101.234:8090/api/hw/list/hnav?imageType=small&pub=online')

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
