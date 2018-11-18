function Food(options) {
  options = options || {} // 给options设置默认值为空对象；目的是为了防止下面代码报错
  this.width = options.width || 20;
  this.height = options.height || 20;
  this.bgc = options.bgc || 'lime';
  this.x = options.x || 0;
  this.y = options.y || 0;
}

//自定义一个渲染方法添加到实例对象的原型链上

Food.prototype.render = function (target) {
  //创建食物
  var div = document.createElement('div');
  //设置食物
  div.style.width = this.width + 'px';
  div.style.height = this.height + 'px';
  div.style.background = this.bgc;
  //设置食物的位置需要注意  1. 位置随机 2.位置等于坐标*食物的宽度
  //  this.x = parseInt(Math.random()*地图的宽度/食物的宽度)  高度同理可得
  this.x = parseInt(Math.random() * target.offsetWidth / this.width);
  this.y = parseInt(Math.random() * target.offsetHeight / this.height);
  div.style.position = 'absolute';
  div.style.left = this.x * this.width + 'px';
  div.style.top = this.y * this.height + 'px';
  //div.innerText = '💩';
  //添加食物
  target.appendChild(div);
}