function Snake(options) {
  options = options || {} ; // 给options设置默认值为空对象；目的是为了防止下面代码报错
  this.width = options.width || 20 ;
  this.height = options.height || 20 ;
  this.headBgc = options.headBgc || 'blue';
  this.bodyBgc = options.bodyBgc || 'red';
  //蛇移动的方向
  this.direction = options.direction || 'right';
  this.body = options.body || [
    {x: 3, y: 0},  //蛇头位置
    {x: 2, y: 0},  //蛇中间一节的位置
    {x: 1, y: 0}   //蛇尾位置
  ]
}
var s = new Snake();
//console.log(s);
//自定渲染方法添加到原型再把蛇添加到map
Snake.prototype.render = function (target) {
  for (var i = 0; i < this.body.length; i++) {
    var item = this.body[i] ;//获得每一节蛇身体坐标
    console.log(item);
    //创建蛇
    var span = document.createElement('span');
    //设置蛇
    span.style.width = this.width + 'px';
    span.style.height = this.height + 'px';
    //判断蛇身体颜色（用if ... else ...也可以）
    span.style.backgroundColor = i === 0 ? this.headBgc : this.bodyBgc;
    
    //蛇的位置设置 
    span.style.position = 'absolute';
    span.style.left = item.x * this.width + 'px';
    span.style.top = item.y * this.height + 'px';
    //添加蛇到地图
    target.appendChild(span);
  }
}
//蛇的移动自定义个方法添加到原型
Snake.prototype.move = function(target) {
  //思路：得到蛇的没接坐标，移动是重新复制每一节的坐标（不用这种方法  复杂）
  //思路：使用第二种方式去实现蛇的移动
  //1. 复制body中的原来的蛇头(蛇头的坐标)，得到一个蛇头坐标，作为新的蛇头（newHead）
  //2. 根据蛇的移动方向去决定newHead的坐标
  //3. 将newHead 添加到body数据中（unshift）
  //4. 将body中的蛇尾给删除掉（pop）
  var newHead = {
    x:this.body[0].x,
    y:this.body[0].y,
  }
  
  switch(this.direction){
    case 'up':
      newHead.y--;
        break;
    case 'left':
      newHead.x--;
      break;
    case 'down':
      newHead.y++;
      break;
    case 'right':
      newHead.x++;
      break;     
  }
    this.body.unshift(newHead);
    this.body.pop();
    
    var spans = target.querySelectorAll('span')
    for (var i = 0; i < spans.length; i++) {
      target.removeChild(spans[i]);
    }
    this.render(target);
    
}