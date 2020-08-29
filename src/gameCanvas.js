function GameCanvas(game, ctx){
    this.ctx = ctx
    this.game = game
}

GameCanvas.prototype.start = function start(){
    debugger
    this.bindbuttons();
    debugger
    this.game.addPlant(this.ctx)
    // this.lastTime = 0;
    // requestAnimationFrame(this.animate.bind(this));
}

GameCanvas.prototype.bindbuttons = function bindbuttons(){
    debugger
    document.getElementById("plant").addEventListener("click", this.plantnew);
    document.getElementById("water").addEventListener("click",  this.rained);
    // document.getElementById("water").onclick = event => this.rained;
    // document.getElementById("sun").onclick = event => this.sunned;
}

GameCanvas.prototype.plantnew = function plantnew(){
    debugger
    this.game.addPlant(this.ctx)
}

GameCanvas.prototype.sunned= function sunned(){
    debugger
    this.game.sunny()
}
GameCanvas.prototype.rained= function rained(){
    debugger
    this.game.watery()   
}

// GameCanvas.prototype.animate = function animate(time){
//     const timechange = time- this.lastTime;
//     this.game.moveObjects(timechange)
//     this.game.draw(this.ctx)
//     this.lastTime = time;
//     requestAnimationFrame(this.animate.bind(this));
// }



// document.getElementById("plant").addEventListener("click", displayDate);

module.exports=GameCanvas;