import React from 'react';
import Home from './Home';


async function action({fetch}) {
  const banner = await fetch('http://10.199.101.234:8090/api/hw/list/hbanner?imageType=large&pub=online',
    {
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );

  const card = await fetch('http://10.199.101.234:8090/api/hw/list/hnav?imageType=small&pub=online',
    {
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );

  const bannerData = await banner.json();
  const cardData = await card.json();
  // console.log('cardData', cardData)
  // if (!data) throw new Error('Failed to load the news feed.');
  return {
    chunks: ['home'],
    title: 'React Starter Kit',
    component: (
      <Home bannerData={bannerData} cardData={cardData.result}/>
    ),
  };
}

export default action;
