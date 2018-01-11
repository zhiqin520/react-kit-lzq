import React, {Component} from 'react';


export default function BroswerRender (WrappedComponent) {
  class BroswerRender extends Component {

    render() {
      return (
        process.env.BROWSER ? <WrappedComponent/> : <div></div>
      )
    }
  }

  return BroswerRender;
};

