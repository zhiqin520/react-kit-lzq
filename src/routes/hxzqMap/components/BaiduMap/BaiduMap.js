import React, { Component } from 'react';
import asyncLoader from '../asyncLoader/asyncLoader';

const baiduMapSrc = {
  js: [
    'https://api.map.baidu.com/getscript?v=2.0&ak=GRQSlB5HCTRae5woulOmd2dMdjo3CZVf&services=&t=20171220141726',
  ],
};

// 创建地图函数：
function createMap(position) {
  const map = new BMap.Map('dituContent'); // 在百度地图容器中创建一个地图
  const point = new BMap.Point(position.lng, position.lat); // 定义一个中心点坐标121.514175,31.240237
  map.centerAndZoom(point, 18); // 设定地图的中心点和坐标并将地图显示在地图容器中
  window.map = map; // 将map变量存储在全局
}

// 地图事件设置函数：
function setMapEvent() {
  map.enableDragging(); // 启用地图拖拽事件，默认启用(可不写)
  map.enableScrollWheelZoom(); // 启用地图滚轮放大缩小
  map.enableDoubleClickZoom(); // 启用鼠标双击放大，默认启用(可不写)
  map.enableKeyboard(); // 启用键盘上下左右键移动地图˚
}

// 地图控件添加函数：
function addMapControl() {
  // 向地图中添加缩放控件
  const ctrl_nav = new BMap.NavigationControl({
    anchor: BMAP_ANCHOR_TOP_LEFT,
    type: BMAP_NAVIGATION_CONTROL_LARGE,
  });
  map.addControl(ctrl_nav);
  // 向地图中添加缩略图控件
  const ctrl_ove = new BMap.OverviewMapControl({
    anchor: BMAP_ANCHOR_BOTTOM_RIGHT,
    isOpen: 1,
  });
  map.addControl(ctrl_ove);
  // 向地图中添加比例尺控件
  const ctrl_sca = new BMap.ScaleControl({ anchor: BMAP_ANCHOR_BOTTOM_LEFT });
  map.addControl(ctrl_sca);
}

// 创建InfoWindow
// function createInfoWindow(i) {
//   let json = markerArr[i];
//   let iw = new BMap.InfoWindow("<b class='iw_poi_title' title='" + json.title + "'>" + json.title + "</b><div class='iw_poi_content'>" + json.content + "</div>");
//   return iw;
// }

// 创建一个中心点图标
function createMarker(position) {
  const point = new BMap.Point(position.lng, position.lat);
  // var myIcon = new BMap.Icon("http://lbsyun.baidu.com/jsdemo/img/fox.gif", new BMap.Size(300,157));
  const marker = new BMap.Marker(point); // 创建标注
  map.addOverlay(marker);
}

function createImgLay(position) {
  const SW = new BMap.Point(position.lng - 0.00001, position.lat - 0.00001);
  console.log(SW);
  const NE = new BMap.Point(position.lng + 0.00001, position.lat + 0.00001);

  const groundOverlayOptions = {
    opacity: 0.1, // 设置透明度
    displayOnMinLevel: 11,
    displayOnMaxLevel: 18,
  };

  // 初始化GroundOverlay
  const groundOverlay = new BMap.GroundOverlay(
    new BMap.Bounds(SW, NE),
    groundOverlayOptions,
  );
  groundOverlay.setImageURL(
    'https://staticuat.shhxzq.com/pcxjb/public/images/footer/erCode.jpg',
  );
  map.addOverlay(groundOverlay);
}

// 创建一个中心点的圆
function createCircle(position) {
  const point = new BMap.Point(position.lng, position.lat);
  const circle = new BMap.Circle(point, 50, {
    strokeColor: '#96D7FB',
    fillColor: '#E2EFF4',
    strokeWeight: 2,
    strokeOpacity: 0.5,
  });
  map.addOverlay(circle);
}

class BaiduMap extends Component {
  static contextTypes = {};

  constructor(props, context) {
    super(props, context);
    this.state = {};
  }

  componentWillReceiveProps(newProps) {
    if (newProps && newProps.loadState) {
      createMap(newProps.position); // 创建地图
      setMapEvent(); // 设置地图事件
      newProps.needControl && addMapControl(); // needControl为true时,向地图添加控件
      createMarker(newProps.position);
      // createImgLay(newProps.position);   //如果觉得circle的圆不够圆，用此方法，添加图层，图层内容为视觉提供的圆
      createCircle(newProps.position);
    }
  }

  render() {
    const { width, height } = this.props;

    return (
      <div style={{ margin: '0 auto', width }}>
        <div id="dituContent" style={{ height }} />
      </div>
    );
  }
}

export default asyncLoader({
  jsFiles: baiduMapSrc.js,
})(BaiduMap);
