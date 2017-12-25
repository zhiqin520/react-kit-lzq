import React from 'react';
import Home from './Home';

async function action() {
  return {
    chunks: ['home'],
    title: 'React Starter Kit',
    component: (
      <Home/>
    ),
  };
}

export default action;
