import React from 'react';
import Layout from '../../components/Layout';
import Pure from './Pure';

const title = 'Pure CSS study';

function action() {
  return {
    chunks: ['pure'],
    title,
    component: (
      <Layout>
        <Pure title={title} />
      </Layout>
    ),
  };
}

export default action;
