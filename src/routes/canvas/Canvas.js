import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Canvas.less';
import BroswerRender from '../../components/BroswerRender/BroswerRender';


class Canvas extends React.Component {
  constructor(props) {
    super(props);
  }

  rpx = null;
  timeId = null;
  num = 0;

  componentDidMount() {
    this.rpx = document.documentElement.clientWidth / 414;

    this.num++;
    this.drawCircle(document.getElementById('pie'), this.num / 60, this.num);

    this.timeId = setInterval(() => {
      this.num++;
      if(Number(this.num) > 60) {
        this.num = 1;
      }
      this.drawCircle(document.getElementById('pie'), this.num / 60, this.num);
    }, 1000);
  }

  componentWillUnmount() {
    this.timeId && clearInterval(this.timeId);
  }

  //绘制简易饼状图
  drawCircle = (canvas, percentage, number) => {
    let canvasWidth = Math.floor(100 * this.rpx);
    let innerR = canvasWidth * 0.7 * 0.5;
    let ctx;
    canvas.setAttribute('width', canvasWidth + 'px');
    canvas.setAttribute('height', canvasWidth + 'px');

    if (canvas.getContext) {
      ctx = canvas.getContext('2d');
    }
    ctx.translate(canvasWidth / 2, canvasWidth / 2);
    ctx.beginPath();
    ctx.arc(0, 0, innerR, 0, Math.PI * 2, false);
    ctx.lineWidth = 10 * this.rpx;
    ctx.strokeStyle = "#f7f7f7";
    ctx.stroke();

    // 设置字体
    ctx.font = 24 * this.rpx + "px Arial";
    // 设置对齐方式
    ctx.textAlign = "center";
    // 设置填充颜色
    ctx.fillStyle = "#ff744d";
    // 设置字体内容，以及在画布上的位置
    ctx.fillText(number, 0, 8*this.rpx);

    let start = Math.PI * 3 / 2,
        end = Math.PI*(2*percentage + 3/2);
    ctx.beginPath();
    ctx.arc(0, 0, innerR, start, end, false);
    ctx.lineWidth = 10 * this.rpx;
    ctx.strokeStyle = "#ff744d";
    ctx.stroke();
  };

  render() {

    return (
      <div className={s.root}>
        <canvas id="pie"></canvas>
      </div>
    );
  }
}


export default BroswerRender(withStyles(s)(Canvas));
