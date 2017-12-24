import React from 'react';
import BaiduMap from './components/BaiduMap/BaiduMap';

class HxzqMap extends React.Component {
  render() {
    return (
      <div>
        <h3 style={{ textAlign: 'center' }}>上海华信证券有限责任公司</h3>
        {typeof window !== 'undefined' && (
          <BaiduMap
            position={{ lng: 121.476267, lat: 31.236398 }}
            needControl
            height={`${388}px`}
            width={`${690}px`}
          />
        )}
      </div>
    );
  }
}

export default HxzqMap;
