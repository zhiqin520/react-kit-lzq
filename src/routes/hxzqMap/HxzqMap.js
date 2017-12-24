import React from 'react';
import BaiduMap from './components/BaiduMap/BaiduMap';

class HxzqMap extends React.Component {
  render() {
    return (
      <div>
        <h3 style={{textAlign: 'center'}}>上海华信证券有限责任公司</h3>
        {typeof window !== 'undefined' && (
          <BaiduMap
            position={{lng: 121.476267, lat: 31.236398}}
            needControl
            height={`${388}px`}
            width={`${690}px`}
          />
        )}
        <h3 style={{textAlign: 'center'}}>
          <a href={`http://api.map.baidu.com/marker?location=40.047669,116.313082&title=我的位置&content=百度奎科大厦&output=html`}
             target='_blank'>
             查看地图
          </a>
        </h3>
      </div>
    );
  }
}

export default HxzqMap;
