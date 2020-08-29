function Rain(options, ctx){
    this.pos = options.pos;
    this.vel= options.vel;
    this.color = "blue";
    this.height = options.height;
    this.width = options.width;
    this.game = options.game;
}

Rain.prototype.drawDrop = function drawDrop(ctx){
ctx.fillStyle = this.color;
xs = -3+Math.random()*4+2
ys = Math.random()*10+10
let l = Math.random*1
ctx.beginPath();
    ctx.moveTo(this.pos[0], this.pos[1])
    ctx.lineTo(this.pos[0] +l *xs, this.pos[1]+l*ys)
}

Rain.prototype.remove = function remove(){
    this.game.remove(this);
}