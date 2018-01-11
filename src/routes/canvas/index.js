import React from 'react';
import Canvas from './Canvas';

async function action() {

  return {
    chunks: ['canvas'],
    title: 'React Starter Kit',
    component: (
      <Canvas/>
    ),
  };
}

export default action;
