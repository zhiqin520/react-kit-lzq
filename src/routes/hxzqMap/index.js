import React from 'react';
import HxzqMap from './HxzqMap';

async function action() {
  return {
    chunks: ['map'],
    title: '上海华信证券',
    component: <HxzqMap />,
  };
}

export default action;
